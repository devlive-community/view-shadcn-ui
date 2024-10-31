<template>
  <div class="border rounded-md border-gray-200">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { provide, toRef } from 'vue'

interface Props
{
  modelValue?: string[]
  accordion?: boolean
}

interface Emits
{
  (e: 'update:modelValue', value: string[]): void

  (e: 'on-change', value: { name: string, value: string[] }): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  accordion: false
})

const emit = defineEmits<Emits>()

provide('expandedItems', toRef(props, 'modelValue'))
provide('accordion', toRef(props, 'accordion'))

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
