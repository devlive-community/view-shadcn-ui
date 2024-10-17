<template>
  <div :class="cn('flex flex-row',
                  align && `items-${Align[align]}`,
                  justify && `justify-${Align[justify]}`)"
       :style="{ 'gap': `${gutter}px` }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { cn } from '@/lib/utils.ts'
import { Align } from '@/ui/enum/Align.ts'

withDefaults(defineProps<{
  gutter?: number
  align?: keyof typeof Align
  justify?: keyof typeof Align
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
