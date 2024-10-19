<template>
  <div :class="cn('overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
                  toNumber(line) > 1 ? 'line-clamp whitespace-normal' : 'truncate whitespace-nowrap')">
    <span v-if="text">{{ text }}</span>
    <slot v-else/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { toNumber } from 'lodash'

withDefaults(defineProps<{
  text?: string
  line?: number | string
}>(), {
  line: 1
})
</script>
