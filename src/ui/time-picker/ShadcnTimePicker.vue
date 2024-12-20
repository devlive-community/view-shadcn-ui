<template>
  <div class="relative w-full shadcn-time-picker-container">
    <ShadcnInput :model-value="modelValue"
                 readonly
                 :placeholder="placeholder"
                 @click="togglePopover"/>

    <div class="absolute right-2 top-0 h-full flex items-center justify-center text-gray-400">
      <slot name="icon">
        <ShadcnIcon icon="Clock" size="18"/>
      </slot>
    </div>

    <div v-if="isOpen" class="absolute mt-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-2">
      <div class="flex justify-between">
        <div class="flex space-x-2">
          <ShadcnNumber v-model="hoursNumber"
                        class="w-14"
                        :min="0"
                        :max="23"
                        @on-change="onTimeChange"/>
          <span class="text-xl select-none">:</span>
          <ShadcnNumber v-model="minutesNumber"
                        class="w-14"
                        :min="0"
                        :max="59"
                        @on-change="onTimeChange"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { TimePickerEmits, TimePickerProps } from './types'
import { t } from '@/utils/locale'

const props = withDefaults(defineProps<TimePickerProps>(), {
  modelValue: '',
  placeholder: t('timePicker.placeholder.time')
})

const emit = defineEmits<TimePickerEmits>()

const isOpen = ref(false)
const hoursNumber = ref(0)
const minutesNumber = ref(0)

const padNumberToString = (num: number): string => {
  return num.toString().padStart(2, '0')
}

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const [h, m] = newValue.split(':')
    hoursNumber.value = parseInt(h, 10)
    minutesNumber.value = parseInt(m, 10)
  }
})

const togglePopover = () => {
  isOpen.value = !isOpen.value
}

const onTimeChange = () => {
  const h = padNumberToString(hoursNumber.value)
  const m = padNumberToString(minutesNumber.value)
  const timeString = `${ h }:${ m }`
  emit('update:modelValue', timeString)
  emit('on-change', timeString)
}

const onClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.shadcn-time-picker-container')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>
