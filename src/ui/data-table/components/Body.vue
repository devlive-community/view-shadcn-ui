<template>
  <div class="relative flex flex-col w-full" ref="tableRef" @click.stop>
    <!-- 加载状态覆盖层 -->
    <div v-if="loading" class="absolute inset-0 z-50">
      <slot name="loading"/>
    </div>

    <!-- 数据行渲染区域 -->
    <template v-else-if="data && data.length > 0">
      <div v-for="(row, rowIndex) in data"
           :key="rowIndex"
           :class="[
             'flex border-b items-center h-full',
             BaseSize[size],
             selectionState.isRowSelected(rowIndex) && 'bg-blue-50',
             !selectionState.isRowSelected(rowIndex) && 'hover:bg-gray-50'
           ]"
           @click="handleRowClick(rowIndex, row)">

        <!-- 行选择列 - 响应式背景色 -->
        <div v-if="rowSelection === 'multipleRow'"
             :style="{ width: '48px', flexShrink: 0 }"
             :class="[
               TablePaddingSize[size],
               'flex items-center justify-center sticky left-0 z-20 border-r border-gray-200',
               selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
             ]"
             @click.stop>
          <input type="checkbox"
                 :checked="selectionState.isRowSelected(rowIndex)"
                 @change="selectionState.toggleRowSelection(rowIndex)"
                 class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
        </div>
        <div v-else-if="rowSelection === 'singleRow'"
             :style="{ width: '48px', flexShrink: 0 }"
             :class="[
               'flex items-center justify-center sticky left-0 z-20 border-r border-gray-200',
               selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
             ]"
             @click.stop>
          <input type="radio"
                 :checked="selectionState.isRowSelected(rowIndex)"
                 @change="selectionState.toggleRowSelection(rowIndex)"
                 :name="'row-select'"
                 class="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"/>
        </div>

        <!-- 左侧固定列渲染 -->
        <template v-for="(col, colIndex) in fixedColumns.leftFixedColumns.value" :key="`left-${col.key}`">
          <!-- 自定义编辑器组件 -->
          <component :is="col.cellEditor"
                     v-if="col.cellEditor && col.editable && editableState.isEditing(rowIndex, col.key)"
                     :field-key="col.key"
                     :value="row[col.key]"
                     :width="calcSize(col.width || 150)"
                     :is-row-editing="!!editableState.editingRowState.value"
                     :on-row-value-change="editableState.updateRowValue"
                     v-bind="col.cellEditorProps"
                     :style="{ left: fixedColumns.getLeftOffset(colIndex), zIndex: 15 }"
                     :class="[
                       'sticky border-r-2 border-gray-300',
                       selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
                     ]"
                     @cancel="editableState.stopEditing"
                     @save="handleSaveEdit(rowIndex, col.key, $event, row, col)"/>

          <!-- 默认输入编辑器 -->
          <CellInputEditor v-else-if="col.editable && editableState.isEditing(rowIndex, col.key)"
                           :field-key="col.key"
                           :is-row-editing="!!editableState.editingRowState.value"
                           :on-row-value-change="editableState.updateRowValue"
                           :value="row[col.key]"
                           :width="calcSize(col.width || 150)"
                           :style="{ left: fixedColumns.getLeftOffset(colIndex), zIndex: 15 }"
                           :class="[
                             'sticky border-r-2 border-gray-300',
                             selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
                           ]"
                           @cancel="editableState.stopEditing"
                           @save="handleSaveEdit(rowIndex, col.key, $event, row, col)"/>

          <!-- 普通数据单元格 -->
          <div v-else
               :class="[
                 TablePaddingSize[size],
                 TextAlign[col.align || 'left'],
                 col.ellipsis !== false ? 'relative truncate whitespace-nowrap overflow-hidden' : 'break-words whitespace-normal',
                 ((selectedCell?.rowIndex === rowIndex && selectedCell?.col === col.key) && !editableState.isEditing(rowIndex, col.key)) && 'border border-blue-400',
                 'sticky border-r-2 border-gray-300',
                 selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
               ]"
               :style="{
                 width: calcSize(col.width || 150),
                 flex: 'none',
                 left: fixedColumns.getLeftOffset(colIndex),
                 zIndex: 15
               }"
               @mousemove.stop.prevent="(col.ellipsis !== false && col.tooltip) && showTooltip($event, row[col.key])"
               @mouseleave.stop.prevent="hideTooltip"
               @click.stop="handleCellClick(rowIndex, col.key, row)"
               @dblclick.stop="handleCellDblClick(rowIndex, col.key, row, col)"
               @contextmenu.prevent="props.contextMenu && contextMenuState.show($event, rowIndex, col.key, row, col)">
            {{ row[col.key] }}
          </div>
        </template>

        <!-- 可滚动列渲染 -->
        <template v-for="col in fixedColumns.scrollableColumns.value" :key="col.key">
          <!-- 自定义编辑器组件 -->
          <component :is="col.cellEditor"
                     v-if="col.cellEditor && col.editable && editableState.isEditing(rowIndex, col.key)"
                     :field-key="col.key"
                     :value="row[col.key]"
                     :width="calcSize(col.width || 150)"
                     :is-row-editing="!!editableState.editingRowState.value"
                     :on-row-value-change="editableState.updateRowValue"
                     v-bind="col.cellEditorProps"
                     @cancel="editableState.stopEditing"
                     @save="handleSaveEdit(rowIndex, col.key, $event, row, col)"/>

          <!-- 默认输入编辑器 -->
          <CellInputEditor v-else-if="col.editable && editableState.isEditing(rowIndex, col.key)"
                           :field-key="col.key"
                           :is-row-editing="!!editableState.editingRowState.value"
                           :on-row-value-change="editableState.updateRowValue"
                           :value="row[col.key]"
                           :width="calcSize(col.width || 150)"
                           @cancel="editableState.stopEditing"
                           @save="handleSaveEdit(rowIndex, col.key, $event, row, col)"/>

          <!-- 普通数据单元格 -->
          <div v-else
               :class="[
                 TablePaddingSize[size],
                 TextAlign[col.align || 'left'],
                 col.ellipsis !== false ? 'relative truncate whitespace-nowrap overflow-hidden' : 'break-words whitespace-normal',
                 ((selectedCell?.rowIndex === rowIndex && selectedCell?.col === col.key) && !editableState.isEditing(rowIndex, col.key)) && 'border border-blue-400'
               ]"
               :style="{
                 width: calcSize(col.width || 150),
                 flex: 'none'
               }"
               @mousemove.stop.prevent="(col.ellipsis !== false && col.tooltip) && showTooltip($event, row[col.key])"
               @mouseleave.stop.prevent="hideTooltip"
               @click.stop="handleCellClick(rowIndex, col.key, row)"
               @dblclick.stop="handleCellDblClick(rowIndex, col.key, row, col)"
               @contextmenu.prevent="props.contextMenu && contextMenuState.show($event, rowIndex, col.key, row, col)">
            {{ row[col.key] }}
          </div>
        </template>

        <!-- 右侧固定列渲染 -->
        <template v-for="(col, colIndex) in fixedColumns.rightFixedColumns.value" :key="`right-${col.key}`">
          <!-- 自定义编辑器组件 -->
          <component :is="col.cellEditor"
                     v-if="col.cellEditor && col.editable && editableState.isEditing(rowIndex, col.key)"
                     :field-key="col.key"
                     :value="row[col.key]"
                     :width="calcSize(col.width || 150)"
                     :is-row-editing="!!editableState.editingRowState.value"
                     :on-row-value-change="editableState.updateRowValue"
                     v-bind="col.cellEditorProps"
                     :style="{ right: fixedColumns.getRightOffset(colIndex), zIndex: 15 }"
                     :class="[
                       'sticky border-l-2 border-gray-300',
                       selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
                     ]"
                     @cancel="editableState.stopEditing"
                     @save="handleSaveEdit(rowIndex, col.key, $event, row, col)"/>

          <!-- 默认输入编辑器 -->
          <CellInputEditor v-else-if="col.editable && editableState.isEditing(rowIndex, col.key)"
                           :field-key="col.key"
                           :is-row-editing="!!editableState.editingRowState.value"
                           :on-row-value-change="editableState.updateRowValue"
                           :value="row[col.key]"
                           :width="calcSize(col.width || 150)"
                           :style="{ right: fixedColumns.getRightOffset(colIndex), zIndex: 15 }"
                           :class="[
                             'sticky border-l-2 border-gray-300',
                             selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
                           ]"
                           @cancel="editableState.stopEditing"
                           @save="handleSaveEdit(rowIndex, col.key, $event, row, col)"/>

          <!-- 普通数据单元格 -->
          <div v-else
               :class="[
                 TablePaddingSize[size],
                 TextAlign[col.align || 'left'],
                 col.ellipsis !== false ? 'relative truncate whitespace-nowrap overflow-hidden' : 'break-words whitespace-normal',
                 ((selectedCell?.rowIndex === rowIndex && selectedCell?.col === col.key) && !editableState.isEditing(rowIndex, col.key)) && 'border border-blue-400',
                 'sticky border-l-2 border-gray-300',
                 selectionState.isRowSelected(rowIndex) ? 'bg-blue-50' : 'bg-white'
               ]"
               :style="{
                 width: calcSize(col.width || 150),
                 flex: 'none',
                 right: fixedColumns.getRightOffset(colIndex),
                 zIndex: 15
               }"
               @mousemove.stop.prevent="(col.ellipsis !== false && col.tooltip) && showTooltip($event, row[col.key])"
               @mouseleave.stop.prevent="hideTooltip"
               @click.stop="handleCellClick(rowIndex, col.key, row)"
               @dblclick.stop="handleCellDblClick(rowIndex, col.key, row, col)"
               @contextmenu.prevent="props.contextMenu && contextMenuState.show($event, rowIndex, col.key, row, col)">
            {{ row[col.key] }}
          </div>
        </template>
      </div>
    </template>

    <!-- 空状态展示 -->
    <div v-else>
      <slot name="empty"/>
    </div>
  </div>

  <!-- 右键上下文菜单 -->
  <ContextMenu v-if="props.contextMenu"
               v-show="contextMenuState.visible.value"
               :context-menu-state="contextMenuState"
               :editable-state="editableState"
               @on-row-edit="(val) => handleSaveRowEdit(val)">
    <template #contextMenu="contextMenuProps">
      <slot :actionsPosition="contextMenuProps.actionsPosition"
            :position="contextMenuProps.position"
            :selectedValue="contextMenuProps.selectedValue"
            :visible="contextMenuProps.visible"
            name="contextMenu">
      </slot>
    </template>
  </ContextMenu>
