<template>
  <div class="relative w-full">
    <div class="relative flex space-x-2">
      <ShadcnInput :model-value="inputValue"
                   :placeholder="placeholder"
                   :disabled="disabled"
                   :readonly="true"
                   :clearable="clearable"
                   :dark="dark"
                   @click="toggleCalendar"
                   @on-clear="clearValue">
      </ShadcnInput>
    </div>

    <!-- Calendar Popup -->
    <div v-if="showCalendar"
         :class="[
           'absolute z-20 mt-1 rounded-lg shadow-lg border p-4',
           dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200',
           {'w-64': type === 'date', 'w-auto': type === 'range'}
         ]">
      <div class="flex" :class="{'space-x-4': type === 'range'}">
        <!-- Start/Single Calendar -->
        <div class="w-50">
          <!-- Calendar Header -->
          <div :class="['flex justify-between items-center mb-4 text-sm', dark ? 'text-gray-200' : '']">
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="previousYear('start')">
              <ChevronsLeft class="w-4 h-4"/>
            </button>
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="previousMonth('start')">
              <ChevronLeft class="w-4 h-4"/>
            </button>
            <div class="flex items-center gap-2">
              <span class="font-medium">{{ currentMonthYear }}</span>
            </div>
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="nextMonth('start')">
              <ChevronRight class="w-4 h-4"/>
            </button>
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="nextYear('start')">
              <ChevronsRight class="w-4 h-4"/>
            </button>
          </div>

          <!-- Week Days Header -->
          <div class="grid grid-cols-7 gap-1 mb-2">
            <span v-for="day in weekDays"
                  :key="day"
                  :class="['text-xs', dark ? 'text-gray-400' : 'text-gray-500']">
              {{ day }}
            </span>
          </div>

          <!-- Calendar Days -->
          <div class="grid grid-cols-7 gap-1">
            <button v-for="date in calendarDays"
                    :key="date.date"
                    :class="[
                      'w-6 h-6 text-xs text-center rounded-sm relative',
                      {
                        'bg-blue-500 text-white hover:bg-blue-500': isSelected(date.date),
                        'text-gray-400': !date.currentMonth && !dark,
                        'text-gray-600': !date.currentMonth && dark,
                        'text-gray-900': date.currentMonth && !dark && !isSelected(date.date),
                        'text-gray-200': date.currentMonth && dark && !isSelected(date.date),
                        'hover:bg-gray-100': !isSelected(date.date) && !dark,
                        'hover:bg-gray-700': !isSelected(date.date) && dark,
                        'bg-blue-500': type === 'range' && isInRange(date.date),
                        'bg-blue-100': type === 'range' && isInHoverRange(date.date) && !isSelected(date.date) && !dark,
                        'bg-blue-900/30': type === 'range' && isInHoverRange(date.date) && !isSelected(date.date) && dark,
                        'hover:bg-blue-200': type === 'range' && selectedStartDate && !selectedEndDate && !dark,
                        'hover:bg-blue-800': type === 'range' && selectedStartDate && !selectedEndDate && dark
                      }
                    ]"
                    @click="selectDate(date.date, 'start')"
                    @mouseenter="type === 'range' && (hoverDate = date.date)"
                    @mouseleave="type === 'range' && (hoverDate = '')">
              <ShadcnBadge v-if="date.isToday" dot>
                {{ date.day }}
              </ShadcnBadge>
              <span v-else>{{ date.day }}</span>
            </button>
          </div>
        </div>

        <!-- End Calendar (Only for range mode) -->
        <div v-if="type === 'range'" class="w-50">
          <div :class="['flex justify-between items-center mb-4 text-sm', dark ? 'text-gray-200' : '']">
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="previousYear('end')">
              <ChevronsLeft class="w-4 h-4"/>
            </button>
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="previousMonth('end')">
              <ChevronLeft class="w-4 h-4"/>
            </button>
            <div class="flex items-center gap-2">
              <span class="font-medium">{{ endMonthYear }}</span>
            </div>
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="nextMonth('end')">
              <ChevronRight class="w-4 h-4"/>
            </button>
            <button :class="['p-1 rounded-full', dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100']" @click="nextYear('end')">
              <ChevronsRight class="w-4 h-4"/>
            </button>
          </div>

          <!-- Week Days Header -->
          <div class="grid grid-cols-7 gap-1 mb-2">
            <span v-for="day in weekDays"
                  :key="day"
                  :class="['text-xs', dark ? 'text-gray-400' : 'text-gray-500']">
              {{ day }}
            </span>
          </div>

          <!-- End Calendar Days -->
          <div class="grid grid-cols-7 gap-1">
            <button v-for="date in endCalendarDays"
                    :key="date.date"
                    :class="[
                      'w-6 h-6 text-xs text-center rounded-sm relative',
                      {
                        'bg-blue-500 text-white hover:bg-blue-500': isSelected(date.date),
                        'text-gray-400': !date.currentMonth && !dark,
                        'text-gray-600': !date.currentMonth && dark,
                        'text-gray-900': date.currentMonth && !dark && !isSelected(date.date),
                        'text-gray-200': date.currentMonth && dark && !isSelected(date.date),
                        'hover:bg-gray-100': !isSelected(date.date) && !dark,
                        'hover:bg-gray-700': !isSelected(date.date) && dark,
                        'bg-blue-500': type === 'range' && isInRange(date.date),
                        'bg-blue-100': type === 'range' && isInHoverRange(date.date) && !isSelected(date.date) && !dark,
                        'bg-blue-900/30': type === 'range' && isInHoverRange(date.date) && !isSelected(date.date) && dark,
                        'hover:bg-blue-200': type === 'range' && selectedStartDate && !selectedEndDate && !dark,
                        'hover:bg-blue-800': type === 'range' && selectedStartDate && !selectedEndDate && dark
                      }
                    ]"
                    @click="selectDate(date.date, 'end')"
                    @mouseenter="type === 'range' && (hoverDate = date.date)"
                    @mouseleave="type === 'range' && (hoverDate = '')">
              <ShadcnBadge v-if="date.isToday" dot>
                {{ date.day }}
              </ShadcnBadge>
              <span v-else>{{ date.day }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Shortcuts -->
      <div v-if="showShortcuts"
           :class="[
             'mt-3 pt-2 border-t',
             dark ? 'border-gray-600' : 'border-gray-100',
             {
               'grid grid-cols-3 gap-1': type === 'date',
               'grid grid-cols-5 gap-1 w-50': type === 'range'
             }
           ]">
        <button v-for="shortcut in shortcuts"
                :class="[
                  'text-xs py-1 px-1 rounded-md',
                  dark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100'
                ]"
                :key="shortcut.label"
                @click="handleShortcutClick(shortcut.value)">
          {{ shortcut.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { t } from '@/utils/locale'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'
import type { DatePickerEmits, DatePickerProps } from './types'
import { formatDate } from '@/utils/date.ts'

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: t('datePicker.placeholder.date'),
  disabled: false,
  readonly: false,
  format: 'YYYY-MM-DD',
  clearable: true,
  showShortcuts: true,
  type: 'date',
  dark: false
})

