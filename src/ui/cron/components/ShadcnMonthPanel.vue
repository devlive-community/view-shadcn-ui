<template>
  <div class="mt-4 space-y-4">
    <!-- Every Month -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="1" name="month-type">
        {{ t('cron.text.everyMonth') }}
      </ShadcnRadio>
    </div>

    <!-- Period -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="2" name="month-type">
        {{ t('cron.text.periodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="cycle01"
                      :max="12"
                      :min="1"
                      :dark="dark"
                      class="w-16"/>
        <span :class="dark ? 'text-gray-200' : ''">-</span>
        <ShadcnNumber v-model="cycle02"
                      :max="12"
                      :min="1"
                      :dark="dark"
                      class="w-16"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.month') }}</span>
      </div>
    </div>

    <!-- Interval -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="3" name="month-type">
        {{ t('cron.text.fromStart') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="average01"
                      :max="12"
                      :min="1"
                      :dark="dark"
                      class="w-16"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.monthStart') }}，</span>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.every') }}</span>
        <ShadcnNumber v-model="average02"
                      :max="12"
                      :min="1"
                      :dark="dark"
                      class="w-16"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.monthExecute') }}</span>
      </div>
    </div>

    <!-- Specify -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="4" name="month-type">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="checkboxList"
                    :options="monthOptions"
                    :placeholder="t('cron.placeholder.multiple')"
                    :dark="dark"
                    multiple/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import ShadcnRadio from "@/ui/radio";

interface Props
{
  modelValue: string,
  checkNumber?: (num: number, min: number, max: number) => number,
  cron?: {
    second?: string
    minute?: string
    hour?: string
    day?: string
    month?: string
    week?: string
    year?: string
  }
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checkNumber: (num: number, min: number, max: number) => {
    if (num < min) {
      return min
    }
    if (num > max) {
      return max
    }
    return num
  },
  cron: () => ({})
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update', type: string, value: string, from?: string): void
}>()

const radioValue = ref(1)
const cycle01 = ref(1)
const cycle02 = ref(2)
const average01 = ref(1)
const average02 = ref(1)
const checkboxList = ref<number[]>([])

// Create options for months (1-12)
const monthOptions = Array.from({ length: 12 }, (_, i) => ({
  label: (i + 1).toString(),
  value: i + 1
}))

const cycleObj = computed(() => ({
  cycle01: cycle01.value,
  cycle02: cycle02.value
}))

const averageObj = computed(() => ({
  average01: average01.value,
  average02: average02.value
}))

const checkboxString = computed(() => {
  const str = checkboxList.value.join()
  return str === '' ? '*' : str
})

// Radio button change
const handleRadioChange = () => {
  if (radioValue.value === 1) {
    emit('update', 'month', '*')
    emit('update', 'year', '*')
  }
  else {
    // Update other time units to 0 if they are '*'
    if (props.cron?.day === '*') {
      emit('update', 'day', '0', 'month')
    }
    if (props.cron?.hour === '*') {
      emit('update', 'hour', '0', 'month')
    }
    if (props.cron?.minute === '*') {
      emit('update', 'min', '0', 'month')
    }
    if (props.cron?.second === '*') {
      emit('update', 'second', '0', 'month')
    }
  }

  const expression = getCurrentExpression()
  emit('update:modelValue', expression)
  emit('update', 'month', expression)
}

// Get current expression based on radio value
const getCurrentExpression = () => {
  switch (radioValue.value) {
    case 1:
      return '*'
    case 2:
      return `${cycle01.value}-${cycle02.value}`
    case 3:
      return `${average01.value}/${average02.value}`
    case 4:
      return checkboxString.value
    default:
      return '*'
  }
}

// Handle cycle values change
const handleCycleChange = () => {
  if (radioValue.value === 2) {
    cycle01.value = props.checkNumber(cycle01.value, 1, 12)
    cycle02.value = props.checkNumber(cycle02.value, 1, 12)
    const cycleTotal = `${cycle01.value}-${cycle02.value}`
    emit('update', 'month', cycleTotal)
    emit('update:modelValue', cycleTotal)
  }
}

// Handle average values change
const handleAverageChange = () => {
  if (radioValue.value === 3) {
    average01.value = props.checkNumber(average01.value, 1, 12)
    average02.value = props.checkNumber(average02.value, 1, 12)
    const averageTotal = `${average01.value}/${average02.value}`
    emit('update', 'month', averageTotal)
    emit('update:modelValue', averageTotal)
  }
}

// Parse cron expression
const parseCronExpression = (expression: string) => {
  if (!expression || expression === '*') {
    radioValue.value = 1
    return
  }

  if (expression.includes('-')) {
    radioValue.value = 2
    const [start, end] = expression.split('-').map(Number)
    cycle01.value = start
    cycle02.value = end
    return
  }

  if (expression.includes('/')) {
    radioValue.value = 3
    const [start, interval] = expression.split('/').map(Number)
    average01.value = start
    average02.value = interval
    return
  }

  if (expression.includes(',')) {
    radioValue.value = 4
    checkboxList.value = expression.split(',').map(Number)
    return
  }

  if (!isNaN(Number(expression))) {
    radioValue.value = 4
    checkboxList.value = [Number(expression)]
  }
}

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    parseCronExpression(newValue)
  }
})

watch(radioValue, handleRadioChange)
watch(cycleObj, handleCycleChange)
watch(averageObj, handleAverageChange)
watch(checkboxString, (newValue) => {
  if (radioValue.value === 4) {
    emit('update', 'month', newValue)
    emit('update:modelValue', newValue)
  }
})
</script>
