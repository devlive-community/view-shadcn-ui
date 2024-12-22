<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center space-x-2">
      <ShadcnInput placeholder="* * * * *"
                   class="text-sm text-gray-500"
                   :model-value="modelValue"
                   @on-change="handleInput"/>
    </div>

    <div class="flex space-x-2">
      <button v-for="tab in tabs"
              :key="tab.value"
              @click="activeTab = tab.value"
              :class="[
                'px-4 py-1 rounded-sm text-xs',
                activeTab === tab.value
                    ? 'bg-blue-500 text-primary-foreground'
                    : 'bg-secondary'
              ]">
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab content -->
    <div>
      <!-- Minutes panel -->
      <div v-if="activeTab === 'minutes'" class="space-y-2">
        <div class="flex space-x-2">
          <ShadcnRadio v-model="minuteType" value="every">
            {{ t('cron.text.everyMinute') }}
          </ShadcnRadio>
          <ShadcnRadio v-model="minuteType" value="interval">
            {{ t('cron.text.intervalMinute') }}
          </ShadcnRadio>
          <div v-if="minuteType === 'interval'" class="flex items-center space-x-2 select-none">
            <ShadcnNumber v-model="minuteInterval"
                          class="w-14"
                          :min="1"
                          :max="59"/>
            <span>{{ t('cron.text.minuteUnit') }}</span>
          </div>
        </div>
      </div>

      <!-- Hours panel -->
      <div v-if="activeTab === 'hours'" class="space-y-2">
        <div class="flex space-x-2">
          <ShadcnRadio v-model="hourType" value="every">
            {{ t('cron.text.everyHour') }}
          </ShadcnRadio>
          <ShadcnRadio v-model="hourType" value="interval">
            {{ t('cron.text.intervalHour') }}
          </ShadcnRadio>
          <div v-if="hourType === 'interval'" class="flex items-center space-x-2 select-none">
            <ShadcnNumber v-model="hourInterval"
                          class="w-14"
                          :min="1"
                          :max="23"/>
            <span>{{ t('cron.text.hourUnit') }}</span>
          </div>
        </div>
      </div>

      <!-- Day panel -->
      <div v-if="activeTab === 'day'" class="space-y-2">
        <div class="flex space-x-2">
          <ShadcnRadio v-model="dayType" value="every">
            {{ t('cron.text.everyDay') }}
          </ShadcnRadio>
          <ShadcnRadio v-model="dayType" value="interval">
            {{ t('cron.text.intervalDay') }}
          </ShadcnRadio>
          <div v-if="dayType === 'interval'" class="flex items-center space-x-2 select-none">
            <ShadcnNumber v-model="dayInterval"
                          class="w-14"
                          :min="1"
                          :max="31"/>
            <span>{{ t('cron.text.dayUnit') }}</span>
          </div>
        </div>
      </div>

      <!-- Month panel -->
      <div v-if="activeTab === 'month'" class="space-y-2">
        <div class="flex space-x-2">
          <ShadcnRadio v-model="monthType" value="every">
            {{ t('cron.text.everyMonth') }}
          </ShadcnRadio>
          <ShadcnRadio v-model="monthType" value="interval">
            {{ t('cron.text.intervalMonth') }}
          </ShadcnRadio>
          <div v-if="monthType === 'interval'" class="flex items-center space-x-2 select-none">
            <ShadcnNumber v-model="monthInterval"
                          class="w-14"
                          :min="1"
                          :max="12"/>
            <span>{{ t('cron.text.monthUnit') }}</span>
          </div>
        </div>
      </div>

      <!-- Week panel -->
      <div v-if="activeTab === 'week'" class="space-y-2">
        <div class="flex space-x-2">
          <ShadcnRadio v-model="weekType" value="every">
            {{ t('cron.text.everyWeek') }}
          </ShadcnRadio>
          <ShadcnRadio v-model="weekType" value="interval">
            {{ t('cron.text.intervalWeek') }}
          </ShadcnRadio>
          <div v-if="weekType === 'interval'" class="flex items-center space-x-2 select-none">
            <ShadcnNumber v-model="weekInterval"
                          class="w-14"
                          :min="1"
                          :max="7"/>
            <span>{{ t('cron.text.weekUnit') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Next execution time -->
    <div v-if="nextExecutionTimes.length" class="text-xs text-gray-500 space-y-1">
      <div>{{ t('cron.text.nextExecutionTime') }}:</div>
      <div v-for="(time, index) in nextExecutionTimes" :key="index">{{ time }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue'
import { t } from '@/utils/locale'
import type { CronEmits, CronProps } from './types'

const props = withDefaults(defineProps<CronProps>(), {
  modelValue: '* * * * *'
})

const emit = defineEmits<CronEmits>()

const activeTab = ref('minutes')
const minuteType = ref('every')
const minuteInterval = ref(1)
const hourType = ref('every')
const hourInterval = ref(1)
const dayType = ref('every')
const dayInterval = ref(1)
const monthType = ref('every')
const monthInterval = ref(1)
const weekType = ref('every')
const weekInterval = ref(1)
const nextExecutionTimes = ref<string[]>([])

const tabs = [
  { label: t('cron.text.minute'), value: 'minutes' },
  { label: t('cron.text.hour'), value: 'hours' },
  { label: t('cron.text.day'), value: 'day' },
  { label: t('cron.text.month'), value: 'month' },
  { label: t('cron.text.week'), value: 'week' }
]

// Calculate next execution time
// 计算下次执行时间
const calculateNextExecutionTime = (cronExpression: string) => {
  try {
    const now = new Date()
    let nextDate = new Date(now)
    nextDate.setSeconds(0)
    const [minute, hour, day, month, week] = cronExpression.split(' ')

    const isAllEvery = [minute, hour, day, month, week].every(x => x === '*')

    // Handle "every" cases based on active tab
    if (isAllEvery) {
      switch (activeTab.value) {
        case 'minutes':
          nextDate.setMinutes(nextDate.getMinutes() + 1)
          break
        case 'hours':
          nextDate.setHours(nextDate.getHours() + 1)
          nextDate.setMinutes(0)
          break
        case 'day':
          nextDate.setDate(nextDate.getDate() + 1)
          nextDate.setHours(0)
          nextDate.setMinutes(0)
          break
        case 'month':
          nextDate.setMonth(nextDate.getMonth() + 1)
          nextDate.setDate(1)
          nextDate.setHours(0)
          nextDate.setMinutes(0)
          break
        case 'week':
          const daysUntilNextWeek = 7 - nextDate.getDay()
          nextDate.setDate(nextDate.getDate() + daysUntilNextWeek)
          nextDate.setHours(0)
          nextDate.setMinutes(0)
          break
      }
    }
    else {
      // Handle minutes
      if (minute !== '*') {
        const intervalMinutes = parseInt(minute.split('/')[1] || minute)
        const currentMinute = now.getMinutes()
        const nextMinute = Math.ceil(currentMinute / intervalMinutes) * intervalMinutes
        if (nextMinute > 59) {
          nextDate.setHours(nextDate.getHours() + 1)
          nextDate.setMinutes(intervalMinutes)
        }
        else {
          nextDate.setMinutes(nextMinute)
        }
      }

      // Handle hours
      if (hour !== '*') {
        const intervalHours = parseInt(hour.split('/')[1] || hour)
        const currentHour = now.getHours()
        const nextHour = Math.ceil(currentHour / intervalHours) * intervalHours

        if (nextHour > 23) {
          nextDate.setDate(nextDate.getDate() + 1)
          nextDate.setHours(intervalHours)
        }
        else {
          nextDate.setHours(nextHour)
        }

        // If minute is not '*', we need to consider it
        if (minute === '*') {
          nextDate.setMinutes(0)
        }
        else {
          // Reset minutes to first occurrence if current time is past
          const intervalMinutes = parseInt(minute.split('/')[1] || minute)
          if (nextDate.getTime() <= now.getTime()) {
            nextDate.setMinutes(intervalMinutes)
          }
        }
      }

      // Handle days
      if (day !== '*') {
        const intervalDays = parseInt(day.split('/')[1] || day)
        const currentDay = now.getDate()
        const nextDay = Math.ceil(currentDay / intervalDays) * intervalDays
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()

        if (nextDay > daysInMonth) {
          nextDate.setMonth(nextDate.getMonth() + 1)
          nextDate.setDate(intervalDays)
        }
        else {
          nextDate.setDate(nextDay)
        }

        // Consider hour and minute if they're not '*'
        if (hour === '*') {
          nextDate.setHours(0)
        }
        else {
          const intervalHours = parseInt(hour.split('/')[1] || hour)
          nextDate.setHours(intervalHours)
        }

        if (minute === '*') {
          nextDate.setMinutes(0)
        }
        else {
          const intervalMinutes = parseInt(minute.split('/')[1] || minute)
          nextDate.setMinutes(intervalMinutes)
        }
      }

      // Handle months
      if (month !== '*') {
        const intervalMonths = parseInt(month.split('/')[1] || month)
        const currentMonth = now.getMonth() + 1
        const nextMonth = Math.ceil(currentMonth / intervalMonths) * intervalMonths

        if (nextMonth > 12) {
          nextDate.setFullYear(nextDate.getFullYear() + 1)
          nextDate.setMonth(intervalMonths - 1)
        }
        else {
          nextDate.setMonth(nextMonth - 1)
        }

        // Consider day, hour, and minute if they're not '*'
        if (day === '*') {
          nextDate.setDate(1)
        }
        else {
          const intervalDays = parseInt(day.split('/')[1] || day)
          nextDate.setDate(intervalDays)
        }

        if (hour === '*') {
          nextDate.setHours(0)
        }
        else {
          const intervalHours = parseInt(hour.split('/')[1] || hour)
          nextDate.setHours(intervalHours)
        }

        if (minute === '*') {
          nextDate.setMinutes(0)
        }
        else {
          const intervalMinutes = parseInt(minute.split('/')[1] || minute)
          nextDate.setMinutes(intervalMinutes)
        }
      }

      // Handle weeks
      if (week !== '*') {
        const intervalWeeks = parseInt(week.split('/')[1] || week)
        const currentDay = now.getDay()
        const nextWeekDay = Math.ceil(currentDay / intervalWeeks) * intervalWeeks

        if (nextWeekDay > 6) {
          const daysUntilNextWeek = 7 - currentDay
          nextDate.setDate(nextDate.getDate() + daysUntilNextWeek + intervalWeeks)
        }
        else {
          nextDate.setDate(nextDate.getDate() + (nextWeekDay - currentDay))
        }

        // Consider hour and minute if they're not '*'
        if (hour === '*') {
          nextDate.setHours(0)
        }
        else {
          const intervalHours = parseInt(hour.split('/')[1] || hour)
          nextDate.setHours(intervalHours)
        }

        if (minute === '*') {
          nextDate.setMinutes(0)
        }
        else {
          const intervalMinutes = parseInt(minute.split('/')[1] || minute)
          nextDate.setMinutes(intervalMinutes)
        }
      }

      // Ensure the date is in the future
      if (nextDate <= now) {
        if (minute !== '*') {
          const intervalMinutes = parseInt(minute.split('/')[1] || minute)
          nextDate.setMinutes(nextDate.getMinutes() + intervalMinutes)
        }
        else if (hour !== '*') {
          const intervalHours = parseInt(hour.split('/')[1] || hour)
          nextDate.setHours(nextDate.getHours() + intervalHours)
        }
        else if (day !== '*') {
          const intervalDays = parseInt(day.split('/')[1] || day)
          nextDate.setDate(nextDate.getDate() + intervalDays)
        }
        else if (month !== '*') {
          const intervalMonths = parseInt(month.split('/')[1] || month)
          nextDate.setMonth(nextDate.getMonth() + intervalMonths)
        }
        else if (week !== '*') {
          const intervalWeeks = parseInt(week.split('/')[1] || week)
          nextDate.setDate(nextDate.getDate() + 7 * intervalWeeks)
        }
      }
    }

    // Get next 5 execution times
    const executionTimes: Date[] = []
    let currentDate = new Date(nextDate)

    for (let i = 0; i < 5; i++) {
      executionTimes.push(new Date(currentDate))

      if (isAllEvery) {
        // Handle "every" cases for subsequent times
        switch (activeTab.value) {
          case 'minutes':
            currentDate = new Date(currentDate.getTime() + 60 * 1000)
            break
          case 'hours':
            currentDate = new Date(currentDate.getTime() + 60 * 60 * 1000)
            break
          case 'day':
            currentDate.setDate(currentDate.getDate() + 1)
            break
          case 'month':
            currentDate.setMonth(currentDate.getMonth() + 1)
            break
          case 'week':
            currentDate.setDate(currentDate.getDate() + 7)
            break
        }
      }
      else {
        let timeAdded = false

        // Add intervals based on the smallest unit that's not '*'
        if (minute !== '*') {
          const intervalMinutes = parseInt(minute.split('/')[1] || minute)
          currentDate = new Date(currentDate.getTime() + intervalMinutes * 60 * 1000)
          timeAdded = true
        }

        if (hour !== '*' && !timeAdded) {
          const intervalHours = parseInt(hour.split('/')[1] || hour)
          currentDate = new Date(currentDate.getTime() + intervalHours * 60 * 60 * 1000)
          timeAdded = true
        }

        if (day !== '*' && !timeAdded) {
          const intervalDays = parseInt(day.split('/')[1] || day)
          currentDate.setDate(currentDate.getDate() + intervalDays)
          timeAdded = true
        }

        if (month !== '*' && !timeAdded) {
          const intervalMonths = parseInt(month.split('/')[1] || month)
          currentDate.setMonth(currentDate.getMonth() + intervalMonths)
          timeAdded = true
        }

        if (week !== '*' && !timeAdded) {
          const intervalWeeks = parseInt(week.split('/')[1] || week)
          currentDate.setDate(currentDate.getDate() + 7 * intervalWeeks)
          timeAdded = true
        }

        if (!timeAdded) {
          currentDate = new Date(currentDate.getTime() + 60 * 1000)
        }
      }
    }

    // Format the execution times
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }

    nextExecutionTimes.value = executionTimes.map(date =>
        date.toLocaleString(undefined, options)
    )
  }
  catch (error) {
    console.warn('Error calculating next execution time:', error)
    nextExecutionTimes.value = []
  }
}

// Update cron expression based on selections
// 根据选择更新 cron 表达式
const updateCronExpression = () => {
  let cronParts = ['*', '*', '*', '*', '*']

  try {
    // Update minutes
    if (minuteType.value === 'interval' && minuteInterval.value > 0) {
      cronParts[0] = `*/${ minuteInterval.value }`
    }

    // Update hours
    if (hourType.value === 'interval' && hourInterval.value > 0) {
      cronParts[1] = `*/${ hourInterval.value }`
    }

    // Update days
    if (dayType.value === 'interval' && dayInterval.value > 0) {
      cronParts[2] = `*/${ dayInterval.value }`
    }

    // Update months
    if (monthType.value === 'interval' && monthInterval.value > 0) {
      cronParts[3] = `*/${ monthInterval.value }`
    }

    // Update weeks
    if (weekType.value === 'interval' && weekInterval.value > 0) {
      cronParts[4] = `*/${ weekInterval.value }`
    }

    const newCron = cronParts.join(' ')
    calculateNextExecutionTime(newCron)
    emit('update:modelValue', newCron)
    emit('on-change', newCron)
  }
  catch (error) {
    console.warn('Error updating cron expression:', error)
  }
}

// Handle input changes
// 处理输入变化
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
  emit('on-change', value)

  // Calculate next execution time after input change
  // 输入变化后计算下次执行时间
  calculateNextExecutionTime(value)
}

// Watch for changes in all interval selections
// 监听所有间隔选择的变化
watchEffect(() => {
  // 确保所有依赖项都被正确追踪
  const values = {
    minuteType: minuteType.value,
    minuteInterval: minuteInterval.value,
    hourType: hourType.value,
    hourInterval: hourInterval.value,
    dayType: dayType.value,
    dayInterval: dayInterval.value,
    monthType: monthType.value,
    monthInterval: monthInterval.value,
    weekType: weekType.value,
    weekInterval: weekInterval.value
  }
  console.debug(values)

  updateCronExpression()
  calculateNextExecutionTime(props.modelValue)
})

// Watch for model value changes
// 监听模型值变化
watch(() => props.modelValue, (newValue) => {
  if (newValue && newValue.trim()) {
    // Validate cron expression
    // 验证 cron 表达式
    const isValid = /^(\*|[0-9,-/]+)\s+(\*|[0-9,-/]+)\s+(\*|[0-9,-/]+)\s+(\*|[0-9,-/]+)\s+(\*|[0-9,-/]+)$/.test(newValue.trim())
    if (!isValid) {
      console.warn('Invalid cron expression')
    }
    else {
      calculateNextExecutionTime(newValue)
    }
  }
})

watch(() => activeTab.value, () => {
  calculateNextExecutionTime(props.modelValue)
})

onMounted(() => {
  calculateNextExecutionTime(props.modelValue)
})
</script>