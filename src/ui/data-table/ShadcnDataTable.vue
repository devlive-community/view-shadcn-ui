<template>
  <div class="overflow-auto rounded-sm border">
    <div :style="{ width: calcSize(width), height: calcSize(height) }" class="relative w-full" style="overflow-x: auto">
      <div class="inline-block bg-white">
        <TableHeader :columns="columns"
                     :size="size"
                     :data="displayData"
                     :row-selection="rowSelection"
                     @on-sort="handleSortChange"
                     @on-resizable="(column, _width) => emits('on-resizable', column, _width)"
                     @on-row-select="(payload) => emits('on-row-select', payload as any)">
        </TableHeader>

        <TableBody :columns="columns"
                   :data="displayData"
                   :size="size"
                   :row-selection="rowSelection"
                   @on-cell-click="(payload) => emits('on-cell-click', payload as any)"
                   @on-row-select="(payload) => emits('on-row-select', payload as any)">
        </TableBody>
      </div>
    </div>

    <TablePagination v-if="pagination"
                     :page="currentPage"
                     :size="pageSize"
                     :total="total"
                     :options="pagination.options"
                     :total-pages="totalPages"
                     @on-page-change="setPage"
                     @on-size-change="setSize">
    </TablePagination>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import TableHeader from './components/TableHeader.vue'
import TableBody from './components/TableBody.vue'
import TablePagination from './components/TablePagination.vue'
import type { ColumnProps, DataTableEmits, DataTableProps } from './types'
import { useSort } from './hooks/useSort'
import { calcSize } from '@/utils/common'
import { usePagination } from './hooks/usePagination'

const props = withDefaults(defineProps<DataTableProps>(), {
  size: 'default',
  height: 'auto',
  width: '100%'
})

const emits = defineEmits<DataTableEmits>()

const { columns, toggleSort, getSortedColumns } = useSort(props.columns)

const handleSortChange = (column: ColumnProps, event: MouseEvent) => {
  toggleSort(column.key, event)
  emits('on-sort', getSortedColumns())
}

const dataSource = computed(() => {
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

const {
  currentPage,
  pageSize,
  total,
  paginatedData,
  totalPages,
  setSize,
  setPage
} = usePagination(dataSource, props.pagination || {})

watch(currentPage, (page) => {
  emits('on-page-change', page)
})

watch(pageSize, (size) => {
  emits('on-size-change', size)
})

const displayData = computed(() => {
  return props.pagination ? paginatedData.value : dataSource.value
})
</script>