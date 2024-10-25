<template>
  <div v-if="isInLayout" class="bg-gray-100 h-16">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)
if (!isInLayout) {
  console.error('ShadcnLayoutHeader must be used inside a ShadcnLayout component.')
}
</script>