</template>

<script setup lang="ts">
import { CellClickPayload, ColumnProps, DataTableBodyEmits, RowPayload, RowSelectionMode, TextAlign } from '../types'
import { BaseSize } from '@/ui/common/size'
import { Size, TablePaddingSize } from '../size'
import { onMounted, onUnmounted, ref } from 'vue'
import { useTooltip } from '../hooks/useTooltip'
import { calcSize } from '@/utils/common'
import { useRowSelection } from '../hooks/useRowSelection'
import { useEditable } from '../hooks/useEditable'
import { useContextMenu } from '../hooks/useContextMenu'
import { useFixedColumns } from '../hooks/useFixedColumns'
import CellInputEditor from '@/ui/data-table/components/CellInputEditor.vue'
import ContextMenu from '@/ui/data-table/components/ContextMenu.vue'

const props = withDefaults(defineProps<{
  columns: ColumnProps[]
  data: Record<string, any>[]
  size?: Size
  rowSelection?: RowSelectionMode
  selectionState: ReturnType<typeof useRowSelection>
  loading?: boolean
  contextMenu?: boolean
}>(), {
  size: 'default',
  loading: false,
  contextMenu: false
})

const emits = defineEmits<DataTableBodyEmits>()

const tableRef = ref<HTMLElement | null>(null)
const selectedCell = ref<CellClickPayload>(null)

