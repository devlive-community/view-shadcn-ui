<template>
  <thead :class="dark ? 'bg-gray-700' : 'bg-gray-50'">
    <slot />
  </thead>
</template>

<script lang="ts" setup>
import { inject, provide } from 'vue'

defineProps<{
  dark?: boolean
}>()

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableHeader must be used within ShadcnTable')
}
provide('ShadcnTableHeader', true)
</script>
