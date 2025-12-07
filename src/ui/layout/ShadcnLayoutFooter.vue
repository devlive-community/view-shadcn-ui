<template>
  <div v-if="isInLayout" class="shadcn-layout-footer order-3 w-full">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutFooter must be placed inside ShadcnLayout.')
}
</script>
