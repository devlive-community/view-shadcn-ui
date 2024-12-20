<template>
  <div class="relative w-full shadcn-time-picker-container">
    <ShadcnInput readonly
                 :model-value="displayValue"
                 :placeholder="placeholder"
                 :disabled="disabled"
                 @click="togglePopover"/>

    <div class="absolute right-2 top-0 h-full flex items-center gap-2 text-gray-400">
      <div v-if="clearable && modelValue"
           class="flex items-center cursor-pointer hover:text-muted-foreground"
           @click="onClear">
        <slot name="clear">
          <ShadcnIcon icon="CircleX" size="18"/>
        </slot>
      </div>

      <slot name="icon">
        <ShadcnIcon icon="Clock" size="18"/>
      </slot>
    </div>

    <div v-if="isOpen"
         class="absolute mt-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-2 z-10 space-y-2 w-fit">
      <div class="flex justify-between items-center gap-3">
        <div class="flex space-x-2">
          <ShadcnNumber v-model="hoursNumber"
                        class="w-14"
                        :min="0"
                        :max="is12Hours ? 12 : 23"
                        :formatter="zeroPadFormatter"
                        :parser="parseNumber"
                        @focus="isOpen = true"
                        @on-change="onTimeChange"/>
          <span class="text-xl select-none">:</span>
          <ShadcnNumber v-model="minutesNumber"
                        class="w-14"
                        :min="0"
                        :max="59"
                        :formatter="zeroPadFormatter"
                        :parser="parseNumber"
                        @focus="isOpen = true"
                        @on-change="onTimeChange"/>
          <template v-if="hasSeconds">
            <span class="text-xl select-none">:</span>
            <ShadcnNumber v-model="secondsNumber"
                          class="w-14"
                          :max="59"
                          :min="0"
                          :formatter="zeroPadFormatter"
                          :parser="parseNumber"
                          @focus="isOpen = true"
                          @on-change="onTimeChange"/>
          </template>
        </div>

        <div v-if="is12Hours">
          <ShadcnToggleGroup v-model="period"
                             class="space-x-1"
                             type="single"
                             @on-change="handlePeriodChange">
            <ShadcnToggle value="AM">
              {{ t('timePicker.text.am') }}
            </ShadcnToggle>
            <ShadcnToggle value="PM">
              {{ t('timePicker.text.pm') }}
            </ShadcnToggle>
          </ShadcnToggleGroup>
        </div>
      </div>

      <div v-if="quickTimes?.length" class="grid grid-cols-3 gap-2 mt-2">
        <button v-for="time in quickTimes"
                :key="time"
                class="px-2 py-1 text-sm rounded-md hover:bg-gray-100 select-none active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                @click="selectQuickTime(time)">
          {{ time }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { TimePickerEmits, TimePickerProps, TimePickerSlots } from './types'
import { t } from '@/utils/locale'

defineSlots<TimePickerSlots>()

const props = withDefaults(defineProps<TimePickerProps>(), {
  modelValue: '',
  placeholder: t('timePicker.placeholder.time'),
  disabled: false,
  clearable: true,
  format: 'HH:mm'
})

const emit = defineEmits<TimePickerEmits>()

const isOpen = ref(false)
const hoursNumber = ref(0)
const minutesNumber = ref(0)
const secondsNumber = ref(0)
const period = ref<'AM' | 'PM'>('AM')

const is12Hours = computed(() => props.format.includes('hh'))
const hasSeconds = computed(() => props.format.includes(':ss'))

const padNumberToString = (num: number): string => {
  return num.toString().padStart(2, '0')
}

const parseNumber = (value: string): number => Number(value)

const displayValue = computed(() => {
  if (!props.modelValue) {
    return ''
  }

  if (!is12Hours.value) {
    return props.modelValue
  }

  const [time, periodPart] = props.modelValue.split(' ')
  const [hours, ...rest] = time.split(':')
  const hour24 = parseInt(hours, 10)
  const hour12 = hour24 % 12 || 12

  return `${ padNumberToString(hour12) }:${ rest.join(':') } ${ periodPart }`
})

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    hoursNumber.value = 0
    minutesNumber.value = 0
    secondsNumber.value = 0
    period.value = 'AM'
    return
  }

  const [time, ampm] = newValue.split(' ')
  const timeParts = time.split(':')
  let hours = parseInt(timeParts[0], 10)

  if (is12Hours.value) {
    period.value = (ampm || 'AM') as 'AM' | 'PM'
    hours = hours % 12 || 12
  }

  hoursNumber.value = hours
  minutesNumber.value = parseInt(timeParts[1], 10)

  if (hasSeconds.value && timeParts[2]) {
    secondsNumber.value = parseInt(timeParts[2], 10)
  }
})

const togglePopover = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const handlePeriodChange = (value: 'AM' | 'PM') => {
  period.value = value
  onTimeChange()
}

const zeroPadFormatter = (num: number): string => {
  if (is12Hours.value) {
    return (num % 12 || 12).toString().padStart(2, '0')
  }
  return num.toString().padStart(2, '0')
}

const convert12To24 = (hours12: number, periodValue: 'AM' | 'PM'): number => {
  if (periodValue === 'PM' && hours12 < 12) {
    return hours12 + 12
  }
  if (periodValue === 'AM' && hours12 === 12) {
    return 0
  }
  return hours12
}

const onTimeChange = () => {
  let hours = hoursNumber.value
  if (is12Hours.value) {
    hours = convert12To24(hours, period.value)
  }

  const h = padNumberToString(hours)
  const m = padNumberToString(minutesNumber.value)
  let timeString = `${ h }:${ m }`

  if (hasSeconds.value) {
    const s = padNumberToString(secondsNumber.value)
    timeString = `${ timeString }:${ s }`
  }

  if (is12Hours.value) {
    timeString = `${ timeString } ${ period.value }`
  }

  emit('update:modelValue', timeString)
  emit('on-change', timeString)
}

const onClickOutside = (event: MouseEvent) => {
  if (!isOpen.value) {
    return
  }
  const target = event.target as HTMLElement
  if (!target.closest('.shadcn-time-picker-container')) {
    isOpen.value = false
  }
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

const onClear = (event: Event) => {
  event.stopPropagation()
  emit('update:modelValue', '')
  emit('on-clear')
}

const selectQuickTime = (time: string) => {
  emit('update:modelValue', time)
  emit('on-change', time)
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeyDown)
})
</script>