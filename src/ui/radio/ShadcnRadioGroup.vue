<template>
  <ShadcnSpace wrap :size="[10, 10]">
    <slot/>
  </ShadcnSpace>
</template>

<script setup lang="ts">
import { computed, provide, reactive, watch } from 'vue'
import { ShadcnSpace } from '@/ui/space'
import { RadioEmits, RadioProps } from './types'

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'default',
  type: 'primary',
  dark: false,
  glass: false
})

const emit = defineEmits<RadioEmits>()

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
const size = computed(() => props.size)
const type = computed(() => props.type)

provide('radioGroup', {
  modelValue: radioGroupState,
  updateModelValue,
  dark,
  glass,
  size,
  type
})
</script>
