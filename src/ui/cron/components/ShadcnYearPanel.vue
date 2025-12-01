<template>
  <div class="mt-4 space-y-4">
    <!-- Not Specified -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="1" name="year-type">
        {{ t('cron.text.yearNotFilled') }}
      </ShadcnRadio>
    </div>

    <!-- Every Year -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="2" name="year-type">
        {{ t('cron.text.everyYear') }}
      </ShadcnRadio>
    </div>

    <!-- Period -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="3" name="year-type">
        {{ t('cron.text.periodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="cycle01"
                      class="w-24"
                      :dark="dark"
                      :min="fullYear"
                      :max="fullYear + 100"/>
        <span :class="dark ? 'text-gray-200' : ''">-</span>
        <ShadcnNumber v-model="cycle02"
                      class="w-24"
                      :dark="dark"
                      :min="fullYear"
                      :max="fullYear + 100"/>
      </div>
    </div>

    <!-- Interval -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="4" name="year-type">
        {{ t('cron.text.fromStart') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="average01"
                      class="w-24"
                      :dark="dark"
                      :min="fullYear"
                      :max="fullYear + 100"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.yearStart') }}，</span>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.every') }}</span>
        <ShadcnNumber v-model="average02"
                      class="w-16"
                      :dark="dark"
                      :min="1"
                      :max="10"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.yearExecute') }}</span>
      </div>
    </div>

    <!-- Specify -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="5" name="year-type">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="checkboxList"
                    multiple
                    :dark="dark"
                    :options="yearOptions"
                    :placeholder="t('cron.placeholder.multiple')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { ShadcnRadio } from "@/ui/radio";
import { ShadcnNumber } from "@/ui/number";
import { ShadcnSelect } from "@/ui/select";

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

const fullYear = ref(new Date().getFullYear())
const radioValue = ref(1)
const cycle01 = ref(fullYear.value)
const cycle02 = ref(fullYear.value + 1)
const average01 = ref(fullYear.value)
const average02 = ref(1)
const checkboxList = ref<number[]>([])

// Create options for years (current year + 9 years)
const yearOptions = computed(() => {
  return Array.from({ length: 9 }, (_, i) => ({
    label: (fullYear.value + i).toString(),
    value: fullYear.value + i
  }))
})

const cycleObj = computed(() => ({
  cycle01: cycle01.value,
  cycle02: cycle02.value
}))

const averageObj = computed(() => ({
  average01: average01.value,
  average02: average02.value
}))

const checkboxString = computed(() => {
  return checkboxList.value.join()
})

// Radio button change
const handleRadioChange = () => {
  if (props.cron?.month === '*') {
    emit('update', 'month', '0', 'year')
  }
  if (props.cron?.day === '*') {
    emit('update', 'day', '0', 'year')
  }
  if (props.cron?.hour === '*') {
    emit('update', 'hour', '0', 'year')
  }
  if (props.cron?.minute === '*') {
    emit('update', 'min', '0', 'year')
  }
  if (props.cron?.second === '*') {
    emit('update', 'second', '0', 'year')
  }

  const expression = getCurrentExpression()
  emit('update:modelValue', expression)
  emit('update', 'year', expression)
}

// Get current expression based on radio value
const getCurrentExpression = () => {
  switch (radioValue.value) {
    case 1:
      return ''
    case 2:
      return '*'
    case 3:
      return `${cycle01.value}-${cycle02.value}`
    case 4:
      return `${average01.value}/${average02.value}`
    case 5:
      return checkboxString.value
    default:
      return ''
  }
}

// Handle cycle values change
const handleCycleChange = () => {
  if (radioValue.value === 3) {
    cycle01.value = props.checkNumber(cycle01.value, fullYear.value, fullYear.value + 100)
    cycle02.value = props.checkNumber(cycle02.value, fullYear.value + 1, fullYear.value + 101)
    const cycleTotal = `${cycle01.value}-${cycle02.value}`
    emit('update', 'year', cycleTotal)
    emit('update:modelValue', cycleTotal)
  }
}

// Handle average values change
const handleAverageChange = () => {
  if (radioValue.value === 4) {
    average01.value = props.checkNumber(average01.value, fullYear.value, fullYear.value + 100)
    average02.value = props.checkNumber(average02.value, 1, 10)
    const averageTotal = `${average01.value}/${average02.value}`
    emit('update', 'year', averageTotal)
    emit('update:modelValue', averageTotal)
  }
}

// Parse cron expression
const parseCronExpression = (expression: string) => {
  if (!expression) {
    radioValue.value = 1
    return
  }

  if (expression === '*') {
    radioValue.value = 2
    return
  }

  if (expression.includes('-')) {
    radioValue.value = 3
    const [start, end] = expression.split('-').map(Number)
    cycle01.value = start
    cycle02.value = end
    return
  }

  if (expression.includes('/')) {
    radioValue.value = 4
    const [start, interval] = expression.split('/').map(Number)
    average01.value = start
    average02.value = interval
    return
  }

  if (expression.includes(',')) {
    radioValue.value = 5
    checkboxList.value = expression.split(',').map(Number)
    return
  }

  if (!isNaN(Number(expression))) {
    radioValue.value = 5
    checkboxList.value = [Number(expression)]
  }
}

watch(() => props.modelValue, (newValue) => {
  if (newValue !== undefined) {
    parseCronExpression(newValue)
  }
})

watch(radioValue, handleRadioChange)
watch(cycleObj, handleCycleChange)
watch(averageObj, handleAverageChange)
watch(checkboxString, (newValue) => {
  if (radioValue.value === 5) {
    emit('update', 'year', newValue)
    emit('update:modelValue', newValue)
  }
})
</script>
