<template>
  <div :class="[
    'flex bg-gray-100 relative w-full sticky top-0 z-50',
    borderConfig.getHeaderBorderClass()
  ]">
    <!-- 行选择列 -->
    <div v-if="rowSelection === 'multipleRow'"
         :style="{ width: '48px', flexShrink: 0 }"
         :class="[
           TablePaddingSize[size],
           'flex items-center justify-center sticky left-0 z-40 bg-gray-100',
           borderConfig.getCellBorderClass(false)
         ]">
      <input type="checkbox"
             :checked="selectionState.isAllSelected.value"
             :indeterminate="selectionState.isIndeterminate.value"
             @change="selectionState.toggleAllRows"
             class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
    </div>
    <div v-else-if="rowSelection === 'singleRow'"
         :style="{ width: '48px', flexShrink: 0 }"
         :class="[
           'sticky left-0 z-40 bg-gray-100',
           borderConfig.getCellBorderClass(false)
         ]">
    </div>

    <!-- 左侧固定列 -->
    <template v-for="(col, index) in fixedColumns.leftFixedColumns.value" :key="`left-${col.key}`">
      <div :style="[
             { width: calcSize(col.width || 150), left: fixedColumns.getLeftOffset(index) },
             { position: 'sticky', flexShrink: 0, zIndex: 35 }
           ]"
           :class="[
             'font-medium bg-gray-100',
             TextAlign[col.align || 'left'],
             TablePaddingSize[size],
             borderConfig.getCellBorderClass(true, 'left'),
             isDragOver(col) && 'border-2 h-full w-full border-blue-500 border-dashed'
           ]">
        <!-- 表头内容保持不变 -->
        <div v-if="columnMove"
             :draggable="true"
             class="h-full w-full cursor-move select-none"
             @dragend="handleDragEnd"
             @dragleave="handleDragEnd"
             @dragstart="(e) => handleDragStart(col, e)"
             @dragover.prevent="(e) => handleDragOver(col, e)"
             @drop.prevent="(e) => handleDrop(col, e)">
          <div class="inline-flex items-center flex-1 justify-inherit"
               @click="col.sortable && handleSort(col, $event)">
            <span>{{ col.label }}</span>
            <div v-if="col.sortable" class="inline-flex items-center ml-2 min-w-[1em]">
              <ShadcnIcon :class="[
                            'font-semibold transition-transform',
                            col.sort ? 'opacity-100' : 'opacity-0',
                            col.sort === 'asc' && 'text-blue-500',
                            col.sort === 'desc' && 'rotate-180 text-blue-500'
                          ]"
                          icon="MoveUp"
                          size="16">
              </ShadcnIcon>
            </div>
          </div>
        </div>

        <div v-else class="h-full w-full" @click="col.sortable && handleSort(col, $event)">
          <span>{{ col.label }}</span>
          <div v-if="col.sortable" class="inline-flex items-center ml-2 min-w-[1em]">
            <ShadcnIcon :class="[
                          'font-semibold transition-transform',
                          col.sort ? 'opacity-100' : 'opacity-0',
                          col.sort === 'asc' && 'text-blue-500',
                          col.sort === 'desc' && 'rotate-180 text-blue-500'
                        ]"
                        icon="MoveUp"
                        size="16">
            </ShadcnIcon>
          </div>
        </div>

        <div v-if="col.resizable"
             data-resize-handle
             class="absolute top-0 right-0 h-full w-1 cursor-col-resize flex items-center justify-center group"
             @click.stop
             @mousedown.stop="handleMouseDown($event, col)">
          <div class="h-2/3 w-px bg-gray-300 group-hover:bg-blue-500"></div>
        </div>
      </div>
    </template>

    <!-- 可滚动列 -->
    <template v-for="col in fixedColumns.scrollableColumns.value" :key="col.key">
      <div :style="[
             { width: calcSize(col.width || 150) },
             { position: 'relative', flexShrink: 0 }
           ]"
           :class="[
             'font-medium',
             TextAlign[col.align || 'left'],
             TablePaddingSize[size],
             borderConfig.getCellBorderClass(false),
             isDragOver(col) && 'border-2 h-full w-full border-blue-500 border-dashed'
           ]">
        <!-- 表头内容保持不变 -->
        <div v-if="columnMove"
             :draggable="true"
             class="h-full w-full cursor-move select-none"
             @dragend="handleDragEnd"
             @dragleave="handleDragEnd"
             @dragstart="(e) => handleDragStart(col, e)"
             @dragover.prevent="(e) => handleDragOver(col, e)"
             @drop.prevent="(e) => handleDrop(col, e)">
          <div class="inline-flex items-center flex-1 justify-inherit"
               @click="col.sortable && handleSort(col, $event)">
            <span>{{ col.label }}</span>
            <div v-if="col.sortable" class="inline-flex items-center ml-2 min-w-[1em]">
              <ShadcnIcon :class="[
                            'font-semibold transition-transform',
                            col.sort ? 'opacity-100' : 'opacity-0',
                            col.sort === 'asc' && 'text-blue-500',
                            col.sort === 'desc' && 'rotate-180 text-blue-500'
                          ]"
                          icon="MoveUp"
                          size="16">
              </ShadcnIcon>
            </div>
          </div>
        </div>

        <div v-else class="h-full w-full" @click="col.sortable && handleSort(col, $event)">
          <span>{{ col.label }}</span>
          <div v-if="col.sortable" class="inline-flex items-center ml-2 min-w-[1em]">
            <ShadcnIcon :class="[
                          'font-semibold transition-transform',
                          col.sort ? 'opacity-100' : 'opacity-0',
                          col.sort === 'asc' && 'text-blue-500',
                          col.sort === 'desc' && 'rotate-180 text-blue-500'
                        ]"
                        icon="MoveUp"
                        size="16">
            </ShadcnIcon>
          </div>
        </div>

        <div v-if="col.resizable"
             data-resize-handle
             class="absolute top-0 right-0 h-full w-1 cursor-col-resize flex items-center justify-center group"
             @click.stop
             @mousedown.stop="handleMouseDown($event, col)">
          <div class="h-2/3 w-px bg-gray-300 group-hover:bg-blue-500"></div>
        </div>
      </div>
    </template>

    <!-- 右侧固定列 -->
    <template v-for="(col, index) in fixedColumns.rightFixedColumns.value" :key="`right-${col.key}`">
      <div :style="[
             { width: calcSize(col.width || 150), right: fixedColumns.getRightOffset(index) },
             { position: 'sticky', flexShrink: 0, zIndex: 35 }
           ]"
           :class="[
             'font-medium bg-gray-100',
             TextAlign[col.align || 'left'],
             TablePaddingSize[size],
             borderConfig.getCellBorderClass(true, 'right'),
             isDragOver(col) && 'border-2 h-full w-full border-blue-500 border-dashed'
           ]">
        <!-- 表头内容保持不变 -->
        <div v-if="columnMove"
             :draggable="true"
             class="h-full w-full cursor-move select-none"
             @dragend="handleDragEnd"
             @dragleave="handleDragEnd"
             @dragstart="(e) => handleDragStart(col, e)"
             @dragover.prevent="(e) => handleDragOver(col, e)"
             @drop.prevent="(e) => handleDrop(col, e)">
          <div class="inline-flex items-center flex-1 justify-inherit"
               @click="col.sortable && handleSort(col, $event)">
            <span>{{ col.label }}</span>
            <div v-if="col.sortable" class="inline-flex items-center ml-2 min-w-[1em]">
              <ShadcnIcon :class="[
                            'font-semibold transition-transform',
                            col.sort ? 'opacity-100' : 'opacity-0',
                            col.sort === 'asc' && 'text-blue-500',
                            col.sort === 'desc' && 'rotate-180 text-blue-500'
                          ]"
                          icon="MoveUp"
                          size="16">
              </ShadcnIcon>
            </div>
          </div>
        </div>

        <div v-else class="h-full w-full" @click="col.sortable && handleSort(col, $event)">
          <span>{{ col.label }}</span>
          <div v-if="col.sortable" class="inline-flex items-center ml-2 min-w-[1em]">
            <ShadcnIcon :class="[
                          'font-semibold transition-transform',
                          col.sort ? 'opacity-100' : 'opacity-0',
                          col.sort === 'asc' && 'text-blue-500',
                          col.sort === 'desc' && 'rotate-180 text-blue-500'
                        ]"
                        icon="MoveUp"
                        size="16">
            </ShadcnIcon>
          </div>
        </div>

        <div v-if="col.resizable"
             data-resize-handle
             class="absolute top-0 right-0 h-full w-1 cursor-col-resize flex items-center justify-center group"
             @click.stop
             @mousedown.stop="handleMouseDown($event, col)">
          <div class="h-2/3 w-px bg-gray-300 group-hover:bg-blue-500"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {ColumnProps, DataTableHeaderEmits, RowSelectionMode, TextAlign} from '../types'
