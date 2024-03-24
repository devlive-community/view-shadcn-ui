<template>
  <li v-if="navigator?.position === NavigationPosition.TOP">
    <NavigationMenuLink as-child>
      <NavigationRouterLink :external="navigator?.external" :link="navigator?.href as string"
                            :class="cn('block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                              'pl-5 pr-5 pt-3 pb-2',
                              $route.path === `${navigator?.href}` && 'bg-muted hover:bg-muted')">
        <div class="text-sm font-medium leading-none">{{ $t(navigator?.title as string) }}</div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
          <slot/>
        </p>
      </NavigationRouterLink>
    </NavigationMenuLink>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cn } from '@/lib/utils'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import { Button } from '@/components/ui/button'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import NavigationRouterLink from '@/views/layouts/base/components/components/NavigationRouterLink.vue'

export default defineComponent({
  name: 'NavigationItem',
  components: {
    NavigationRouterLink,
    NavigationMenuLink,
    Button
  },
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
