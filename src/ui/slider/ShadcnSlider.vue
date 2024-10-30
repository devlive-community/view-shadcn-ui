<template>
  <div class="flex items-center w-full">
    <div class="relative w-full h-2">
      <!-- Background track -->
      <div class="absolute w-full h-full bg-gray-200 rounded"/>

      <!-- Filled track -->
      <div class="absolute h-full bg-blue-500 rounded z-[1]"
           :style="`width: ${percentage}%`"/>

      <!-- Range Input -->
      <input v-model="internalValue"
             type="range"
             class="absolute w-full h-full opacity-0 cursor-pointer z-[3]"
             :min="min"
             :max="max"
             :step="step"
             @input="onChange"/>

      <!-- Thumb -->
      <div class="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full top-1/2 -translate-y-1/2 hover:bg-blue-600 transition-colors z-[2] pointer-events-none"
           :style="`left: calc(${percentage}% - 0.5rem)`"/>
    </div>
    <span v-if="tip" class="ml-3 text-gray-500 text-sm">{{ internalValue }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: number | string
  min?: number | string
  max?: number | string
  step?: number | string
  tip?: boolean
}>(), {
  min: 0,
  max: 100,
  step: 1,
  tip: false
})

const internalValue = ref(props.modelValue)

const min = computed(() => Number(props.min) ?? 0)
const max = computed(() => Number(props.max) ?? 100)

const percentage = computed(() => {
  return ((Number(internalValue.value) - min.value) / (max.value - min.value)) * 100
})

watch(() => props.modelValue, (newValue: number | string) => internalValue.value = Number(newValue))

const onChange = () => {
  emit('update:modelValue', internalValue.value)
  emit('on-change', internalValue.value)
}
</script>
