<template>
  <div class="mt-4 space-y-4">
    <!-- Every Week -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="1" name="week-type">
        {{ t('cron.text.everyWeek') }}
      </ShadcnRadio>
    </div>

    <!-- Not Specified -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="2" name="week-type">
        {{ t('cron.text.notSpecified') }}
      </ShadcnRadio>
    </div>

    <!-- Period -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="3" name="week-type">
        {{ t('cron.text.weekPeriodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="cycle01"
                      class="w-16"
                      :dark="dark"
                      :min="1"
                      :max="7"/>
        <span :class="dark ? 'text-gray-200' : ''">-</span>
        <ShadcnNumber v-model="cycle02"
                      class="w-16"
                      :dark="dark"
                      :min="1"
                      :max="7"/>
      </div>
    </div>

    <!-- Specific Week -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="4" name="week-type">
        {{ t('cron.text.specificWeek') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.the') }}</span>
        <ShadcnNumber v-model="average01"
                      class="w-16"
                      :dark="dark"
                      :min="1"
                      :max="4"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.weekOf') }}</span>
        <ShadcnNumber v-model="average02"
                      class="w-16"
                      :dark="dark"
                      :min="1"
                      :max="7"/>
      </div>
    </div>

    <!-- Last Week -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="5" name="week-type">
        {{ t('cron.text.lastWeek') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="weekday"
                      class="w-16"
                      :dark="dark"
                      :min="1"
                      :max="7"/>
      </div>
    </div>

    <!-- Specify -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :dark="dark" :value="6" name="week-type">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="checkboxList"
                    multiple
                    :dark="dark"
                    :options="weekOptions"
                    :placeholder="t('cron.placeholder.multiple')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { ShadcnRadio } from "@/ui/radio";

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

const radioValue = ref(2)
const weekday = ref(1)
const cycle01 = ref(1)
const cycle02 = ref(2)
const average01 = ref(1)
const average02 = ref(1)
const checkboxList = ref<number[]>([])

// Week list with localized names
const weekList = [
  t('datePicker.text.monday'),
  t('datePicker.text.tuesday'),
  t('datePicker.text.wednesday'),
  t('datePicker.text.thursday'),
  t('datePicker.text.friday'),
  t('datePicker.text.saturday'),
  t('datePicker.text.sunday')
]

// Create options for weeks
const weekOptions = weekList.map((label, index) => ({
  label,
  value: index + 1
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
    emit('update', 'week', '*')
    emit('update', 'year', '*')
  }
  else {
    if (props.cron?.month === '*') {
      emit('update', 'month', '0', 'week')
    }
    if (props.cron?.day === '*') {
      emit('update', 'day', '0', 'week')
    }
    if (props.cron?.hour === '*') {
      emit('update', 'hour', '0', 'week')
    }
    if (props.cron?.minute === '*') {
      emit('update', 'min', '0', 'week')
    }
    if (props.cron?.second === '*') {
      emit('update', 'second', '0', 'week')
    }
  }

  const expression = getCurrentExpression()
  emit('update:modelValue', expression)
  emit('update', 'week', expression)
}

// Get current expression based on radio value
const getCurrentExpression = () => {
  switch (radioValue.value) {
    case 1:
      return '*'
    case 2:
      return '?'
    case 3:
      return `${ cycle01.value }-${ cycle02.value }`
    case 4:
      return `${ average01.value }#${ average02.value }`
    case 5:
      return `${ weekday.value }L`
    case 6:
      return checkboxString.value
    default:
      return '?'
  }
}

// Handle cycle values change
const handleCycleChange = () => {
  if (radioValue.value === 3) {
    cycle01.value = props.checkNumber(cycle01.value, 1, 7)
    cycle02.value = props.checkNumber(cycle02.value, 1, 7)
    const cycleTotal = `${ cycle01.value }-${ cycle02.value }`
    emit('update', 'week', cycleTotal)
    emit('update:modelValue', cycleTotal)
  }
}

// Handle average values change
const handleAverageChange = () => {
  if (radioValue.value === 4) {
    average01.value = props.checkNumber(average01.value, 1, 4)
    average02.value = props.checkNumber(average02.value, 1, 7)
    const averageTotal = `${ average01.value }#${ average02.value }`
    emit('update', 'week', averageTotal)
    emit('update:modelValue', averageTotal)
  }
}

// Handle weekday value change
const handleWeekdayChange = () => {
  if (radioValue.value === 5) {
    weekday.value = props.checkNumber(weekday.value, 1, 7)
    const weekdayValue = `${ weekday.value }L`
    emit('update', 'week', weekdayValue)
    emit('update:modelValue', weekdayValue)
  }
}

// Parse cron expression
const parseCronExpression = (expression: string) => {
  if (!expression || expression === '*') {
    radioValue.value = 1
    return
  }

  if (expression === '?') {
    radioValue.value = 2
    return
  }

  if (expression.includes('L')) {
    radioValue.value = 5
    weekday.value = parseInt(expression.replace('L', ''))
    return
  }

  if (expression.includes('#')) {
    radioValue.value = 4
    const [week, day] = expression.split('#').map(Number)
    average01.value = week
    average02.value = day
    return
  }

  if (expression.includes('-')) {
    radioValue.value = 3
    const [start, end] = expression.split('-').map(Number)
    cycle01.value = start
    cycle02.value = end
    return
  }

  if (expression.includes(',')) {
    radioValue.value = 6
    checkboxList.value = expression.split(',').map(Number)
    return
  }

  if (!isNaN(Number(expression))) {
    radioValue.value = 6
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
watch(weekday, handleWeekdayChange)
watch(checkboxString, (newValue) => {
  if (radioValue.value === 6) {
    emit('update', 'week', newValue)
    emit('update:modelValue', newValue)
  }
})
</script>
