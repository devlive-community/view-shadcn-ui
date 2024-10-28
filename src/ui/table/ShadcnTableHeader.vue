<template>
  <thead class="bg-gray-50">
    <slot />
  </thead>
</template>

<script setup>
import { inject, provide } from 'vue'

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableHeader must be used within ShadcnTable')
}
provide('ShadcnTableHeader', true)
</script>
