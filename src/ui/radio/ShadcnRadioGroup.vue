<template>
  <ShadcnSpace wrap :size="[10, 10]">
    <slot/>
  </ShadcnSpace>
</template>

<script setup lang="ts">
import { computed, provide, reactive, watch } from 'vue'
import { ShadcnSpace } from '@/ui/space'
import { RadioGroupProps, RadioGroupEmits } from './types'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  dark: false,
  glass: false
})

const emit = defineEmits<RadioGroupEmits>()

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

const dark = computed(() => props.dark)
const glass = computed(() => props.glass)

provide('radioGroup', {
  modelValue: radioGroupState,
  updateModelValue,
  dark,
  glass
})
</script>
