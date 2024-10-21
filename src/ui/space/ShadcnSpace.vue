<template>
  <div :class="cn(`space-x-${Size[size]}`)">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'

enum Size
{
  small = '2',
  default = '4',
  large = '6'
}

withDefaults(defineProps<{
  size?: keyof typeof Size
}>(), {
  size: 'small'
})
</script>
