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
    const tabsContext = inject('tabsContext')

    // Get active orientation from the context
    const isActive = computed(() => tabsContext?.selectedValue.value === props.value)

    return { isActive }
  }
})
</script>