const emit = defineEmits<DatePickerEmits>()

// UI States
// UI 状态
const showCalendar = ref(false)
const showRangeSelect = ref(false)
const currentMonth = ref(new Date())
const endMonth = ref(new Date())
const selectedStartDate = ref('')
const selectedEndDate = ref('')

// Shortcuts config
// 快捷选项配置
const shortcuts = [
  { label: t('datePicker.text.today'), value: 'today' },
  { label: t('datePicker.text.yesterday'), value: 'yesterday' },
  { label: t('datePicker.text.thisWeek'), value: 'thisWeek' },
  { label: t('datePicker.text.lastWeek'), value: 'lastWeek' },
  { label: t('datePicker.text.thisMonth'), value: 'thisMonth' },
  { label: t('datePicker.text.lastMonth'), value: 'lastMonth' }
]

if (props.type === 'range') {
  shortcuts.push(
      { label: t('datePicker.text.last3Months'), value: 'last3Months' }
  )
}

// Week days array
// 星期数组
const weekDays = [
  t('datePicker.text.sunday'),
  t('datePicker.text.monday'),
  t('datePicker.text.tuesday'),
  t('datePicker.text.wednesday'),
  t('datePicker.text.thursday'),
  t('datePicker.text.friday'),
  t('datePicker.text.saturday')
]

