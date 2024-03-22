<template>
  <RouterLink :to="navigator?.href as string" :class="`${navigator?.position === NavigationPosition.BOTTOM ? 'absolute bottom-0 left-0 right-0' : ''}`">
    <Button as="a" size="sm" class="justify-start text-wrap rounded-none h-10 w-full border-l border-l-slate-500 px-2"
            :variant="$route.path === `${navigator?.href}` ? 'secondary' : 'ghost'">
      <component :is="navigator?.icon"/>
      <div class="ml-2">{{ navigator?.title }}</div>
      <div v-if="navigator?.label" class="ml-2 rounded-lg bg-primary px-2 mt-0.5 text-[0.625rem] text-primary-foreground">{{ navigator?.label }}</div>
    </Button>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { NavigationModel, NavigationPosition } from '@/model/Navigation'

export default defineComponent({
  name: 'NavigationClosed',
  computed: {
    NavigationPosition()
    {
      return NavigationPosition
    }
  },
  components: {Button},
  props: {
    navigator: {
      type: Object as () => NavigationModel
    }
  }
})
</script>
