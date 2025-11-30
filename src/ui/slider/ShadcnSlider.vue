<template>
  <div class="flex items-center w-full">
    <div class="relative w-full h-2">
      <!-- Background track -->
      <div :class="['absolute w-full h-full rounded',
                    disabled ? (dark ? 'bg-gray-800' : 'bg-gray-100') : (dark ? 'bg-gray-700' : 'bg-gray-200')
           ]"/>

      <!-- Filled track -->
      <div :class="['absolute h-full rounded z-[1]',
                    disabled ? (dark ? 'bg-gray-600' : 'bg-gray-300') : ButtonBackgroundType[type]
           ]"
           :style="`width: ${percentage}%`"/>

      <!-- Step marks -->
      <div v-if="showStep">
        <div v-for="(mark, index) in stepMarks"
             :key="index"
             :class="['absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-[2]',
                      disabled ? (dark ? 'bg-gray-600' : 'bg-gray-300') : (dark ? 'bg-gray-500' : 'bg-gray-400')
             ]"
             :style="`left: ${mark}%`"/>
      </div>

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
                    disabled ? (dark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300') : (dark ? 'bg-gray-800 border-blue-400 group-hover:bg-gray-700' : 'bg-white border-blue-500 group-hover:bg-blue-50')
           ]"
           :style="`left: calc(${percentage}% - 0.5rem)`"/>
    </div>
    <span v-if="showTip"
          :class="['ml-3 text-sm',
                   disabled ? (dark ? 'text-gray-600' : 'text-gray-400') : (dark ? 'text-gray-400' : 'text-gray-500')
          ]">
      {{ internalValue }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { SliderEmits, SliderProps } from '@/ui/slider/types.ts'
import { ButtonBackgroundType } from '@/ui/common/type.ts'

const emit = defineEmits<SliderEmits>()

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  showTip: false,
  showStep: false,
  disabled: false,
  type: 'primary',
  dark: false
})

const internalValue = ref(Number(props.modelValue))

const min = computed(() => Number(props.min) ?? 0)
const max = computed(() => Number(props.max) ?? 100)

const percentage = computed(() => {
  return ((Number(internalValue.value) - min.value) / (max.value - min.value)) * 100
})

// Calculate step marks
const stepMarks = computed(() => {
  const marks = Array<number>()
  const range = max.value - min.value
  const stepValue = Number(props.step)
  const steps = Math.floor(range / stepValue)

  for (let i = 1; i < steps; i++) {
    const value = min.value + (stepValue * i)
    if (value <= max.value) {
      marks.push((value - min.value) / (max.value - min.value) * 100)
    }
  }
  return marks
})

watch(() => props.modelValue, (newValue) => {
  const numericValue = Number(newValue)
  if (!isNaN(numericValue)) {
    internalValue.value = numericValue
  }
})

const onChange = () => {
  if (!props.disabled) {
    const numericValue = Number(internalValue.value)
    if (!isNaN(numericValue)) {
      emit('update:modelValue', numericValue)
      emit('on-change', numericValue)
    }
  }
}
</script>