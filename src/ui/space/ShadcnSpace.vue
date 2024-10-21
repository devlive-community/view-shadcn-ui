<template>
  <div :class="cn('flex',
                  wrap && 'flex-wrap')"
       :style="{ gap: `${computedGap}` }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { computed } from 'vue'

enum Size
{
  small = '8',
  default = '16',
  large = '24'
}

const props = withDefaults(defineProps<{
  size?: keyof typeof Size | number | string | [number, number]
  wrap?: boolean
}>(), {
  size: 'small'
})

const computedGap = computed(() => {
  if (Array.isArray(props.size)) {
    return `${ props.size[0] }px ${ props.size[1] }px`
  }
  else if (props.size in Size) {
    return `${ Size[props.size] }px`
  }
  return `${ props.size }px`
})
</script>
