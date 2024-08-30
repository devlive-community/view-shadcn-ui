<template>
  <div v-if="isActive" class="flex-1">
    <TabsContent :value="value">
      <slot/>
    </TabsContent>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { TabsContent } from '@/components/ui/tabs'

interface TabsContext
{
  selectedValue: { value: string }
  orientation: 'horizontal' | 'vertical'
  setSelectedValue: (val: string) => void
}

export default defineComponent({
  name: 'ITabContent',
  components: { TabsContent },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup(props)
  {
    // Add types to inject and provide default values to avoid type errors
    const tabsContext = inject<TabsContext>('tabsContext', {
      selectedValue: { value: '' },
      orientation: 'horizontal',
      setSelectedValue: () => {
      }
    })

    // Make sure tabsContext exists and compare selectedValue
    const isActive = computed(() => tabsContext.selectedValue.value === props.value)

    return { isActive }
  }
})
</script>