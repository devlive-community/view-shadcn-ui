<template>
  <div :class="[
    // Base styles
    'inline-flex',
    // Direction
    direction === 'vertical' ? [
      'flex-col',
      'divide-y divide-gray-200',
      '[&>button:first-child]:rounded-t-md [&>button:first-child]:rounded-b-none',
      '[&>button:last-child]:rounded-b-md [&>button:last-child]:rounded-t-none',
      '[&>button:not(:first-child):not(:last-child)]:rounded-none',
    ] : [
      'flex-row',
      'divide-x divide-gray-200',
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
import { ArrangeDirection } from '@/ui/common/position.ts'

interface Props
{
  direction?: keyof typeof ArrangeDirection
  size?: keyof typeof ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
  size: 'default'
})

// Compute size class based on the ButtonSize enum
const sizeClass = computed(() => {
  return ButtonSize[props.size]
})

console.log(sizeClass.value)

// Provide size to child buttons
provide('buttonGroupSize', computed(() => props.size))
</script>
