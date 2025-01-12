<template>
  <div class="overflow-auto custom-scrollbar">
    <div :style="{minWidth: 'calc(100vh)'}">
      <table class="w-full border-collapse table-fixed">
        <TableHeader :columns="columns"
                     :size="size"
                     @on-sort-change="handleSortChange"/>
        <TableBody :columns="columns"
                   :data="sortedData"
                   :size="size"/>
      </table>
    </div>
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

<style scoped>
.custom-scrollbar {
  @apply overflow-auto;

  /* 禁用滚动条悬停时的高度变化 */

  &::-webkit-scrollbar {
    @apply h-2 w-2;

    &:hover {
      @apply h-2 w-2;
      /* 确保悬停时保持相同高度 */
    }
  }

  &::-webkit-scrollbar-track {
    @apply bg-gray-100 rounded-full;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-gray-300 rounded-full;

    &:hover {
      @apply bg-gray-400;
      /* 只改变颜色，不改变大小 */
    }
  }

  /* Firefox */
  scrollbar-width: thin !important; /* 使用 !important 确保大小不变 */
  scrollbar-color: #d1d5db #f3f4f6;
}

/* 禁用所有可能的状态下的大小变化 */
.custom-scrollbar:hover::-webkit-scrollbar,
.custom-scrollbar:active::-webkit-scrollbar,
.custom-scrollbar:focus::-webkit-scrollbar {
  @apply h-2 w-2;
}
</style>