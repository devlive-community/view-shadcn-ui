<template>
  <div class="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
    <slot name="title"/>
  </div>
  <div :class="['mt-1 px-2.5', isHorizontal ? 'flex-row' : 'flex-col', 'space-y-1']">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const menuContext = inject('menuContext') as {
  direction: 'horizontal' | 'vertical'
}

const isHorizontal = computed(() => menuContext.direction === 'horizontal')
</script>
