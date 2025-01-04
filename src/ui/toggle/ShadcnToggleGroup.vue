<template>
  <div :class="[
          'flex gap-2',
          orientation === 'vertical' ? 'flex-col items-start' : 'flex-row items-center'
       ]"
       role="group">
    <slot :disabled="disabled" :size="size"/>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { ToggleEmits, ToggleGroupProps } from './types'

const emit = defineEmits<ToggleEmits>()
const props = withDefaults(defineProps<ToggleGroupProps>(), {
  disabled: false,
  size: 'default',
  multiple: false,
  orientation: 'horizontal'
})

provide('toggleGroup', {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  size: computed(() => props.size),
  multiple: computed(() => props.multiple),
  orientation: computed(() => props.orientation),
  onChange: (value: any) => {
    emit('update:modelValue', value)
    emit('on-change', value)
  }
})
</script>