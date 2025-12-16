<template>
  <div :class="[
    // Base styles
    'inline-flex',
    // Direction
    direction === 'vertical' ? [
      'flex-col',
      dark ? 'divide-y divide-gray-700' : 'divide-y divide-gray-200',
      '[&>button:first-child]:rounded-t-md [&>button:first-child]:rounded-b-none',
      '[&>button:last-child]:rounded-b-md [&>button:last-child]:rounded-t-none',
      '[&>button:not(:first-child):not(:last-child)]:rounded-none',
    ] : [
      'flex-row',
      dark ? 'divide-x divide-gray-700' : 'divide-x divide-gray-200',
      '[&>button:first-child]:rounded-l-md [&>button:first-child]:rounded-r-none',
      '[&>button:last-child]:rounded-r-md [&>button:last-child]:rounded-l-none',
      '[&>button:not(:first-child):not(:last-child)]:rounded-none',
    ],
    // Size classes from parent if provided
    sizeClass,
  ]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { ButtonSize } from '@/ui/common/size.ts'
import type { ButtonGroupProps } from './types'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  direction: 'horizontal',
  size: 'default',
  dark: false,
  glass: false
})

// Compute size class based on the ButtonSize enum
const sizeClass = computed(() => {
  return ButtonSize[props.size]
})

// Provide size to child buttons
provide('buttonGroupSize', computed(() => props.size))

// Provide dark mode to child buttons
provide('buttonGroupDark', computed(() => props.dark))

// Provide glass mode to child buttons
provide('buttonGroupGlass', computed(() => props.glass))
</script>