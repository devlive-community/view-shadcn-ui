<template>
  <NavigationMenu>
    <NavigationMenuList>
      <div v-for="item in navigators">
        <div v-if="item.position === NavigationPosition.TOP">
          <NavigationMenuItem v-if="item?.children && item.children.length > 0">
            <NavigationMenuTrigger>{{ $t(item?.group as string) }}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                <NavigationItem v-for="navigator in item?.children" :navigator="navigator">
                  <span v-if="navigator?.description">
                    {{ $t(navigator?.description as string) }}
                  </span>
                </NavigationItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem v-else>
            <NavigationItem :navigator="item"/>
          </NavigationMenuItem>
        </div>
      </div>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/views/layouts/base/components/components/NavigationItem.vue'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'

export default defineComponent({
  name: 'NavigationHeader',
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  components: {
    NavigationItem,
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
  },
  props: {
    navigators: {
      type: Array as () => NavigationModel[]
    }
  }
})
</script>
