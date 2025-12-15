<template>
  <div :class="[
         'border rounded-md',
         glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
         glass ? 'border-white/20' : (dark ? 'border-gray-600' : 'border-gray-200'),
         glass ? (dark ? 'bg-white/10' : 'bg-white/60') : '',
         glass ? 'shadow-lg shadow-black/5' : ''
       ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { provide, toRef } from 'vue'
import type { CollapseProps, CollapseEmits } from './types'

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: () => [],
  accordion: false,
  dark: false,
  glass: false
})

const emit = defineEmits<CollapseEmits>()

provide('expandedItems', toRef(props, 'modelValue'))
provide('accordion', toRef(props, 'accordion'))
provide('collapseDark', toRef(props, 'dark'))
provide('collapseGlass', toRef(props, 'glass'))

provide('toggleItem', (name: string) => {
  const currentValue = [...props.modelValue]
  const index = currentValue.indexOf(name)

  if (props.accordion) {
    // Accordion Mode: Only the current item is kept
    emit('update:modelValue', index === -1 ? [name] : [])
    emit('on-change', { name, value: index === -1 ? [name] : [] })
  }
  else {
    // Multiple Mode: The current item is toggled
    if (index === -1) {
      currentValue.push(name)
    }
    else {
      currentValue.splice(index, 1)
    }
    emit('update:modelValue', currentValue)
    emit('on-change', { name, value: currentValue })
  }
})
</script>
