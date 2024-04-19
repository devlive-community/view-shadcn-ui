<template>
  <TooltipProvider :delay-duration="duration">
    <Tooltip>
      <TooltipTrigger as-child>
        <slot/>
      </TooltipTrigger>
      <TooltipContent :side="side as any">
        <p v-if="content">{{ content }}</p>
        <slot v-else name="content"/>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default defineComponent({
  name: 'ITooltip',
  components: {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
  },
  props: {
    content: {
      type: String
    },
    duration: {
      type: Number,
      default: 0
    },
    side: {
      type: String,
      default: 'top'
    }
  }
})
</script>
