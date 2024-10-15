<template>
  <TooltipProvider :delay-duration="delay">
    <Tooltip>
      <TooltipTrigger>
        <slot/>
      </TooltipTrigger>
      <TooltipContent :side="position">
        <template v-if="content">{{ content }}</template>
        <slot v-else name="content"/>
        <TooltipArrow v-if="arrow"/>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipArrow } from 'radix-vue'

withDefaults(defineProps<{
  content?: string
  delay?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  arrow?: boolean
}>(), {
  delay: 0,
  position: 'top',
  arrow: true
})
</script>
