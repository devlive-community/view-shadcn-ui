<template>
  <div class="flex flex-col w-full"
       ref="tableRef"
       @click.stop>
    <div v-for="(row, rowIndex) in data"
         :key="rowIndex"
         :class="[
           'flex border-b hover:bg-gray-50 items-center h-full',
           BaseSize[size]
         ]">
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
             (selectedCell.rowIndex === rowIndex && selectedCell.col === col.key) && 'border border-blue-400'
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
import { DataTableBodyEmits, DataTableProps } from '../types'
import { BaseSize } from '@/ui/common/size.ts'
import { TablePaddingSize } from '../size'
import { onMounted, onUnmounted, ref } from 'vue'
import { useTooltip } from '@/ui/data-table/hooks/useTooltip.ts'
import { calcSize } from '@/utils/common.ts'

const emits = defineEmits<DataTableBodyEmits>()

withDefaults(defineProps<DataTableProps>(), {
  size: 'default'
})

const tableRef = ref<HTMLElement | null>(null)

const selectedCell = ref<{ rowIndex: number | null; row: any; col: string | null }>({
  rowIndex: null,
  row: null,
  col: null
})

const selectCell = (rowIndex: number, col: string, row: any) => {
  selectedCell.value = { rowIndex, row, col }
  emits('on-cell-click', { rowIndex, row, col })
}

const clearSelectedCell = () => {
  selectedCell.value = {
    rowIndex: null,
    row: null,
    col: null
  }
  emits('on-cell-click', undefined)
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