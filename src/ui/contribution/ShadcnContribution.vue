<template>
  <div class="flex">
    <div class="flex flex-col mt-6 justify-between mr-2 text-xs text-gray-500 text-center h-[94px] select-none">
      <span>{{ t('datePicker.text.sunday') }}</span>
      <span>{{ t('datePicker.text.monday') }}</span>
      <span>{{ t('datePicker.text.tuesday') }}</span>
      <span>{{ t('datePicker.text.wednesday') }}</span>
      <span>{{ t('datePicker.text.thursday') }}</span>
      <span>{{ t('datePicker.text.friday') }}</span>
      <span>{{ t('datePicker.text.saturday') }}</span>
    </div>

    <div>
      <div class="relative h-4 mb-2.5 select-none">
        <div v-for="(month, index) in monthLabels"
             :key="index"
             class="absolute text-xs text-gray-500"
             :style="{ left: calcSize(month.offset) }">
          {{ month.label }}
        </div>
      </div>
      <div class="grid grid-rows-7 grid-flow-col gap-1">
        <div v-for="(item, index) in contributionData"
             :key="index"
             :class="['w-3 h-3 rounded-sm cursor-pointer']"
             :style="{ backgroundColor: getColor(item.count) }"
             @click="onSelect(item)"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { t } from '@/utils/locale'
import { type ContributionEmits, ContributionOption, type ContributionProps } from './types'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<ContributionProps>(), {
  colorScheme: () => ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  yearCount: 1
})

const emit = defineEmits<ContributionEmits>()

// Get last N years of dates
// 获取过去N年的日期
const contributionData = computed(() => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setFullYear(endDate.getFullYear() - props.yearCount)

  const dates = [] as any[]
  const currentDate = new Date(startDate)

  // Adjust start date to previous Sunday
  // 调整开始日期到上一个周日
  const day = currentDate.getDay()
  currentDate.setDate(currentDate.getDate() - day)

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0]
    const existingData = props.data.find(d => d.date === dateStr)

    dates.push({
      date: dateStr,
      count: existingData ? existingData.count : 0
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
})

const monthLabels = computed(() => {
  const monthNames = [
    t('datePicker.text.january'),
    t('datePicker.text.february'),
    t('datePicker.text.march'),
    t('datePicker.text.april'),
    t('datePicker.text.may'),
    t('datePicker.text.june'),
    t('datePicker.text.july'),
    t('datePicker.text.august'),
    t('datePicker.text.september'),
    t('datePicker.text.october'),
    t('datePicker.text.november'),
    t('datePicker.text.december')
  ]
  const labels = [] as any[]
  let currentMonth = -1
  let weekCounter = 0

  contributionData.value.forEach((item: { date: string; count: number }, index) => {
    if (index % 7 === 0) {
      const date = new Date(item.date)
      const month = date.getMonth()

      if (month !== currentMonth) {
        labels.push({
          label: monthNames[month],
          offset: calcSize(weekCounter * (12 + 4))
        })
        currentMonth = month
      }
      weekCounter++
    }
  })

  return labels
})

// Get color based on contribution count
// 根据贡献数量获取颜色
const getColor = (count: number) => {
  if (count === 0) {
    return props.colorScheme[0]
  }
  if (count <= 3) {
    return props.colorScheme[1]
  }
  if (count <= 6) {
    return props.colorScheme[2]
  }
  if (count <= 9) {
    return props.colorScheme[3]
  }
  return props.colorScheme[4]
}

const onSelect = (item: ContributionOption) => {
  emit('on-select', item)
}
</script>