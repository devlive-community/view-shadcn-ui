<template>
  <div :class="cn(order && `order-${order}`)"
       :style="{ 'grid-column': `span ${span}` }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { cn } from '@/lib/utils.ts'

interface RowContext
{
  registerCol: (colSpan: number) => void
}

const props = withDefaults(defineProps<{
  span?: number | string
  order?: number | string
}>(), {
  span: 1
})

// Calculate column span and validate
const span = computed(() => {
  const spanNumber = Number(props.span)
  if (spanNumber < 1 || spanNumber > 12) {
    throw new Error('ShadcnCol span must be between 1 and 12.')
  }
  return Math.min(Math.max(spanNumber, 1), 12)
})

// Inject the context of ShadcnRow
const rowContext = inject<RowContext | null>('ShadcnRowContext', null)

onMounted(() => {
  if (!rowContext) {
    console.error('ShadcnCol must be used inside a ShadcnRow component.')
  }
  else {
    // Notify ShadcnRow of the existence of this column and its span
    rowContext.registerCol(Number(props.span))
  }
})
</script>
