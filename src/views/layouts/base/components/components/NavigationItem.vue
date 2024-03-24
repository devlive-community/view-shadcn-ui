<template>
  <li v-if="item?.position === NavigationPosition.TOP">
    <NavigationMenuLink as-child>
      <RouterLink :to="item?.href" :class="cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          $attrs.class ?? '')">
        <div class="text-sm font-medium leading-none">{{ $t(item?.title as string) }}</div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
          <slot/>
        </p>
      </RouterLink>
    </NavigationMenuLink>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cn } from '@/lib/utils'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'

export default defineComponent({
  name: 'NavigationItem',
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  props: {
    item: {
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
