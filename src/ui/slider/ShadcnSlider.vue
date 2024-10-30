<template>
  <div class="flex items-center w-full">
    <div class="relative w-full h-2">
      <!-- Background track -->
      <div :class="['absolute w-full h-full rounded',
                    disabled ? 'bg-gray-100' : 'bg-gray-200'
           ]"/>

      <!-- Filled track -->
      <div :class="['absolute h-full rounded z-[1]',
                    disabled ? 'bg-gray-300' : 'bg-blue-500'
           ]"
           :style="`width: ${percentage}%`"/>

      <!-- Range Input -->
      <input v-model="internalValue"
             type="range"
             :class="['absolute w-full h-full opacity-0 z-[3]',
                      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
             ]"
             :min="min"
             :max="max"
             :step="step"
             :disabled="disabled"
             @input="onChange"/>

      <!-- Thumb -->
      <div :class="['absolute w-4 h-4 rounded-full top-1/2 -translate-y-1/2 transition-colors z-[2] pointer-events-none border-2',
                    disabled ? 'bg-gray-50 border-gray-300' : 'bg-white border-blue-500 group-hover:bg-blue-50'
           ]"
           :style="`left: calc(${percentage}% - 0.5rem)`"/>
    </div>
    <span v-if="tip"
          :class="['ml-3 text-sm',
                   disabled ? 'text-gray-400' : 'text-gray-500'
          ]">
      {{ internalValue }}
    </span>
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
  disabled?: boolean
}>(), {
  min: 0,
  max: 100,
  step: 1,
  tip: false,
  disabled: false
})

const internalValue = ref(props.modelValue)

const min = computed(() => Number(props.min) ?? 0)
const max = computed(() => Number(props.max) ?? 100)

const percentage = computed(() => {
  return ((Number(internalValue.value) - min.value) / (max.value - min.value)) * 100
})

watch(() => props.modelValue, (newValue: number | string) => internalValue.value = Number(newValue))

const onChange = () => {
  if (!props.disabled) {
    emit('update:modelValue', internalValue.value)
    emit('on-change', internalValue.value)
  }
}
</script>
