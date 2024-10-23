<template>
  <ShadcnSpace wrap :size="[10, 10]">
    <slot/>
  </ShadcnSpace>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, provide, reactive, watch } from 'vue'
import ShadcnSpace from '@/ui/space'

const props = defineProps<{
  modelValue?: any
}>()

const emit = defineEmits(['update:modelValue', 'on-change'])

const radioGroupState = reactive({
  modelValue: props.modelValue
})

watch(() => props.modelValue, (newVal) => {
  radioGroupState.modelValue = newVal
})

watch(() => radioGroupState.modelValue, (newVal) => {
  emit('update:modelValue', newVal)
})

const updateModelValue = (value: any) => {
  radioGroupState.modelValue = value
  emit('on-change', value)
}

provide('radioGroup', {
  modelValue: radioGroupState,
  updateModelValue
})
</script>
