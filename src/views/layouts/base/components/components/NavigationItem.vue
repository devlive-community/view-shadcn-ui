<template>
  <li v-if="navigator?.position === NavigationPosition.TOP">
    <RouterLink :to="navigator?.href">
      <Button as="a" size="sm" class="justify-start text-wrap h-8 pl-5 pr-5 w-full"
              :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
        <component :is="navigator?.icon"/>
        <div :class="navigator?.icon ? 'ml-2' : ''">{{ $t(navigator?.title as string) }}</div>
      </Button>
    </RouterLink>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cn } from '@/lib/utils'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import { Button } from '@/components/ui/button'

export default defineComponent({
  name: 'NavigationItem',
  components: {Button},
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  props: {
    navigator: {
      type: Object as () => NavigationModel
    }
  },
  setup()
  {
    return {
      cn
    }
  }
})
</script>
