<template>
  <div v-if="isInLayout" :class="['shadcn-layout-content w-full', dark ? 'bg-gray-900 text-gray-100' : 'bg-white']">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)
const dark = inject('dark', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutContent must be placed inside ShadcnLayout.')
}
</script>
