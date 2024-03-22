<template>
  <RouterLink :to="navigator?.href as string" :class="`${navigator?.position === NavigationPosition.BOTTOM ? 'absolute bottom-0 left-0 right-0' : ''}`">
    <TooltipProvider>
      <Tooltip :delay-duration="0">
        <TooltipTrigger asChild>
          <Button as="a" size="icon" class="h-12 w-12" :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
            <component :is="navigator?.icon"/>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" class="flex items-center gap-4">
          {{ navigator?.title }}
          <span v-if="navigator?.label" class="ml-auto text-muted-foreground">{{ navigator?.label }}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import { ChevronsLeft } from 'lucide-vue-next'

export default defineComponent({
  name: 'NavigationOpened',
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  components: {
    ChevronsLeft,
    Button,
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
  },
  props: {
    navigator: {
      type: Object as () => NavigationModel
    }
  }
})
</script>