import {Size, TablePaddingSize} from '../size'
import ShadcnIcon from '@/ui/icon'
import {calcSize} from '@/utils/common'
import {useResize} from '../hooks/useResize'
import {useRowSelection} from '../hooks/useRowSelection'
import {useColumnDrag} from '../hooks/useColumnDrag'
import {useFixedColumns} from '../hooks/useFixedColumns'
import {UseBorderReturn} from '../hooks/useBorder'

const props = withDefaults(defineProps<{
  columns: ColumnProps[]
  data: Record<string, any>[]
  size?: Size
  rowSelection?: RowSelectionMode
  selectionState: ReturnType<typeof useRowSelection>
  columnMove?: boolean
  borderConfig: UseBorderReturn
}>(), {
  size: 'default',
  columnMove: false
})

const emits = defineEmits<DataTableHeaderEmits>()

const localColumns = ref<ColumnProps[]>([...props.columns])

watch(() => props.columns, (newColumns) => {
  localColumns.value = [...newColumns]
}, {deep: true})

const fixedColumns = useFixedColumns(localColumns)

const {
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  handleDrop,
  isDragOver
} = useColumnDrag(localColumns, props.columnMove, (event, columns) => {
  localColumns.value = [...columns]
  emits(event, columns)
})

const handleSort = (column: ColumnProps, event: MouseEvent) => {
  event.stopPropagation()
  emits('on-sort', column, event)
}

const {handleMouseDown} = useResize(emits)
</script>