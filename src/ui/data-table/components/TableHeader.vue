<template>
  <thead>
  <tr class="border-b bg-gray-100">
    <th v-for="col in columns"
        :key="col.key"
        :style="col.width ? { width: calcSize(col.width) } : {}"
        :class="[
              `text-${col.align || 'left'} font-medium relative`,
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

      <!-- 拖拽手柄 -->
      <div v-if="col.resizable"
           class="absolute top-0 right-0 h-full w-4 cursor-col-resize flex items-center justify-center group"
           @mousedown.stop.prevent="handleMouseDown($event, col)">
        <div class="h-2/3 w-px bg-gray-300 group-hover:bg-blue-500"></div>
      </div>
    </th>
  </tr>
  </thead>
</template>

<script setup lang="ts">
import type { ColumnProps } from '../types'
import { Size, TablePaddingSize } from '@/ui/data-table/size.ts'
import ShadcnIcon from '@/ui/icon'
import { calcSize } from '@/utils/common.ts'
import { useResize } from '../hooks/useResize'

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

const { handleMouseDown } = useResize()
</script>