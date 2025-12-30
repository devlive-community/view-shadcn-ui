<template>
  <div :class="dark ? 'text-gray-400' : 'text-gray-500'"
       class="px-3 py-1 text-xs font-semibold uppercase">
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
  dark?: boolean
}

const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const dark = computed(() => menuContext.dark?.value || false)
</script>
