<template>
  <div v-if="navigator?.position === NavigationPosition.LEFT_TOP || navigator?.position === NavigationPosition.LEFT_BOTTOM">
    <Collapsible v-model="navigator.opened" v-if="navigator?.children && navigator.children.length > 0" class="cursor-pointer" @click="navigator.opened = !navigator.opened">
      <CollapsibleTrigger as-child>
        <Button as="a" size="sm" class="flex items-center justify-between text-wrap rounded-none h-10 w-full border-l border-l-slate-500 px-2"
                :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
          <div class="flex items-center">
            <component :is="navigator?.icon"/>
            <div class="ml-2">{{ $t(navigator?.title as string) }}</div>
            <div v-if="navigator?.label" class="ml-2 rounded-lg bg-primary px-2 mt-0.5 text-[0.625rem] text-primary-foreground">{{ navigator?.label }}</div>
          </div>
          <ChevronDown :class="`${navigator?.opened ? 'rotate-180' : 'rotate-0'}`"/>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent class="space-y-2">
        <NavigationRouterLink v-for="item in navigator?.children" :external="item?.external" :link="item?.href as string"
                              :class="`my-1 ml-8 ${item?.position === NavigationPosition.LEFT_BOTTOM ? 'absolute bottom-0 left-0 right-0' : ''}`">
          <Button as="a" size="sm" class="justify-start text-wrap rounded-none h-10 w-full border-l border-l-slate-500 px-2"
                  :variant="$route.path === `${item?.href}` ? 'secondary' : 'ghost'">
            <component :is="item?.icon"/>
            <div class="ml-2">{{ $t(item?.title as string) }}</div>
            <div v-if="item?.label" class="ml-2 rounded-lg bg-primary px-2 mt-0.5 text-[0.625rem] text-primary-foreground">{{ item?.label }}</div>
          </Button>
        </NavigationRouterLink>
      </CollapsibleContent>
    </Collapsible>
    <NavigationRouterLink v-else :external="navigator?.external" :link="navigator?.href as string"
                          :class="`${navigator?.position === NavigationPosition.LEFT_BOTTOM ? 'absolute bottom-0 left-0 right-0' : ''}`">
      <Button as="a" size="sm" class="justify-start text-wrap rounded-none h-10 w-full border-l border-l-slate-500 px-2"
              :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
        <component :is="navigator?.icon"/>
        <div class="ml-2">{{ $t(navigator?.title as string) }}</div>
        <div v-if="navigator?.label" class="ml-2 rounded-lg bg-primary px-2 mt-0.5 text-[0.625rem] text-primary-foreground">{{ navigator?.label }}</div>
      </Button>
    </NavigationRouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import NavigationRouterLink from '@/views/layouts/base/components/components/NavigationRouterLink.vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-vue-next'

export default defineComponent({
  name: 'NavigationClosed',
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  components: {
    Collapsible, CollapsibleTrigger, CollapsibleContent,
    NavigationRouterLink,
    Button,
    ChevronDown
  },
  props: {
    navigator: {
      type: Object as () => NavigationModel
    }
  }
})
</script>
