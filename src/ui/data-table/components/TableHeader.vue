<template>
  <div class="flex border-b bg-gray-100 relative w-full sticky top-0 z-10">
    <div v-for="col in columns"
         :key="col.key"
         :style="[
           { width: calcSize(col.width || 150) },
           { position: 'relative', flexShrink: 0 }
         ]"
         :class="[
           `text-${col.align || 'left'} font-medium`,
           TablePaddingSize[size],
           col.sortable && 'cursor-pointer select-none'
         ]"
         @click.stop="col.sortable && handleSort(col, $event)">
      <div class="inline-flex items-center">
        <span>{{ col.label }}</span>
        <div v-if="col.sortable"
             class="inline-flex items-center ml-2 min-w-[1em]">
          <ShadcnIcon :class="[
                        'font-semibold transition-transform',
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
           data-resize-handle
           class="absolute top-0 right-0 h-full w-1 cursor-col-resize flex items-center justify-center group"
           @click.stop
           @mousedown.stop="handleMouseDown($event, col)">
        <div class="h-2/3 w-px bg-gray-300 group-hover:bg-blue-500"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ColumnProps, DataTableHeaderEmits } from '../types'
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

const emits = defineEmits<DataTableHeaderEmits>()

const handleSort = (column: ColumnProps, event: MouseEvent) => {
  event.stopPropagation()
  emits('on-sort', column, event)
}

const { handleMouseDown } = useResize((_event, column, width) => {
  emits('on-resizable', column, width)
})
</script>