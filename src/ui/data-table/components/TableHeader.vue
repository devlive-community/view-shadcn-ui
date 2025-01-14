<template>
  <div class="flex border-b bg-gray-100 relative w-full sticky top-0 z-10">
    <div v-if="rowSelection === 'multipleRow'"
         :style="{ width: '48px', flexShrink: 0 }"
         :class="[TablePaddingSize[size]]"
         class="flex items-center justify-center">
      <input type="checkbox"
             :checked="selectionState.isAllSelected.value"
             :indeterminate="selectionState.isIndeterminate.value"
             @change="selectionState.toggleAllRows"
             class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
    </div>
    <div v-else-if="rowSelection === 'singleRow'"
         :style="{ width: '48px', flexShrink: 0 }">
    </div>

    <!-- 数据列 -->
    <div v-for="col in localColumns"
         :key="col.key"
         :style="[
           { width: calcSize(col.width || 150) },
           { position: 'relative', flexShrink: 0 }
         ]"
         :class="[ 'font-medium',
           TextAlign[col.align || 'left'],
           TablePaddingSize[size],
           isDragOver(col) && 'border-2 h-full w-full border-blue-500 border-dashed'
         ]">
      <!-- 拖拽区域 -->
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
          <div v-if="col.sortable"
               class="inline-flex items-center ml-2 min-w-[1em]">
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

      <!-- 非拖拽状态 -->
      <div v-else
           class="h-full w-full"
           @click="col.sortable && handleSort(col, $event)">
        <span>{{ col.label }}</span>
        <div v-if="col.sortable"
             class="inline-flex items-center ml-2 min-w-[1em]">
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

      <!-- 调整宽度的区域 -->
      <div v-if="col.resizable"
           data-resize-handle
           class="absolute top-0 right-0 h-full w-1 cursor-col-resize flex items-center justify-center group"
           @click.stop
           @mousedown.stop="handleMouseDown($event, col)">
        <div class="h-2/3 w-px bg-gray-300 group-hover:bg-blue-500"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ColumnProps, DataTableHeaderEmits, RowSelectionMode, TextAlign } from '../types'
import { Size, TablePaddingSize } from '../size'
import ShadcnIcon from '@/ui/icon'
import { calcSize } from '@/utils/common'
import { useResize } from '../hooks/useResize'
import { useRowSelection } from '../hooks/useRowSelection'
import { useColumnDrag } from '../hooks/useColumnDrag'

const props = withDefaults(defineProps<{
  columns: ColumnProps[]
  data: Record<string, any>[]
  size?: Size
  rowSelection?: RowSelectionMode
  selectionState: ReturnType<typeof useRowSelection>
  columnMove?: boolean
}>(), {
  size: 'default',
  columnMove: false
})

const emits = defineEmits<DataTableHeaderEmits>()

// 本地维护列数据，用于拖拽时的状态管理
const localColumns = ref<ColumnProps[]>([...props.columns])

watch(() => props.columns, (newColumns) => {
  localColumns.value = [...newColumns]
}, { deep: true })

const {
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  handleDrop,
  isDragOver
} = useColumnDrag(localColumns, props.columnMove, (event, columns) => {
  localColumns.value = [...columns] // 首先更新本地状态
  emits(event, columns)
})

const handleSort = (column: ColumnProps, event: MouseEvent) => {
  event.stopPropagation()
  emits('on-sort', column, event)
}

const { handleMouseDown } = useResize((_event, column, width) => {
  emits('on-resizable', column, width)
})
</script>