<template>
  <div class="mt-4 space-y-4">
    <!-- Every Second -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="type" value="every" name="second-type">
        {{ t('cron.text.everySecond') }}
      </ShadcnRadio>
    </div>

    <!-- Period -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="type" value="period" name="second-type">
        {{ t('cron.text.periodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="periodStart"
                      class="w-16"
                      :min="0"
                      :max="59"/>
        <span>-</span>
        <ShadcnNumber v-model="periodEnd"
                      class="w-16"
                      :min="0"
                      :max="59"/>
        <span class="text-sm">{{ t('cron.text.second') }}</span>
      </div>
    </div>

    <!-- Interval -->
    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="type" value="start" name="second-type">
        {{ t('cron.text.fromStart') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="start"
                      class="w-16"
                      :min="0"
                      :max="59"/>
        <span class="text-sm">{{ t('cron.text.secondStart') }}，</span>
        <span class="text-sm">{{ t('cron.text.every') }}</span>
        <ShadcnNumber v-model="interval"
                      class="w-16"
                      :min="1"
                      :max="59"/>
        <span class="text-sm">{{ t('cron.text.secondExecute') }}</span>
      </div>
    </div>

    <!-- Specify -->
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="type" value="specify" name="second-type">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="specify"
                    multiple
                    :options="secondOptions"
                    :placeholder="t('cron.placeholder.multiple')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'

interface Props
{
  modelValue: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const type = ref('every')
const periodStart = ref(0)
const periodEnd = ref(1)
const start = ref(0)
const interval = ref(1)
const specify = ref<number[]>([])

// Create options for seconds (0-59)
const secondOptions = Array.from({ length: 60 }, (_, i) => ({
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

      emit('update:modelValue', expression)
    },
    { immediate: true }
)
</script>