<template>
  <div :class="cn('flex')"
       :style="{ gap: `${computedGap}px` }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { computed } from 'vue'

enum Size
{
  small = '5',
  default = '10',
  large = '15'
}

const props = withDefaults(defineProps<{
  size?: keyof typeof Size | number | string
}>(), {
  size: 'small'
})

const computedGap = computed(() => {
  if (props.size in Size) {
    return Size[props.size]
  }
  return props.size
})
</script>
