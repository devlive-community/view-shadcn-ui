<template>
  <div class="space-y-4">
    <slot name="template">
      <ShadcnSkeletonItem v-for="(width, index) in itemWidths"
                          :key="index"
                          :width="width"
                          :animation="animation"/>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ShadcnSkeletonItem from '@/ui/skeleton/item'

const props = withDefaults(defineProps<{
  cols?: number | string
  rows?: number | string
  animation?: boolean
  paragraph?: { rows: number, width: (number | string)[] }
}>(), {
  cols: 1,
  rows: 4,
  animation: false
})

const addPxIfNumber = (value: number | string): string => {
  return typeof value === 'number' || /^\d+$/.test(value.toString()) ? `${ value }px` : value.toString()
}

const itemWidths = computed(() => {
  if (props.paragraph) {
    const { rows, width } = props.paragraph
    return Array.from({ length: rows })
                .map((_, index) => addPxIfNumber(width[index] || width[width.length - 1]))
  }
  else {
    return Array.from({ length: Number(props.rows) })
                .map(() => (props.cols === 1 ? '100%' : `${ 100 / Number(props.cols) }%`))
  }
})
</script>
