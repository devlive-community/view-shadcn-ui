<template>
  <div v-if="isInLayout" :class="['shadcn-layout-footer order-3 w-full', dark ? 'bg-gray-800 border-t border-gray-700 text-gray-100' : 'bg-white border-t border-gray-200']">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)
const dark = inject('dark', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutFooter must be placed inside ShadcnLayout.')
}
</script>
