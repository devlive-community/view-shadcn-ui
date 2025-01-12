<template>
  <div class="w-full">
    <table class="w-full border-collapse">
      <TableHeader :columns="columns"
                   :size="size"
                   @on-sort-change="handleSortChange"/>
      <TableBody :columns="columns"
                 :data="sortedData"
                 :size="size"/>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TableHeader from './components/TableHeader.vue'
import TableBody from './components/TableBody.vue'
import type { ColumnProps, DataTableEmits, DataTableProps } from './types'
import { useSort } from './hooks/useSort'

const props = withDefaults(defineProps<DataTableProps>(), {
  size: 'default'
})

const emits = defineEmits<DataTableEmits>()

const { columns, toggleSort, getSortedColumns } = useSort(props.columns)

const handleSortChange = (column: ColumnProps, event: MouseEvent) => {
  toggleSort(column.key, event)
  emits('on-sort', getSortedColumns())
}

const sortedData = computed(() => {
  const sortColumns = getSortedColumns()
  if (sortColumns.length === 0) {
    return props.data
  }

  return [...props.data].sort((a, b) => {
    for (const column of sortColumns) {
      const aValue = a[column.key]
      const bValue = b[column.key]
      const order = column.sort === 'asc' ? 1 : -1

      if (aValue === bValue) {
        continue
      }

      if (typeof aValue === 'string') {
        return aValue.localeCompare(bValue) * order
      }
      return (aValue - bValue) * order
    }
    return 0
  })
})
</script>