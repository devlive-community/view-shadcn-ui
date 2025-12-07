<template>
  <div v-if="isInLayout" :class="['shadcn-layout-header w-full', dark ? 'bg-gray-800 border-b border-gray-700' : 'bg-white border-b border-gray-200']">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isInLayout = inject('isInLayout', false)
const dark = inject('dark', false)

if (!isInLayout) {
  console.error('ShadcnLayoutHeader must be used inside a ShadcnLayout component.')
}
</script>
