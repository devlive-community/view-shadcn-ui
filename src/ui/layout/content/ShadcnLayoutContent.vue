<template>
  <div v-if="isInLayout" class="p-4">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutContent must be placed inside ShadcnLayout.')
}
</script>