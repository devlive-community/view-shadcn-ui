<template>
  <div class="flex items-center gap-2" role="group">
    <slot :disabled="disabled" :size="size"/>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { ToggleGroupProps } from './types'

const props = withDefaults(defineProps<ToggleGroupProps>(), {
  disabled: false,
  size: 'default'
})

const emit = defineEmits(['update:modelValue'])

// Provide group context to toggle children
provide('toggleGroup', {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  size: computed(() => props.size),
  onChange: (value: any) => emit('update:modelValue', value)
})
</script>
