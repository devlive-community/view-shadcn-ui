<template>
  <div class="w-full">
    <table class="w-full border-collapse">
      <TableHeader :columns="columns"/>
      <TableBody :columns="columns" :data="data"/>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { DataTableProps } from './types'
import TableHeader from '@/ui/data-table/components/TableHeader.vue'
import TableBody from '@/ui/data-table/components/TableBody.vue'

defineProps<DataTableProps>()
</script>