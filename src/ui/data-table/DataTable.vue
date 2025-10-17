<template>
  <div :class="['overflow-auto', borderConfig.getContainerBorderClass()]">
    <div :style="{ width: calcSize(width), height: calcSize(height) }"
         class="relative w-full"
         style="overflow-x: auto">
      <div class="inline-block bg-white">
        <Header :column-move="columnMove"
                :columns="columns"
                :data="displayData"
                :row-selection="rowSelection"
                :selection-state="selectionState"
                :size="size"
                :border-config="borderConfig"
                @on-sort="handleSortChange"
                @on-resizable="(column, _width) => emits('on-resizable', column, _width)"
                @on-row-select="(payload) => emits('on-row-select', payload as any)"
                @on-column-move="handleColumnMove">
        </Header>

        <Body :columns="columns"
              :context-menu="contextMenu"
              :data="displayData"
              :loading="loading"
              :row-selection="rowSelection"
              :selection-state="selectionState"
              :size="size"
              :border-config="borderConfig"
              @on-cell-click="(payload) => emits('on-cell-click', payload as any)"
              @on-row-select="(payload) => emits('on-row-select', payload as any)"
              @on-cell-edit="(payload) => emits('on-cell-edit', payload as any)"
              @on-row-edit="(payload) => emits('on-row-edit', payload as any)">
        <template #loading>
          <slot name="loading">
            <div class="m-6">
              <div class="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
            </div>
          </slot>
        </template>

        <template #empty>
          <slot name="empty">
            <ShadcnEmpty class="mt-6">
              <template #actions>
                <span></span>
              </template>
            </ShadcnEmpty>
          </slot>
        </template>

        <template #contextMenu="slotProps">
          <slot :actionsPosition="slotProps.actionsPosition"
                :position="slotProps.position"
                :selectedValue="slotProps.selectedValue"
                :visible="slotProps.visible"
                name="contextMenu">
          </slot>
        </template>
        </Body>
      </div>
    </div>

    <Pagination v-if="pagination"
                :options="pagination.options"
                :page="currentPage"
                :size="pageSize"
                :total="total"
                :total-pages="totalPages"
                @on-page-change="setPage"
                @on-size-change="setSize">
    </Pagination>
  </div>
</template>

<script setup lang="ts">
import {computed, watch} from 'vue'
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Pagination from './components/Pagination.vue'
import type {ColumnProps, DataTableEmits, DataTableProps} from './types'
import {useSort} from './hooks/useSort'
import {useBorder} from './hooks/useBorder'
import {calcSize} from '@/utils/common'
import {usePagination} from './hooks/usePagination'
import {useRowSelection} from './hooks/useRowSelection'
import {ShadcnEmpty} from '@/ui/empty'

const props = withDefaults(defineProps<DataTableProps>(), {
  size: 'default',
  height: 'auto',
  width: '100%',
  loading: false,
  border: false
})

const emits = defineEmits<DataTableEmits>()

const {columns, toggleSort, getSortedColumns} = useSort(props.columns)
const borderConfig = useBorder(props.border)

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

const selectionState = useRowSelection(
    props.rowSelection,
    displayData.value,
    emits
)

const handleColumnMove = (payload: ColumnProps[]) => {
  columns.value = payload

  emits('on-column-move', payload)
}
</script>