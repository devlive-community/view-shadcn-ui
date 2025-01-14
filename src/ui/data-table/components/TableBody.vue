<template>
  <div class="flex flex-col w-full" ref="tableRef" @click.stop>
    <div v-for="(row, rowIndex) in data"
         :key="rowIndex"
         :class="[
           'flex border-b items-center h-full',
           BaseSize[size],
           isRowSelected(rowIndex) && 'bg-blue-50',
           !isRowSelected(rowIndex) && 'hover:bg-gray-50'
         ]"
         @click="handleRowClick(rowIndex, row)">
      <!-- 选择列 -->
      <div v-if="rowSelection === 'multipleRow'"
           :style="{ width: '48px', flexShrink: 0 }"
           :class="[TablePaddingSize[size]]"
           class="flex items-center justify-center"
           @click.stop>
        <input type="checkbox"
               :checked="isRowSelected(rowIndex)"
               @change="toggleRowSelection(rowIndex)"
               class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
      </div>
      <div v-else-if="rowSelection === 'singleRow'"
           :style="{ width: '48px', flexShrink: 0 }"
           :class="[TablePaddingSize[size]]"
           class="flex items-center justify-center"
           @click.stop>
        <input type="radio"
               :checked="isRowSelected(rowIndex)"
               @change="toggleRowSelection(rowIndex)"
               :name="'row-select'"
               class="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"/>
      </div>

      <!-- 数据列 -->
      <div v-for="col in columns"
           :key="col.key"
           :style="{
             width: calcSize(col.width || 150),
             flex: 'none'
           }"
           :class="[
             TablePaddingSize[size],
             `text-${col.align || 'left'}`,
             col.ellipsis !== false ? 'relative truncate whitespace-nowrap overflow-hidden' : 'break-words whitespace-normal',
             (selectedCell?.rowIndex === rowIndex && selectedCell?.col === col.key) && 'border border-blue-400'
           ]"
           @mousemove.stop.prevent="(col.ellipsis !== false && col.tooltip) && showTooltip($event, row[col.key])"
           @mouseleave.stop.prevent="hideTooltip"
           @click.stop="selectCell(rowIndex, col.key, row)">
        {{ row[col.key] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CellClickPayload, DataTableBodyEmits, DataTableProps } from '../types'
import { BaseSize } from '@/ui/common/size'
import { TablePaddingSize } from '../size'
import { onMounted, onUnmounted, ref } from 'vue'
import { useTooltip } from '../hooks/useTooltip'
import { calcSize } from '@/utils/common'
import { useRowSelection } from '../hooks/useRowSelection'

const props = withDefaults(defineProps<DataTableProps>(), {
  size: 'default'
})

const emits = defineEmits<DataTableBodyEmits>()

const {
  isRowSelected,
  toggleRowSelection
} = useRowSelection(
    props.rowSelection,
    props.data,
    emits
)

const tableRef = ref<HTMLElement | null>(null)
const selectedCell = ref<CellClickPayload>(null)

const handleRowClick = (rowIndex: number, _row: any) => {
  if (props.rowSelection) {
    toggleRowSelection(rowIndex)
  }
}

const selectCell = (rowIndex: number, col: string, row: any) => {
  selectedCell.value = { rowIndex, row, col }
  emits('on-cell-click', { rowIndex, row, col })
}

const clearSelectedCell = () => {
  selectedCell.value = null
  emits('on-cell-click', selectedCell.value)
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