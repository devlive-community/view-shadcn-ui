<template>
  <div :id="id"
       :class="cn('grid w-full',
              align && `items-${Align[align]}`,
              justify && `justify-${justify}`,
              wrapEnabled && 'flex-wrap'
       )"
       :style="{
           'grid-template-columns': `repeat(12, minmax(0, 1fr))`,
           'gap': calcSize(gutter)
       }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'
import { calcSize } from '@/utils/common.ts'
import { Align } from '@/ui/enum/Align.ts'
import { cn } from '@/lib/utils.ts'

const props = withDefaults(defineProps<{
  gutter?: number
  align?: keyof typeof Align
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'normal' | 'stretch'
  wrap?: boolean
}>(), {
  gutter: 0
})

const hasCol = ref(false)
const totalSpan = ref(0)
const wrapEnabled = computed(() => props.wrap || totalSpan.value > 12)
const id = computed(() => `ShadcnRow-${ Math.random().toString(36).slice(2) }`)

// Provide context for the ShadcnCol component to use
provide('ShadcnRowContext', {
  registerCol: (colSpan: number) => {
    hasCol.value = true
    totalSpan.value += colSpan
  }
})

// Check if there is ShadcnCol when mounting
onMounted(() => {
  if (!hasCol.value) {
    console.error('ShadcnRow must contain at least one ShadcnCol component.')
  }
})
</script>
