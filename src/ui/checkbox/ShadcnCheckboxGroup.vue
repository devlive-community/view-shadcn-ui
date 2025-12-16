<template>
  <ShadcnSpace :size="[10, 10]" wrap>
    <slot/>
  </ShadcnSpace>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps, provide, reactive, watch } from 'vue'
import { ShadcnSpace } from '@/ui/space'

const props = withDefaults(defineProps<{
  modelValue?: any[],
  dark?: boolean,
  glass?: boolean
}>(), {
  dark: false,
  glass: false
})

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

// Provide dark mode to child checkboxes
provide('checkboxGroupDark', computed(() => props.dark))
provide('checkboxGroupGlass', computed(() => props.glass))
</script>