const localColumns = ref([...props.columns])
const fixedColumns = useFixedColumns(localColumns)
const editableState = useEditable()
const contextMenuState = useContextMenu()

const handleSaveEdit = (_rowIndex: number, _key: string, value: any, row: any, col: ColumnProps) => {
  const lastEditState = editableState.stopEditing(value)
  if (lastEditState) {
    emits('on-cell-edit', {
      rowIndex: lastEditState.rowIndex,
      key: lastEditState.key,
      value: lastEditState.value,
      row: row,
      col: col
    })
  }
}

const handleSaveRowEdit = (lastEditState: RowPayload) => {
  if (lastEditState) {
    emits('on-row-edit', {
      rowIndex: lastEditState.rowIndex,
      row: lastEditState.row,
      values: lastEditState.values
    })
  }
}

const handleRowClick = (rowIndex: number, _row: any) => {
  if (props.rowSelection && !editableState.isEditing(rowIndex, _row.key) && !editableState.editingRowState.value) {
    props.selectionState.toggleRowSelection(rowIndex)
  }
}

const handleCellClick = (rowIndex: number, col: string, row: any) => {
  selectedCell.value = {rowIndex, row, col}
  emits('on-cell-click', {rowIndex, row, col})
}

const handleCellDblClick = (rowIndex: number, key: string, row: any, column: ColumnProps) => {
  if (column.editable) {
    editableState.startEditing(rowIndex, key, row[key], row, column)
  }
}

const clearSelectedCell = () => {
  selectedCell.value = null
  const lastEditState = editableState.stopEditing()
  if (lastEditState) {
    emits('on-cell-edit', {
      rowIndex: lastEditState.rowIndex,
      key: lastEditState.key,
      value: lastEditState.value,
      row: lastEditState.row,
      col: lastEditState.col
    })
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (tableRef.value && !tableRef.value.contains(event.target as Node)) {
    clearSelectedCell()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside, true)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside, true)
})

const {showTooltip, hideTooltip} = useTooltip()
</script>