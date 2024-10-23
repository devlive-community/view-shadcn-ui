<template>
  <ShadcnSpace wrap :size="[10, 10]">
    <slot/>
  </ShadcnSpace>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, provide, reactive, watch } from 'vue'
import ShadcnSpace from '@/ui/space'

const props = defineProps<{
  modelValue?: any[],
}>()

const emit = defineEmits(['update:modelValue', 'on-change'])

// Create a reactive state for the group data
const checkboxGroupState = reactive({
  modelValue: props.modelValue || []
})

// Watch for changes in props.modelValue to update the reactive state
watch(() => props.modelValue, (newVal) => {
  checkboxGroupState.modelValue = newVal || []
})

// Function to update the model value based on checkbox state
const updateModelValue = (value: any, checked: boolean) => {
  let newValue = [...checkboxGroupState.modelValue]

  if (checked) {
    if (!newValue.includes(value)) {
      newValue.push(value)
    }
  }
  else {
    newValue = newValue.filter(v => v !== value)
  }

  checkboxGroupState.modelValue = newValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

// Provide checkboxGroup data to child components
provide('checkboxGroup', {
  modelValue: checkboxGroupState,
  updateModelValue
})
</script>
