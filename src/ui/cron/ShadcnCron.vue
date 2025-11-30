<template>
  <div class="flex flex-col gap-2 relative">
    <div ref="inputRef" class="flex items-center space-x-2">
      <ShadcnInput v-model="localModelValue"
                   readonly
                   :class="['text-sm', dark ? 'text-gray-400' : 'text-gray-500']"
                   :dark="dark"
                   @click="isOpen = !isOpen"/>
    </div>

    <div v-if="isOpen"
         ref="panelRef"
         :class="['absolute top-full mt-1 rounded-sm shadow-lg border w-[530px] p-2 z-20',
                  dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
         ]">
      <div class="flex space-x-2">
        <ShadcnTab v-model="activeTab" :dark="dark" size="small">
          <ShadcnTabItem v-for="tab in tabs"
                         :dark="dark"
                         :label="tab.label"
                         :value="tab.value">
            <ShadcnSecondPanel v-if="tab.value === 'seconds'"
                               v-model="secondExpression"
                               :dark="dark"
                               @update="handleUpdate"/>
            <ShadcnMinutePanel v-if="tab.value === 'minutes'"
                               v-model="minuteExpression"
                               :cron="cronObject"
                               :dark="dark"
                               @update="handleUpdate"/>
            <ShadcnHourPanel v-if="tab.value === 'hours'"
                             v-model="hourExpression"
                             :cron="cronObject"
                             :dark="dark"
                             @update="handleUpdate"/>
            <ShadcnDayPanel v-if="tab.value === 'day'"
                            v-model="dayExpression"
                            :cron="cronObject"
                            :dark="dark"
                            @update="handleUpdate"/>
            <ShadcnMonthPanel v-if="tab.value === 'month'"
                              v-model="monthExpression"
                              :cron="cronObject"
                              :dark="dark"
                              @update="handleUpdate"/>
            <ShadcnWeekPanel v-if="tab.value === 'week'"
                             v-model="weekExpression"
                             :cron="cronObject"
                             :dark="dark"
                             @update="handleUpdate"/>
            <ShadcnYearPanel v-if="tab.value === 'year'"
                             v-model="yearExpression as any"
                             :cron="cronObject"
                             :dark="dark"
                             @update="handleUpdate"/>
          </ShadcnTabItem>
        </ShadcnTab>
      </div>

      <div v-if="nextExecutionTimes.length"
           :class="['space-y-1 mt-4 border-t rounded-sm p-2',
                   dark ? 'text-gray-400 border-gray-700' : 'text-gray-500'
           ]">
        <div class="items-center">{{ t('cron.text.nextExecutionTime') }}:</div>
        <div v-for="(time, index) in nextExecutionTimes" :key="index" class="text-xs">
          {{ t('cron.text.nextExecutionTimeAtOnN', { n: index + 1, time }) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import type { CronEmits, CronProps } from './types'
import ShadcnSecondPanel from './components/ShadcnSecondPanel.vue'
import ShadcnMinutePanel from './components/ShadcnMinutePanel.vue'
import ShadcnHourPanel from './components/ShadcnHourPanel.vue'
import ShadcnDayPanel from './components/ShadcnDayPanel.vue'
import ShadcnMonthPanel from './components/ShadcnMonthPanel.vue'
import ShadcnWeekPanel from './components/ShadcnWeekPanel.vue'
import ShadcnYearPanel from '@/ui/cron/components/ShadcnYearPanel.vue'
import { getRecentTriggerTime } from '@/utils/cron.ts'
import { ShadcnInput } from "@/ui/input";
import { ShadcnTab, ShadcnTabItem } from "@/ui/tab";

const props = withDefaults(defineProps<CronProps>(), {
  modelValue: '* * * * * ?',
  dark: false
})
const emit = defineEmits<CronEmits>()

const localModelValue = ref(props.modelValue)
const nextExecutionTimes = ref<string[]>([])
const isOpen = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)
const activeTab = ref('seconds')

const expressions = computed(() => {
  const parts = (localModelValue.value || '* * * * * ?').trim().split(' ')
  return {
    second: parts[0] || '*',
    minute: parts[1] || '*',
    hour: parts[2] || '*',
    day: parts[3] || '*',
    month: parts[4] || '*',
    week: parts[5] || '?',
    year: parts[6] || undefined
  }
})

const cronObject = computed(() => ({
  second: secondExpression.value,
  minute: minuteExpression.value,
  hour: hourExpression.value,
  day: dayExpression.value,
  month: monthExpression.value,
  week: weekExpression.value,
  year: yearExpression.value
}))

const secondExpression = ref(expressions.value.second)
const minuteExpression = ref(expressions.value.minute)
const hourExpression = ref(expressions.value.hour)
const dayExpression = ref(expressions.value.day)
const monthExpression = ref(expressions.value.month)
const weekExpression = ref(expressions.value.week)
const yearExpression = ref(expressions.value.year)

const tabs = [
  { label: t('cron.text.second'), value: 'seconds' },
  { label: t('cron.text.minute'), value: 'minutes' },
  { label: t('cron.text.hour'), value: 'hours' },
  { label: t('cron.text.day'), value: 'day' },
  { label: t('cron.text.month'), value: 'month' },
  { label: t('cron.text.week'), value: 'week' },
  { label: t('cron.text.year'), value: 'year' }
]

const handleUpdate = (type: string, value: string) => {
  switch (type) {
    case 'second':
      secondExpression.value = value
      break
    case 'minute':
      minuteExpression.value = value
      break
    case 'hour':
      hourExpression.value = value
      break
    case 'day':
      dayExpression.value = value
      if (value !== '?' && weekExpression.value !== '?') {
        weekExpression.value = '?'
      }
      break
    case 'month':
      monthExpression.value = value
      break
    case 'week':
      weekExpression.value = value
      if (value !== '?' && dayExpression.value !== '?') {
        dayExpression.value = '?'
      }
      break
    case 'year':
      yearExpression.value = value
      break
  }
}

const calculateNextExecutionTime = (cronExpression?: string) => {
  if (cronExpression) {
    nextExecutionTimes.value = getNextExecutionTimes(cronExpression, 5)
  }
  else {
    nextExecutionTimes.value = []
  }
}

function getNextExecutionTimes(cronExpression: string, count: number = 5): string[]
{
  try {
    return getRecentTriggerTime(cronExpression, count)
  }
  catch (err) {
    console.error(err)
    return []
  }
}

onMounted(() => {
  const initialValue = localModelValue.value || '* * * * * ?'
  calculateNextExecutionTime(initialValue)
})

const handleClickOutside = (event: Event) => {
  if (
      inputRef.value &&
      panelRef.value &&
      !inputRef.value.contains(event.target as Node) &&
      !panelRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

watch([secondExpression, minuteExpression, hourExpression, dayExpression, monthExpression, weekExpression, yearExpression], () => {
  const parts = [
    secondExpression.value || '*',
    minuteExpression.value || '*',
    hourExpression.value || '*',
    dayExpression.value || '*',
    monthExpression.value || '*',
    weekExpression.value || '?'
  ]

  if (yearExpression.value !== undefined) {
    parts.push(yearExpression.value)
  }

  const newValue = parts.join(' ')
  localModelValue.value = newValue
  calculateNextExecutionTime(newValue)
  emit('on-change', newValue)
  emit('update:modelValue', newValue)
})

watch(activeTab, () => {
  const currentValue = localModelValue.value || '* * * * * ?'
  calculateNextExecutionTime(currentValue)
})

watch(localModelValue, (newValue) => {
  try {
    const parts = (newValue || '* * * * * ?').trim().split(' ')
    if (parts.length >= 6) {
      secondExpression.value = parts[0] || '*'
      minuteExpression.value = parts[1] || '*'
      hourExpression.value = parts[2] || '*'
      dayExpression.value = parts[3] || '*'
      monthExpression.value = parts[4] || '*'
      weekExpression.value = parts[5] || '?'
      yearExpression.value = parts.length > 6 ? parts[6] : undefined
      calculateNextExecutionTime(newValue)
    }
    else {
      throw new Error('Invalid cron expression')
    }
  }
  catch (err) {
    nextExecutionTimes.value = []
  }
})
</script>