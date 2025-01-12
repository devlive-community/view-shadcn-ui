<template>
  <thead>
  <tr class="border-b">
    <th v-for="col in columns"
        :key="col.key"
        class="px-4 py-2 text-left font-medium">
      {{ col.label }}
    </th>
  </tr>
  </thead>
</template>

<script setup lang="ts">
import type { ColumnProps } from '../types'

defineProps<{
  columns: ColumnProps[]
}>()
</script>