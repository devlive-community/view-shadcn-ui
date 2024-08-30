<template>
  <Tabs :default-value="value">
    <div :class="cn(
   isVertical(orientation)
          ? 'flex'
          : 'flex flex-col space-y-2'
    )">
      <TabsList :class="cn(
          isVertical(orientation)
                 ? 'flex flex-col h-full py-2 space-y-2' // Vertical: column layout
                 : 'flex flex-row space-x-2 w-fit' // Horizontal: row layout
      )">
        <slot name="default"/>
      </TabsList>

      <div :class="cn(
     isVertical(orientation)
            ? 'flex-1 ml-4' // Vertical mode is on the right
            : 'flex-1 mt-2' // Horizontal mode is below
      )">
        <slot name="content"/>
      </div>
    </div>
  </Tabs>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, provide, ref } from 'vue'
import { Tabs, TabsList } from '@/components/ui/tabs'
import { cn } from '@/lib/utils.ts'
import { isVertical } from '@/ui/tab/utils.ts'

export default defineComponent({
  name: 'ITabs',
  components: { Tabs, TabsList },
  props: {
    value: {
      type: String,
      required: true
    },
    orientation: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'vertical',
      validator: (value: string) => ['horizontal', 'vertical'].includes(value)
    }
  },
  setup(props, { emit, slots })
  {
    const selectedValue = ref(props.value)

    // Provide orientation and selected value by providing
    provide('tabsContext', {
      selectedValue,
      orientation: props.orientation,
      setSelectedValue: (val: string) => {
        selectedValue.value = val
        emit('update:value', val)
      }
    })

    // Slot type checking function
    const validateSlots = () => {
      if (slots.default) {
        const defaultSlotChildren = slots.default()
        defaultSlotChildren.forEach((child) => {
          // Check if the child is a component and has a 'name' property
          if (typeof child.type === 'object' && 'name' in child.type) {
            if (child.type.name !== 'ITab') {
              console.warn('The default slot can only contain ITab components')
            }
          }
        })
      }

      if (slots.content) {
        const contentSlotChildren = slots.content()
        contentSlotChildren.forEach((child) => {
          if (typeof child.type === 'object' && 'name' in child.type) {
            if (child.type.name !== 'ITabContent') {
              console.warn('The content slot can only contain ITabContent components')
            }
          }
        })
      }
    }

    // Check slot contents when component is mounted
    onMounted(validateSlots)

    return { cn, isVertical }
  }
})
</script>
