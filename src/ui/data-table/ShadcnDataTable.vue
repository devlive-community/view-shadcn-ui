<template>
  <div class="w-full">
    <table class="w-full border-collapse">
      <TableHeader :columns="columns" :size="size"/>
      <TableBody :columns="columns" :data="data" :size="size"/>
    </table>
  </div>
</template>

<script setup lang="ts">
import TableHeader from './components/TableHeader.vue'
import TableBody from './components/TableBody.vue'
import type { DataTableProps } from './types'

withDefaults(defineProps<DataTableProps>(), {
  size: 'default'
})</script>