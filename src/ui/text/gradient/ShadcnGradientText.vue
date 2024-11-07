<template>
  <div :class="['bg-clip-text text-transparent inline-block ']"
       :style="{
            backgroundImage: `linear-gradient(${deg}deg, ${from}, ${to})`
       }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { GradientTextProps } from '@/ui/text/types.ts'

withDefaults(defineProps<GradientTextProps>(), {
  from: 'red',
  to: 'blue',
  deg: 100
})
</script>
