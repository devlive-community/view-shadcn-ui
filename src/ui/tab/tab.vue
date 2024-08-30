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

interface TabsContext
{
  selectedValue: { value: string }
  orientation: 'horizontal' | 'vertical'
  setSelectedValue: (val: string) => void
}

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
    // Specify the type when injecting the context and provide a default value to prevent injection failure
    const tabsContext = inject<TabsContext>('tabsContext', {
      selectedValue: { value: '' },
      orientation: 'horizontal',
      setSelectedValue: () => {
      }
    })

    // Get direction value
    const orientation = tabsContext.orientation

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
