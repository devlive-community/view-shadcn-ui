<template>
  <div class="mt-4 space-y-4">
    <!-- Every Day -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :value="1" name="day-type">
        {{ t('cron.text.everyDay') }}
      </ShadcnRadio>
    </div>

    <!-- Not Specified -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :value="2" name="day-type">
        {{ t('cron.text.notSpecified') }}
      </ShadcnRadio>
    </div>

    <!-- Period -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :value="3" name="day-type">
        {{ t('cron.text.periodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="cycle01"
                      :max="31"
                      :min="1"
                      class="w-16"/>
        <span>-</span>
        <ShadcnNumber v-model="cycle02"
                      :max="31"
                      :min="1"
                      class="w-16"/>
        <span class="text-sm">{{ t('cron.text.day') }}</span>
      </div>
    </div>

    <!-- Interval -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :value="4" name="day-type">
        {{ t('cron.text.fromStart') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="average01"
                      :max="31"
                      :min="1"
                      class="w-16"/>
        <span class="text-sm">{{ t('cron.text.dayStart') }}，</span>
        <span class="text-sm">{{ t('cron.text.every') }}</span>
        <ShadcnNumber v-model="average02"
                      :max="31"
                      :min="1"
                      class="w-16"/>
        <span class="text-sm">{{ t('cron.text.dayExecute') }}</span>
      </div>
    </div>

    <!-- Working Day -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="radioValue" :value="5" name="day-type">
        {{ t('cron.text.workday') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="workday"
                      :max="31"
                      :min="1"
                      class="w-16"/>
        <span class="text-sm">{{ t('cron.text.nearestWorkday') }}</span>
      </div>
    </div>

    <!-- Last Day -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :value="6" name="day-type">
        {{ t('cron.text.lastDayOfMonth') }}
      </ShadcnRadio>
    </div>

    <!-- Specify -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="radioValue" :value="7" name="day-type">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="checkboxList"
                    :options="dayOptions"
                    :placeholder="t('cron.placeholder.multiple')"
                    multiple/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'

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
const workday = ref(1)
const cycle01 = ref(1)
const cycle02 = ref(2)
const average01 = ref(1)
const average02 = ref(1)
const checkboxList = ref<number[]>([])

// Create options for days (1-31)
const dayOptions = Array.from({ length: 31 }, (_, i) => ({
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
    emit('update', 'day', '*', 'day')
    emit('update', 'week', '?', 'day')
    emit('update', 'month', '*', 'day')
  }
  else {
    if (props.cron?.hour === '*') {
      emit('update', 'hour', '0', 'day')
    }
    if (props.cron?.minute === '*') {
      emit('update', 'min', '0', 'day')
    }
    if (props.cron?.second === '*') {
      emit('update', 'second', '0', 'day')
    }
  }

  const expression = getCurrentExpression()
  emit('update:modelValue', expression)
  emit('update', 'day', expression)
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
      return `${ average01.value }/${ average02.value }`
    case 5:
      return `${ workday.value }W`
    case 6:
      return 'L'
    case 7:
      return checkboxString.value
    default:
      return '*'
  }
}

// Handle cycle values change
const handleCycleChange = () => {
  if (radioValue.value === 3) {
    cycle01.value = props.checkNumber(cycle01.value, 1, 31)
    cycle02.value = props.checkNumber(cycle02.value, 1, 31)
    const cycleTotal = `${ cycle01.value }-${ cycle02.value }`
    emit('update', 'day', cycleTotal)
    emit('update:modelValue', cycleTotal)
  }
}

// Handle average values change
const handleAverageChange = () => {
  if (radioValue.value === 4) {
    average01.value = props.checkNumber(average01.value, 1, 31)
    average02.value = props.checkNumber(average02.value, 1, 31)
    const averageTotal = `${ average01.value }/${ average02.value }`
    emit('update', 'day', averageTotal)
    emit('update:modelValue', averageTotal)
  }
}

// Handle workday value change
const handleWorkdayChange = () => {
  if (radioValue.value === 5) {
    workday.value = props.checkNumber(workday.value, 1, 31)
    const workdayValue = `${ workday.value }W`
    emit('update', 'day', workdayValue)
    emit('update:modelValue', workdayValue)
  }
}

// Handle week value change
const handleWeekChange = () => {
  // Check week value conflict with day
  if (props.cron?.week === '?' && radioValue.value === 2) {
    radioValue.value = 1
  }
  else if (props.cron?.week !== '?' && radioValue.value !== 2) {
    radioValue.value = 2
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

  if (expression === 'L') {
    radioValue.value = 6
    return
  }

  if (expression.includes('W')) {
    radioValue.value = 5
    workday.value = parseInt(expression.replace('W', ''))
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
    radioValue.value = 7
    checkboxList.value = expression.split(',').map(Number)
    return
  }

  if (!isNaN(Number(expression))) {
    radioValue.value = 7
    checkboxList.value = [Number(expression)]
  }
}

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    parseCronExpression(newValue)
  }
})

watch(() => props.cron?.week, () => {
  handleWeekChange()
})

watch(radioValue, handleRadioChange)
watch(cycleObj, handleCycleChange)
watch(averageObj, handleAverageChange)
watch(workday, handleWorkdayChange)
watch(checkboxString, (newValue) => {
  if (radioValue.value === 7) {
    emit('update', 'day', newValue)
    emit('update:modelValue', newValue)
  }
})
</script>