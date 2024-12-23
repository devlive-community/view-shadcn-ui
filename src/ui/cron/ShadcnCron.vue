<template>
  <div class="flex flex-col gap-2 relative">
    <div ref="inputRef" class="flex items-center space-x-2">
      <ShadcnInput v-model="localModelValue"
                   placeholder="* * * * *"
                   readonly
                   class="text-sm text-gray-500"
                   @click="isOpen = !isOpen"/>
    </div>

    <div v-if="isOpen"
         ref="panelRef"
         class="absolute top-full mt-1 bg-white rounded-sm shadow-lg border w-[530px] border-gray-200 p-2 z-20">
      <div class="flex space-x-2">
        <ShadcnTab v-model="activeTab" size="small">
          <ShadcnTabItem v-for="tab in tabs" :label="tab.label" :value="tab.value">
            <ShadcnSecondPanel v-if="tab.value === 'seconds'" v-model="secondExpression"/>
            <ShadcnMinutePanel v-if="tab.value === 'minutes'" v-model="minuteExpression"/>
            <ShadcnHourPanel v-if="tab.value === 'hours'" v-model="hourExpression"/>
          </ShadcnTabItem>
        </ShadcnTab>
      </div>

      <div v-if="nextExecutionTimes.length" class="text-xs text-gray-500 space-y-1 mt-4">
        <div>{{ t('cron.text.nextExecutionTime') }}:</div>
        <div v-for="(time, index) in nextExecutionTimes" :key="index">
          {{ t('cron.text.nextExecutionTimeAtOnN', { n: index + 1, time }) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import parser from 'cron-parser'
import type { CronEmits, CronProps } from './types'
import ShadcnSecondPanel from './components/ShadcnSecondPanel.vue'
import ShadcnMinutePanel from '@/ui/cron/components/ShadcnMinutePanel.vue'
import ShadcnHourPanel from '@/ui/cron/components/ShadcnHourPanel.vue'
import { getRecentTriggerTime } from '@/utils/cron.ts'

const props = withDefaults(defineProps<CronProps>(), {})

const emit = defineEmits<CronEmits>()

const localModelValue = ref(props.modelValue)
const nextExecutionTimes = ref<string[]>([])
const isOpen = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)
const activeTab = ref('seconds')
const secondExpression = ref('*')
const minuteExpression = ref('*')
const hourExpression = ref('*')

const tabs = [
  { label: t('cron.text.second'), value: 'seconds' },
  { label: t('cron.text.minute'), value: 'minutes' },
  { label: t('cron.text.hour'), value: 'hours' },
  { label: t('cron.text.day'), value: 'day' },
  { label: t('cron.text.month'), value: 'month' },
  { label: t('cron.text.week'), value: 'week' },
  { label: t('cron.text.year'), value: 'year' }
]

// Calculate next execution time
// 计算下次执行时间
const calculateNextExecutionTime = (cronExpression: string) => {
  nextExecutionTimes.value = []
  nextExecutionTimes.value = getNextExecutionTimes(cronExpression, 5)
}

function getNextExecutionTimes(cronExpression: string, count: number = 5): string[]
{
  try {
    return getRecentTriggerTime(cronExpression, count)
  }
  catch (err) {
    console.error('Invalid cron expression:', err)
    return []
  }
}

watch(localModelValue, (newValue) => {
  try {
    parser.parseExpression(newValue)
    calculateNextExecutionTime(newValue)
  }
  catch (err) {
    console.error('Invalid cron expression:', err)
    nextExecutionTimes.value = []
  }
  finally {
    emit('on-change', newValue)
    emit('update:modelValue', newValue)
  }
})

onMounted(() => {
  calculateNextExecutionTime(props.modelValue)
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

watch(secondExpression, (newValue) => {
  localModelValue.value = `${ newValue } * * * * *`
})

watch(minuteExpression, (newValue) => {
  localModelValue.value = `* ${ newValue } * * * *`
})

watch(hourExpression, (newValue) => {
  localModelValue.value = `* * ${ newValue } * * *`
})
</script>