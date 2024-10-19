<template>
  <TooltipProvider :delay-duration="delay">
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <slot/>
        </span>
      </TooltipTrigger>
      <TooltipContent :side="position"
                      :style="{ width : `${width}px`, minWidth: `${width}px`, maxWidth: `${width}px`}">
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
  width?: string | number
}>(), {
  delay: 0,
  position: 'top',
  arrow: true,
  width: 200
})
</script>
