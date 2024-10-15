<template>
  <TooltipProvider :delay-duration="delay">
    <Tooltip>
      <TooltipTrigger>
        <slot/>
      </TooltipTrigger>
      <TooltipContent :side="position">
        <p v-if="content">{{ content }}</p>
        <slot v-else name="content"/>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

withDefaults(defineProps<{
  content?: string
  delay?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  delay: 0,
  position: 'top'
})
</script>
