<template>
  <thead>
  <tr class="border-b bg-gray-100">
    <th v-for="col in columns"
        :key="col.key"
        :class="[ 'text-left font-medium',
            TablePaddingSize[size],
            col.sortable && 'cursor-pointer select-none'
          ]"
        @click="col.sortable && handleSort(col, $event)">
      <div class="inline-flex items-center">
        <span>{{ col.label }}</span>
        <div v-if="col.sortable"
             class="inline-flex items-center ml-2 min-w-[1em]">
          <ShadcnIcon :class="['font-semibold transition-transform',
                          col.sort ? 'opacity-100' : 'opacity-0',
                          col.sort === 'asc' && 'text-blue-500',
                          col.sort === 'desc' && 'rotate-180 text-blue-500'
                      ]"
                      icon="MoveUp"
                      size="16">
          </ShadcnIcon>
        </div>
      </div>
    </th>
  </tr>
  </thead>
</template>

<script setup lang="ts">
import type { ColumnProps } from '../types'
import { Size, TablePaddingSize } from '@/ui/data-table/size.ts'
import ShadcnIcon from '@/ui/icon'

withDefaults(defineProps<{
  columns: ColumnProps[],
  size?: Size
}>(), {
  size: 'default'
})

const emits = defineEmits<{
  (e: 'on-sort-change', column: ColumnProps, event: MouseEvent): void
}>()

const handleSort = (column: ColumnProps, event: MouseEvent) => {
  emits('on-sort-change', column, event)
}
</script>