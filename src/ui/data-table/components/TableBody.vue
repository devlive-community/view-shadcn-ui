<template>
  <div class="relative flex flex-col w-full" ref="tableRef" @click.stop>
    <div v-if="loading" class="absolute inset-0 z-50">
      <slot name="loading"/>
    </div>

    <div v-else-if="data && data.length > 0" v-for="(row, rowIndex) in data"
         :key="rowIndex"
         :class="[
           'flex border-b items-center h-full',
           BaseSize[size],
           selectionState.isRowSelected(rowIndex) && 'bg-blue-50',
           !selectionState.isRowSelected(rowIndex) && 'hover:bg-gray-50'
         ]"
         @click="handleRowClick(rowIndex, row)">
      <div v-if="rowSelection === 'multipleRow'"
           :style="{ width: '48px', flexShrink: 0 }"
           :class="[TablePaddingSize[size]]"
           class="flex items-center justify-center"
           @click.stop>
        <input type="checkbox"
               :checked="selectionState.isRowSelected(rowIndex)"
               @change="selectionState.toggleRowSelection(rowIndex)"
               class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
      </div>
      <div v-else-if="rowSelection === 'singleRow'"
           :style="{ width: '48px', flexShrink: 0 }"
           class="flex items-center justify-center"
           @click.stop>
        <input type="radio"
               :checked="selectionState.isRowSelected(rowIndex)"
               @change="selectionState.toggleRowSelection(rowIndex)"
               :name="'row-select'"
               class="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"/>
      </div>

      <template v-for="col in columns" :key="col.key">
        <TableCell v-if="col.editable && editableState.isEditing(rowIndex, col.key)"
                   :align="col.align"
                   :size="size"
                   :value="row[col.key]"
                   :width="calcSize(col.width || 150)"
                   @cancel="editableState.stopEditing"
                   @save="handleSaveEdit(rowIndex, col.key, $event, row)"/>

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
             @dblclick.stop="handleCellDblClick(rowIndex, col.key, row, col)">
          {{ row[col.key] }}
        </div>
      </template>
    </div>

    <div v-else>
      <slot name="empty"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CellClickPayload, ColumnProps, DataTableBodyEmits, RowSelectionMode, TextAlign } from '../types'
import { BaseSize } from '@/ui/common/size'
import { Size, TablePaddingSize } from '../size'
import { onMounted, onUnmounted, ref } from 'vue'
import { useTooltip } from '../hooks/useTooltip'
import { calcSize } from '@/utils/common'
import { useRowSelection } from '../hooks/useRowSelection'
import { useEditable } from '../hooks/useEditable'
import TableCell from '@/ui/data-table/components/TableCell.vue'

const props = withDefaults(defineProps<{
  columns: ColumnProps[]
  data: Record<string, any>[]
  size?: Size
  rowSelection?: RowSelectionMode
  selectionState: ReturnType<typeof useRowSelection>
  loading?: boolean
}>(), {
  size: 'default',
  loading: false
})

const emits = defineEmits<DataTableBodyEmits>()

const tableRef = ref<HTMLElement | null>(null)
const selectedCell = ref<CellClickPayload>(null)

const editableState = useEditable()

const handleSaveEdit = (_rowIndex: number, _key: string, value: any, row: any) => {
  const lastEditState = editableState.stopEditing(value)
  if (lastEditState) {
    emits('on-cell-edit', {
      rowIndex: lastEditState.rowIndex,
      key: lastEditState.key,
      value: lastEditState.value,
      row: row
    })
  }
}

const handleRowClick = (rowIndex: number, _row: any) => {
  if (props.rowSelection && editableState.isEditing(rowIndex, _row.key)) {
    props.selectionState.toggleRowSelection(rowIndex)
  }
}

const handleCellClick = (rowIndex: number, col: string, row: any) => {
  selectedCell.value = { rowIndex, row, col }
  emits('on-cell-click', { rowIndex, row, col })
}

const handleCellDblClick = (rowIndex: number, key: string, row: any, column: ColumnProps) => {
  if (column.editable) {
    editableState.startEditing(rowIndex, key, row[key], column)
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
      row: lastEditState.row
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

const { showTooltip, hideTooltip } = useTooltip()
</script>