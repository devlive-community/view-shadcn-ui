<template>
  <div v-if="isInLayout" class="order-2 flex flex-1">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutContainer must be placed inside ShadcnLayout.')
}
</script>
