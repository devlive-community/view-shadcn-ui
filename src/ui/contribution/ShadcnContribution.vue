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
             :class="[
               'w-3 h-3 rounded-sm cursor-pointer relative transition-all duration-200',
               'hover:scale-125 hover:z-10'
             ]"
             :style="{ backgroundColor: getColor(item.count) }"
             @mouseenter="showTooltip($event, item)"
             @mouseleave="hideTooltip"
             @click="onSelect(item)">
          <div v-if="activeTooltip?.date === item.date"
               class="absolute z-50 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap"
               style="bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 4px;">
            <div class="flex flex-col">
              <span>{{ formatDate(item.date) }}</span>
              <span>{{ item.count }} contributions</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showLegend" class="flex items-center gap-2 mt-2 text-xs text-gray-500 justify-end">
        <span>Less</span>
        <div class="flex gap-1 relative"
             @mouseenter="showLegendTooltip"
             @mouseleave="hideLegendTooltip">
          <div v-for="(color, index) in props.colorScheme"
               :key="index"
               :style="{ backgroundColor: color }"
               class="w-3 h-3 rounded-sm cursor-help">
          </div>

          <div v-if="showLegendDetail"
               class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-gray-800 rounded text-white whitespace-nowrap z-50 transition-all duration-200">
            <div class="flex flex-col gap-1.5">
              <div v-for="(range, index) in contributionRanges"
                   :key="index"
                   class="flex items-center gap-1">
                <div :style="{ backgroundColor: props.colorScheme[index] }"
                     class="w-2 h-2 rounded-sm">
                </div>
                <span>{{ range }}</span>
              </div>
            </div>
          </div>
        </div>
        <span>More</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { t } from '@/utils/locale'
import { type ContributionEmits, ContributionOption, type ContributionProps } from './types'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<ContributionProps>(), {
  colorScheme: () => ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  yearCount: 1,
  showLegend: true
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

const activeTooltip = ref<ContributionOption | null>(null)

const showTooltip = (_event: MouseEvent, item: ContributionOption) => {
  activeTooltip.value = item
}

const hideTooltip = () => {
  activeTooltip.value = null
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const showLegendDetail = ref(false)

const showLegendTooltip = () => {
  showLegendDetail.value = true
}

const hideLegendTooltip = () => {
  showLegendDetail.value = false
}

const contributionRanges = computed(() => [
  'No contributions',
  '1-3 contributions',
  '4-6 contributions',
  '7-9 contributions',
  '10+ contributions'
])
</script>