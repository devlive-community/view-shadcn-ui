<template>
  <div class="mt-4 space-y-4">
    <!-- Every Minute -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="type" :dark="dark" name="minute-type" value="every">
        {{ t('cron.text.everyMinute') }}
      </ShadcnRadio>
    </div>

    <!-- Period -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="type" :dark="dark" name="minute-type" value="period">
        {{ t('cron.text.periodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="periodStart"
                      class="w-16"
                      :min="0"
                      :dark="dark"
                      :max="59"/>
        <span :class="dark ? 'text-gray-200' : ''">-</span>
        <ShadcnNumber v-model="periodEnd"
                      class="w-16"
                      :min="0"
                      :dark="dark"
                      :max="59"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.minute') }}</span>
      </div>
    </div>

    <!-- Interval -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="type" :dark="dark" name="minute-type" value="start">
        {{ t('cron.text.fromStart') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="start"
                      class="w-16"
                      :min="0"
                      :dark="dark"
                      :max="59"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.minuteStart') }}，</span>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.every') }}</span>
        <ShadcnNumber v-model="interval"
                      class="w-16"
                      :min="1"
                      :dark="dark"
                      :max="59"/>
        <span :class="['text-sm', dark ? 'text-gray-200' : '']">{{ t('cron.text.minuteExecute') }}</span>
      </div>
    </div>

    <!-- Specify -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="type" :dark="dark" name="minute-type" value="specify">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="specify"
                    multiple
                    :options="minuteOptions"
                    :dark="dark"
                    :placeholder="t('cron.placeholder.multiple')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'

interface Props
{
  modelValue: string,
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
  cron: () => ({})
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update', type: string, value: string, from?: string): void
}>()

const type = ref('every')
const periodStart = ref(0)
const periodEnd = ref(1)
const start = ref(0)
const interval = ref(1)
const specify = ref<number[]>([])

const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
  label: i.toString(),
  value: i
}))

const checkNumber = (num: number, min: number, max: number): number => {
  if (num < min) {
    return min
  }
  if (num > max) {
    return max
  }
  return num
}

const parseCronExpression = (expression: string) => {
  if (!expression || expression === '*') {
    type.value = 'every'
    return
  }

  if (expression.includes('-')) {
    type.value = 'period'
    const [start, end] = expression.split('-').map(Number)
    periodStart.value = start
    periodEnd.value = end
    return
  }

  if (expression.includes('/')) {
    type.value = 'start'
    const [startValue, intervalValue] = expression.split('/').map(Number)
    start.value = startValue
    interval.value = intervalValue
    return
  }

  if (expression.includes(',')) {
    type.value = 'specify'
    specify.value = expression.split(',').map(Number)
    return
  }

  if (!isNaN(Number(expression))) {
    type.value = 'specify'
    specify.value = [Number(expression)]
  }
}

const updateExpression = (expression: string) => {
  // 如果不是选择"每分钟"，并且秒是 *，则将秒设为 0
  if (type.value !== 'every' && props.cron?.second === '*') {
    emit('update', 'second', '0', 'min')
  }

  // 如果选择"每分钟"，则更新小时为 *
  if (type.value === 'every') {
    emit('update', 'min', '*', 'min')
    emit('update', 'hour', '*', 'min')
  }
  else {
    emit('update', 'min', expression, 'min')
  }

  // 更新 modelValue
  emit('update:modelValue', expression)
}

watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        parseCronExpression(newValue)
      }
    },
    { immediate: true }
)

watch(
    [type, periodStart, periodEnd, start, interval, specify],
    () => {
      let expression = ''
      switch (type.value) {
        case 'every':
          expression = '*'
          break
        case 'period':
          periodStart.value = checkNumber(periodStart.value, 0, 59)
          periodEnd.value = checkNumber(periodEnd.value, 0, 59)
          expression = `${ periodStart.value }-${ periodEnd.value }`
          break
        case 'start':
          start.value = checkNumber(start.value, 0, 59)
          interval.value = checkNumber(interval.value, 1, 59)
          expression = `${ start.value }/${ interval.value }`
          break
        case 'specify':
          expression = specify.value.join(',') || '*'
          break
      }

      updateExpression(expression)
    },
    { immediate: true }
)
</script>