// Compute current month and year display
// 计算当前月份和年份显示
const currentMonthYear = computed(() => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth() + 1
  return `${ year }${ t('datePicker.text.year') } ${ month }${ t('datePicker.text.month') }`
})

const endMonthYear = computed(() => {
  const year = endMonth.value.getFullYear()
  const month = endMonth.value.getMonth() + 1
  return `${ year }${ t('datePicker.text.year') } ${ month }${ t('datePicker.text.month') }`
})

// Get calendar days for current month view
// 获取当前月份视图的日历天数
const calendarDays = computed(() => getCalendarDays(currentMonth.value))
const endCalendarDays = computed(() => getCalendarDays(endMonth.value))

const getCalendarDays = (month: Date) => {
  const year = month.getFullYear()
  const monthNum = month.getMonth()
  const firstDay = new Date(year, monthNum, 1)
  const lastDay = new Date(year, monthNum + 1, 0)
  const today = new Date()

  const isSameDay = (date: Date) => {
    return date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
  }

  const days = [] as any

  // Previous month days
  const firstDayOfWeek = firstDay.getDay()
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, monthNum, -i)
    days.push({
      date: formatDate(date),
      day: date.getDate(),
      currentMonth: false,
      isToday: isSameDay(date)
    })
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, monthNum, i)
    days.push({
      date: formatDate(date),
      day: i,
      currentMonth: true,
      isToday: isSameDay(date)
    })
  }

  // Next month days
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, monthNum + 1, i)
    days.push({
      date: formatDate(date),
      day: date.getDate(),
      currentMonth: false,
      isToday: isSameDay(date)
    })
  }

  return days
}

// Format input value display
// 格式化输入值显示
const inputValue = computed(() => {
  if (!props.modelValue) {
    return ''
  }
  if (props.type === 'range' && Array.isArray(props.modelValue)) {
    const [start, end] = props.modelValue
    if (!start || !end) {
      return ''
    }
    return `${ formatDate(start, props.format) } ~ ${ formatDate(end, props.format) }`
  }
  return formatDate(props.modelValue, props.format)
})

