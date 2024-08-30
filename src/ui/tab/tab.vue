<template>
  <TabsTrigger :value="value"
               :class="cn(isVertical(orientation) && 'vertical-text p-1.5')"
               @click="handleClick">
    <slot/>
  </TabsTrigger>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { cn } from '@/lib/utils.ts'
import { isVertical } from '@/ui/tab/utils.ts'
import { TabsTrigger } from '@/components/ui/tabs'

export default defineComponent({
  name: 'ITab',
  components: { TabsTrigger },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup(props)
  {
    // Receives orientation and tabs context
    const tabsContext = inject('tabsContext')

    // Get the orientation from the context
    const orientation = tabsContext?.orientation || 'horizontal'

    const handleClick = () => {
      if (tabsContext) {
        tabsContext.setSelectedValue(props.value)
      }
    }

    return { cn, isVertical, handleClick, orientation }
  }
})
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
  white-space: nowrap;
}
</style>
