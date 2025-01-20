<template>
  <div class="relative overflow-hidden w-full">
    <div class="whitespace-nowrap inline-block animate-marquee"
         :style="{
            animationDuration: `${speed}s`,
            animationIterationCount: repeat === -1 ? 'infinite' : repeat
         }"
         @animationend="handleComplete">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import type { MarqueeEmits, MarqueeProps } from './types'

withDefaults(defineProps<MarqueeProps>(), {
  speed: 6,
  repeat: -1
})

// Define emits
const emit = defineEmits<MarqueeEmits>()

// Handle animation complete
const handleComplete = () => {
  emit('on-complete')
}
</script>