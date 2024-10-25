<template>
  <div v-if="isInLayout" class="flex flex-col flex-1">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)

if (!isInLayout) {
  console.warn('ShadcnLayoutMain must be placed inside ShadcnLayout.')
}
</script>