// Convert date string to standard format for comparison
// 将日期字符串转换为标准格式进行比较
const standardizeDate = (date: string | Date): string => {
  if (typeof date === 'string') {
    const d = new Date(date.replace(/\//g, '-'))
    return formatDate(d)
  }
  return formatDate(date)
}

// Check if date is selected
// 检查日期是否被选中
const isSelected = (date: string) => {
  if (props.type === 'range') {
    if (props.modelValue && Array.isArray(props.modelValue)) {
      const [start, end] = props.modelValue
      const current = new Date(date).getTime()
      const startTime = start ? new Date(start).getTime() : null
      const endTime = end ? new Date(end).getTime() : null

      return (startTime && current >= startTime) && (endTime && current <= endTime)
    }
    return false
  }
  if (!props.modelValue) {
    return false
  }
  return standardizeDate(props.modelValue as string) === standardizeDate(date)
}

// Check if date is in range
// 检查日期是否在范围内
const isInRange = (date: string) => {
  if (!props.modelValue || !Array.isArray(props.modelValue)) {
    return false
  }
  const [start, end] = props.modelValue
  if (!start || !end) {
    return false
  }

  const current = new Date(date).getTime()
  const startTime = new Date(start).getTime()
  const endTime = new Date(end).getTime()

  return current >= startTime && current <= endTime
}

// Toggle calendar visibility
// 切换日历显示
const toggleCalendar = () => {
  if (!props.disabled && !props.readonly) {
    showCalendar.value = !showCalendar.value
    if (showCalendar.value) {
      if (props.modelValue) {
        if (props.type === 'range' && Array.isArray(props.modelValue)) {
          const [start, end] = props.modelValue
          if (start) {
            currentMonth.value = new Date(standardizeDate(start))
            selectedStartDate.value = standardizeDate(start)

            // 设置结束日历为开始日历的下一个月
            // Setting end calendar to start calendar's next month
            const nextMonth = new Date(currentMonth.value)
            nextMonth.setMonth(nextMonth.getMonth() + 1)
            endMonth.value = nextMonth
          }
          if (end) {
            selectedEndDate.value = standardizeDate(end)
          }
        }
        else {
          const date = new Date(standardizeDate(props.modelValue as string))
          if (!isNaN(date.getTime())) {
            currentMonth.value = date
            selectedStartDate.value = standardizeDate(props.modelValue as string)
          }
        }
      }

      // Initialize calendars with one month difference if needed
      if (props.type === 'range') {
        const nextMonth = new Date(currentMonth.value)
        nextMonth.setMonth(nextMonth.getMonth() + 1)
        // Only set if endMonth is same as or before currentMonth
        if (endMonth.value <= currentMonth.value) {
          endMonth.value = nextMonth
        }
      }
    }
  }
}

// Navigate to previous month
// 导航到上一个月
const previousMonth = (type: 'start' | 'end') => {
  const target = type === 'start' ? currentMonth : endMonth
  const newDate = new Date(
      target.value.getFullYear(),
      target.value.getMonth() - 1
  )

  if (type === 'end') {
    target.value = newDate
    const startDate = new Date(newDate)
    startDate.setMonth(startDate.getMonth() - 1)
    if (props.type === 'range' && newDate <= currentMonth.value) {
      currentMonth.value = startDate
    }
  }
  else {
    target.value = newDate
  }
}

const previousYear = (type: 'start' | 'end') => {
  const target = type === 'start' ? currentMonth : endMonth
  const newDate = new Date(
      target.value.getFullYear() - 1,
      target.value.getMonth()
  )

  if (type === 'end') {
    target.value = newDate
    const startDate = new Date(newDate)
    startDate.setMonth(startDate.getMonth() - 1)
    if (props.type === 'range' && newDate <= currentMonth.value) {
      currentMonth.value = startDate
    }
  }
  else {
    target.value = newDate
  }
}

// Navigate to next month
// 导航到下一个月
const nextMonth = (type: 'start' | 'end') => {
  const target = type === 'start' ? currentMonth : endMonth
  const newDate = new Date(
      target.value.getFullYear(),
      target.value.getMonth() + 1
  )

  if (type === 'start') {
    target.value = newDate
    const nextMonth = new Date(newDate)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    if (props.type === 'range' && endMonth.value <= newDate) {
      endMonth.value = nextMonth
    }
  }
  else {
    target.value = newDate
  }
}

const nextYear = (type: 'start' | 'end') => {
  const target = type === 'start' ? currentMonth : endMonth
  const newDate = new Date(
      target.value.getFullYear() + 1,
      target.value.getMonth()
  )

  if (type === 'start') {
    target.value = newDate
    const nextMonth = new Date(newDate)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    if (props.type === 'range' && endMonth.value <= newDate) {
      endMonth.value = nextMonth
    }
  }
  else {
    target.value = newDate
  }
}

// Select date
// 选择日期
// 修改 selectDate 函数
const selectDate = (date: string, _type: 'start' | 'end' = 'start') => {
  const selectedDate = new Date(date)

  if (props.type === 'range') {
    if (!selectedStartDate.value || (selectedStartDate.value && selectedEndDate.value)) {
      selectedStartDate.value = date
      selectedEndDate.value = ''

      /*
      const startMonth = new Date(selectedDate)
      startMonth.setDate(1)
      const nextMonth = new Date(startMonth)
      nextMonth.setMonth(nextMonth.getMonth() + 1)

      if (endMonth.value <= nextMonth) {
        endMonth.value = nextMonth
      }
      */
    }
    else {
      const startTime = new Date(selectedStartDate.value).getTime()
      const endTime = new Date(date).getTime()

      if (endTime >= startTime) {
        selectedEndDate.value = date
      }
      else {
        selectedEndDate.value = selectedStartDate.value
        selectedStartDate.value = date
      }
    }

    if (selectedStartDate.value && selectedEndDate.value) {
      const range = [
        formatDate(new Date(selectedStartDate.value), props.format),
        formatDate(new Date(selectedEndDate.value), props.format)
      ]
      emit('update:modelValue', range as any)
      emit('on-change', range as any)
      showCalendar.value = false
    }
  }
  else {
    emit('update:modelValue', formatDate(selectedDate, props.format))
    emit('on-change', formatDate(selectedDate, props.format))
    showCalendar.value = false
  }
}

// Clear selected date
// 清除选中的日期
const clearValue = () => {
  selectedStartDate.value = ''
  selectedEndDate.value = ''
  if (props.type === 'range') {
    emit('update:modelValue', ['', ''])
    emit('on-change', ['', ''])
  }
  else {
    emit('update:modelValue', '')
    emit('on-change', '')
  }
}

// Get date by type
// 根据类型获取日期
const getDateByType = (type: string): Date | [Date, Date] => {
  const today = new Date()
  const thisYear = today.getFullYear()
  const thisMonth = today.getMonth()

  switch (type) {
    case 'today':
      return today
    case 'yesterday': {
      const yesterday = new Date(today)
      yesterday.setDate(today.getDate() - 1)
      return yesterday
    }
    case 'thisWeek':
      return today
    case 'lastWeek': {
      const end = new Date(today)
      const start = new Date(today)
      start.setDate(end.getDate() - 7)
      return props.type === 'range' ? [start, end] : end
    }
    case 'thisMonth': {
      const start = new Date(thisYear, thisMonth, 1)
      const end = new Date(thisYear, thisMonth + 1, 0)
      return props.type === 'range' ? [start, end] : end
    }
    case 'lastMonth': {
      const start = new Date(thisYear, thisMonth - 1, 1)
      const end = new Date(thisYear, thisMonth, 0)
      return props.type === 'range' ? [start, end] : end
    }
    case 'last3Months': {
      const end = new Date(today)
      const start = new Date(thisYear, thisMonth - 3, 1)
      return [start, end]
    }
    case 'thisYear': {
      const start = new Date(thisYear, 0, 1)
      const end = new Date(thisYear, 11, 31)
      return [start, end]
    }
    case 'lastYear': {
      const start = new Date(thisYear - 1, 0, 1)
      const end = new Date(thisYear - 1, 11, 31)
      return [start, end]
    }
    default:
      return today
  }
}

// Handle shortcut click
// 处理快捷选项点击
const handleShortcutClick = (type: string) => {
  const dateResult = getDateByType(type)

  if (props.type === 'range' && Array.isArray(dateResult)) {
    const [start, end] = dateResult
    const formattedStart = formatDate(start, props.format)
    const formattedEnd = formatDate(end, props.format)

    selectedStartDate.value = standardizeDate(start)
    selectedEndDate.value = standardizeDate(end)
    currentMonth.value = start
    endMonth.value = end

    emit('update:modelValue', [formattedStart, formattedEnd])
    emit('on-change', [formattedStart, formattedEnd])
  }
  else {
    const date = dateResult as Date
    const formattedDate = formatDate(date, props.format)

    selectedStartDate.value = standardizeDate(date)
    currentMonth.value = date

    emit('update:modelValue', formattedDate)
    emit('on-change', formattedDate)
  }

  showCalendar.value = false
}

// Close dropdowns when clicking outside
// 点击外部时关闭下拉框
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    showCalendar.value = false
    showRangeSelect.value = false
  }
}

const hoverDate = ref('')
const isInHoverRange = (date: string) => {
  if (props.type !== 'range' || !hoverDate.value) {
    return false
  }

  if (selectedStartDate.value && selectedEndDate.value) {
    return false
  }

  const current = new Date(date).getTime()
  const hover = new Date(hoverDate.value).getTime()

  if (!selectedStartDate.value) {
    return current === hover
  }
  else {
    const start = new Date(selectedStartDate.value).getTime()
    return hover >= start
        ? current >= start && current <= hover
        : current >= hover && current <= start
  }
}

// Add click outside listener
// 添加点击外部监听
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Remove click outside listener
// 移除点击外部监听
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>