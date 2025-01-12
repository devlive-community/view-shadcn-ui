<template>
  <thead>
  <tr class="border-b">
    <th v-for="col in columns"
        :key="col.key"
        :class="['text-left font-medium',
          TablePaddingSize[size]
        ]">
      {{ col.label }}
    </th>
  </tr>
  </thead>
</template>

<script setup lang="ts">
import type { ColumnProps } from '../types'
import { Size, TablePaddingSize } from '@/ui/data-table/size.ts'

withDefaults(defineProps<{
  columns: ColumnProps[]
  size: Size
}>(), {
  size: 'default'
})
</script>