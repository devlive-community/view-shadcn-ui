<template>
  <div class="space-y-4">
    <ShadcnSkeletonItem v-for="i in rows" :key="i"/>
  </div>
</template>

<script setup lang="ts">
import ShadcnSkeletonItem from '@/ui/skeleton/item'

withDefaults(defineProps<{
  cols?: number | string
  rows?: number | string
}>(), {
  cols: 1,
  rows: 4
})
</script>
