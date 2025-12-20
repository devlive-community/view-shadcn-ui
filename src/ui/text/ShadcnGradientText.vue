<template>
  <div :class="['inline-block',
              background && 'rounded-lg px-3 py-1',
              background && glass && 'backdrop-blur-xl backdrop-saturate-150',
              background && glass && 'shadow-lg shadow-black/5',
              background && glass && (dark ? 'bg-white/10 border border-white/20' : 'bg-white/30 border border-gray-400/40')
        ]">
    <span :class="['bg-clip-text text-transparent inline-block']"
          :style="{
               backgroundImage: options ? `linear-gradient(${options})` : `linear-gradient(${deg}deg, ${from}, ${to})`
          }">
      <slot/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { GradientTextProps } from '@/ui/text/types.ts'

withDefaults(defineProps<GradientTextProps>(), {
  from: 'red',
  to: 'blue',
  deg: 100,
  dark: false,
  glass: false,
  background: false
})
</script>
