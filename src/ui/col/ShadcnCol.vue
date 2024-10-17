<template>
  <div :style="{ width: calcColWidth }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { toNumber } from 'lodash'

interface RowContext
{
  registerCol: (colSpan: number) => void
}

const props = withDefaults(defineProps<{
  span?: number | string
}>(), {
  span: 1
})

// Calculate column width to ensure column width does not exceed 12
const calcColWidth = computed(() => {
  const spanNumber = toNumber(props.span)
  if (spanNumber < 1 || spanNumber > 12) {
    throw new Error('ShadcnCol span must be between 1 and 12.')
  }
  const span = Math.min(Math.max(spanNumber, 1), 12)
  return `${ (span / 12) * 100 }%`
})

// Inject the context of ShadcnRow
const rowContext = inject<RowContext | null>('ShadcnRowContext', null)

onMounted(() => {
  if (!rowContext) {
    console.error('ShadcnCol must be used inside a ShadcnRow component.')
  }
  else {
    // Notify ShadcnRow of the existence of this column and its span
    rowContext.registerCol(toNumber(props.span))
  }
})
</script>
