<template>
  <div :class="cn('flex flex-row')"
       :style="{ 'gap': `${gutter}px` }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { cn } from '@/lib/utils.ts'

const props = withDefaults(defineProps<{
  gutter?: number
}>(), {
  gutter: 0
})

const hasCol = ref(false)

// Provide context for the ShadcnCol component to use
provide('ShadcnRowContext', {
  registerCol: () => {
    hasCol.value = true
  }
})

// Check if there is ShadcnCol when mounting
onMounted(() => {
  if (!hasCol.value) {
    console.error('ShadcnRow must contain at least one ShadcnCol component.')
  }
})
</script>
