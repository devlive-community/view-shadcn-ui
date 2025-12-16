<template>
  <div class="flex">
    <div v-if="showWeek"
         :class="['flex flex-col mt-6 justify-between mr-2 text-xs text-center h-[94px] select-none',
                  dark ? 'text-gray-400' : 'text-gray-500'
         ]"
         :style="{
             height: `${7 * cellSize + 6 * cellGap}px`,
             marginTop: `${MONTH_LABEL_HEIGHT}px`
           }">
      <span>{{ t('datePicker.text.sunday') }}</span>
      <span>{{ t('datePicker.text.monday') }}</span>
      <span>{{ t('datePicker.text.tuesday') }}</span>
      <span>{{ t('datePicker.text.wednesday') }}</span>
      <span>{{ t('datePicker.text.thursday') }}</span>
      <span>{{ t('datePicker.text.friday') }}</span>
      <span>{{ t('datePicker.text.saturday') }}</span>
    </div>

    <div>
      <div v-if="showMonth"
           class="relative select-none"
           :style="{ height: `${MONTH_LABEL_HEIGHT}px` }">
        <div v-for="(month, index) in monthLabels"
             :key="index"
             :class="['absolute text-xs',
                      dark ? 'text-gray-400' : 'text-gray-500'
             ]"
             :style="{ left: `${month.offset}px` }">
          {{ month.label }}
        </div>
      </div>

      <div class="grid grid-flow-col gap-1">
        <template v-for="(col, _colIndex) in contributionCols" :key="_colIndex">
          <div class="grid grid-rows-7 gap-1">
            <div v-for="(item, rowIndex) in col"
                 :key="rowIndex"
                 :class="['relative cursor-pointer transition-all duration-200',
                       'hover:scale-125 hover:z-10']"
                 :style="{
                     width: `${cellSize}px`,
                     height: `${cellSize}px`
                   }"
                 @mouseenter="showTooltip($event, item as any)"
                 @mouseleave="hideTooltip"
                 @click="onSelect(item as any)">
              <template v-if="item">
                <slot name="cell"
                      :item="item as any"
                      :color="getColor((item as any).count)">
                  <div class="w-full h-full rounded-sm"
                       :style="{ backgroundColor: getColor((item as any).count) }"/>
                </slot>

                <div v-if="activeTooltip?.date === (item as any).date"
                     :class="['absolute z-20 p-2 text-xs rounded whitespace-nowrap transition-all duration-200',
                              glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                              glass ? 'border border-white/20' : '',
                              glass ? (dark ? 'bg-white/10 text-gray-200' : 'bg-white/60 text-gray-900') : (dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'),
                              glass ? 'shadow-lg shadow-black/5' : ''
                     ]"
                     style="bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 4px;">
                  <div class="flex flex-col space-y-1">
                    <div>{{ formatDate((item as any).date) }}</div>
                    <div>{{ (item as any).count }} {{ t('contribution.text.contribution') }}</div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="w-full h-full rounded-sm"/>
              </template>
            </div>
          </div>
        </template>
      </div>

      <div v-if="showLegend"
           :class="['flex items-center gap-2 mt-2 text-xs justify-end',
                    dark ? 'text-gray-400' : 'text-gray-500'
           ]">
        <span>{{ t('contribution.text.less') }}</span>
        <div class="flex gap-1 relative group"
             @mouseenter="showLegendTooltip"
             @mouseleave="hideLegendTooltip">
          <div v-for="(color, index) in colorScheme"
               :key="index"
               :style="{
                 backgroundColor: color,
                 width: `${cellSize}px`,
                 height: `${cellSize}px`
               }"
               class="rounded-sm cursor-help">
          </div>

          <div :class="['absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 rounded whitespace-nowrap z-50 transition-opacity duration-200',
                        glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                        glass ? 'border border-white/20' : '',
                        glass ? (dark ? 'bg-white/10 text-gray-200' : 'bg-white/60 text-gray-900') : (dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'),
                        glass ? 'shadow-lg shadow-black/5' : '',
                        showLegendDetail ? 'visible opacity-100' : 'invisible opacity-0'
               ]">
            <div class="flex flex-col gap-1.5">
              <div v-for="(range, index) in contributionRanges"
                   :key="index"
                   class="flex items-center gap-1">
                <div :style="{
                       backgroundColor: colorScheme[index],
                       width: `${Math.max(cellSize - 2, 8)}px`,
                       height: `${Math.max(cellSize - 2, 8)}px`
                     }"
                     class="rounded-sm">
                </div>
                <span>{{ range }}</span>
              </div>
            </div>
          </div>
        </div>
        <span>{{ t('contribution.text.more') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { t } from '@/utils/locale'
import { type ContributionEmits, ContributionOption, type ContributionProps, ContributionSlots } from './types'

defineSlots<ContributionSlots>()

const props = withDefaults(defineProps<ContributionProps>(), {
  yearCount: 1,
  showLegend: true,
  showWeek: true,
  showMonth: true,
  cellSize: 16,
  cellGap: 4,
  dark: false,
  glass: false
})

const colorScheme = computed(() => {
  if (props.colorScheme) {
    return props.colorScheme
  }
  return props.dark
      ? ['#374151', '#9be9a8', '#40c463', '#30a14e', '#216e39']
      : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
})

const emit = defineEmits<ContributionEmits>()

const MONTH_LABEL_HEIGHT = 20

// Get contribution data for the year
const contributionData = computed(() => {
  const dates = [] as any[]

  if (props.year !== undefined) {
    const startDate = new Date(Date.UTC(props.year, 0, 1))
    const endDate = new Date(Date.UTC(props.year, 11, 31))
    const currentDate = new Date(startDate)

    console.log('Start Date UTC:', startDate.toISOString())
    console.log('Start Date Local:', startDate.toLocaleDateString(), 'Weekday:', startDate.getDay())

    console.log('Starting date:', startDate.toISOString(), 'Day:', startDate.getDay())

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0]
      const weekday = currentDate.getDay()
      const existingData = props.data.find(d => d.date === dateStr)

      dates.push({
        date: dateStr,
        count: existingData ? existingData.count : 0,
        weekday: weekday
      })

      currentDate.setDate(currentDate.getDate() + 1)
    }
  }
  else {
    const endDate = new Date()
    const startDate = new Date()
    startDate.setFullYear(endDate.getFullYear() - props.yearCount)
    const currentDate = new Date(startDate)

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0]
      const existingData = props.data.find(d => d.date === dateStr)

      dates.push({
        date: dateStr,
        count: existingData ? existingData.count : 0,
        weekday: currentDate.getDay()
      })

      currentDate.setDate(currentDate.getDate() + 1)
    }
  }

  return dates
})

