<template>
  <tbody>
  <tr v-for="(row, index) in data"
      :key="index"
      class="border-b hover:bg-gray-50">
    <td v-for="col in columns"
        :key="col.key"
        class="px-4 py-2">
      {{ row[col.key] }}
    </td>
  </tr>
  </tbody>
</template>

<script setup lang="ts">
import type { ColumnProps } from '../types'

defineProps<{
  columns: ColumnProps[]
  data: Record<string, any>[]
}>()
</script>