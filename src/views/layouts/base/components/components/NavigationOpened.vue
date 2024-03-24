<template>
  <div v-if="navigator?.position === NavigationPosition.LEFT_TOP || navigator?.position === NavigationPosition.LEFT_BOTTOM">
    <DropdownMenu v-if="navigator?.children && navigator.children.length > 0">
      <DropdownMenuTrigger class="cursor-pointer" as-child>
        <Button as="a" size="icon" class="h-12 w-12" :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
          <TooltipProvider>
            <Tooltip :delay-duration="0">
              <TooltipTrigger asChild>
                <Button as="a" size="icon" class="h-12 w-12" :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
                  <component :is="navigator?.icon"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" class="flex items-center gap-4">
                {{ $t(navigator?.title as string) }}
                <span v-if="navigator?.label" class="ml-auto text-muted-foreground">{{ navigator?.label }}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side='right' align='start'>
        <DropdownMenuLabel>
          {{ $t(navigator?.title as string) }}
          <span v-if="navigator?.label" class="ml-auto text-muted-foreground">({{ navigator?.label }})</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem v-for="item in navigator?.children" class="cursor-pointer">
          <NavigationRouterLink :external="item?.external" :link="item?.href as string">
            <Button as="a" size="sm" class="justify-start text-wrap rounded-none w-full"
                    :variant="$route.path === `${item?.href}` ? 'secondary' : 'ghost'">
              <component :is="item?.icon"/>
              <div class="ml-2 max-w-52 text-wrap">{{ $t(item?.title as string) }}</div>
              <div v-if="item?.label" class="ml-2 rounded-lg bg-primary px-2 mt-0.5 text-[0.625rem] text-primary-foreground">{{ item?.label }}</div>
            </Button>
          </NavigationRouterLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <NavigationRouterLink v-else :external="navigator?.external" :link="navigator?.href as string"
                          :class="`${navigator?.position === NavigationPosition.LEFT_BOTTOM ? 'absolute bottom-0 left-0 right-0' : ''}`">
      <TooltipProvider>
        <Tooltip :delay-duration="0">
          <TooltipTrigger asChild>
            <Button as="a" size="icon" class="h-12 w-12" :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
              <component :is="navigator?.icon"/>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" class="flex items-center gap-4">
            {{ $t(navigator?.title as string) }}
            <span v-if="navigator?.label" class="ml-auto text-muted-foreground">{{ navigator?.label }}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </NavigationRouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import { ChevronsLeft } from 'lucide-vue-next'
import NavigationRouterLink from '@/views/layouts/base/components/components/NavigationRouterLink.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default defineComponent({
  name: 'NavigationOpened',
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  components: {
    NavigationRouterLink,
    ChevronsLeft,
    Button,
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
  },
  props: {
    navigator: {
      type: Object as () => NavigationModel
    }
  }
})
</script>