// Organize data into columns (weeks)
const contributionCols = computed(() => {
  const data = contributionData.value
  const cols = [] as any[]
  let currentCol = Array(7).fill(null)
  let weekStartIndex = data[0]?.weekday || 0
  let colIndex = 0

  for (let i = 0; i < weekStartIndex; i++) {
    currentCol[i] = null
  }

  data.forEach((item, index) => {
    currentCol[item.weekday] = item

    if (item.weekday === 6 || index === data.length - 1) {
      cols.push([...currentCol])
      currentCol = Array(7).fill(null)
      colIndex++
    }
  })

  return cols
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
          offset: weekCounter * (props.cellSize + props.cellGap)
        })
        currentMonth = month
      }
      weekCounter++
    }
  })

  return labels
})

// Get color based on contribution count
const getColor = (count: number | undefined) => {
  if (count === undefined || count === null || count === 0) {
    return colorScheme.value[0]
  }
  if (count <= 3) {
    return colorScheme.value[1]
  }
  if (count <= 6) {
    return colorScheme.value[2]
  }
  if (count <= 9) {
    return colorScheme.value[3]
  }
  return colorScheme.value[4]
}

const onSelect = (item: ContributionOption) => {
  if (item) {
    emit('on-select', item)
  }
}

const activeTooltip = ref<ContributionOption | null>(null)

const showTooltip = (_event: MouseEvent, item: ContributionOption) => {
  if (item) {
    activeTooltip.value = item
  }
}

const hideTooltip = () => {
  activeTooltip.value = null
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
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
  '0',
  '1-3',
  '4-6',
  '7-9',
  '10+'
])
</script>