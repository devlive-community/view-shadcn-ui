<template>
  <ShadcnSpace wrap :size="[10, 10]">
    <slot/>
  </ShadcnSpace>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, provide, reactive, watch } from 'vue'
import ShadcnSpace from '@/ui/space'

const props = withDefaults(defineProps<{
  modelValue?: any
  dark?: boolean
}>(), {
  dark: false
})

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

const dark = computed(() => props.dark)

provide('radioGroup', {
  modelValue: radioGroupState,
  updateModelValue,
  dark
})
</script>
