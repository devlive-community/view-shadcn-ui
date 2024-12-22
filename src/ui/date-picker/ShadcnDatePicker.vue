<template>
  <div class="relative w-full">
    <div class="relative flex space-x-2">
      <ShadcnInput :model-value="inputValue"
                   :placeholder="placeholder"
                   :disabled="disabled"
                   :readonly="true"
                   :clearable="clearable"
                   @click="toggleCalendar"
                   @on-clear="clearValue">
      </ShadcnInput>
    </div>

    <!-- Calendar Popup -->
    <div v-if="showCalendar"
         class="absolute z-20 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-72">
      <!-- Calendar Header -->
      <div class="flex justify-between items-center mb-4">
        <button class="p-1 hover:bg-gray-100 rounded-full" @click="previousMonth">
          <ChevronLeft class="w-4 h-4"/>
        </button>
        <div class="flex items-center gap-2">
          <span class="font-medium">{{ currentMonthYear }}</span>
        </div>
        <button class="p-1 hover:bg-gray-100 rounded-full" @click="nextMonth">
          <ChevronRight class="w-4 h-4"/>
        </button>
      </div>

      <!-- Week Days Header -->
      <div class="grid grid-cols-7 gap-1 mb-2">
        <span v-for="day in weekDays"
              :key="day"
              class="text-center text-sm text-gray-500">
          {{ day }}
        </span>
      </div>

      <!-- Calendar Days -->
      <div class="grid grid-cols-7 gap-1">
        <button v-for="date in calendarDays"
                class="w-6 h-6 text-sm text-center rounded-sm"
                :key="date.date"
                :class="{
                    'bg-primary text-white hover:bg-primary': isSelected(date.date),
                    'text-gray-400': !date.currentMonth,
                    'hover:bg-gray-100': !isSelected(date.date)
                }"
                @click="selectDate(date.date)">
          {{ date.day }}
        </button>
      </div>

      <!-- Shortcuts -->
      <div v-if="showShortcuts" class="grid grid-cols-3 mt-3 pt-2 border-t gap-1.5 border-gray-100">
        <button v-for="shortcut in shortcuts"
                class="text-xs px-2 py-1 rounded-md hover:bg-gray-100"
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
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { DatePickerEmits, DatePickerProps } from './types'
import { formatDate } from '@/utils/date.ts'

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: t('datePicker.placeholder.date'),
  disabled: false,
  readonly: false,
  format: 'YYYY-MM-DD',
  clearable: true,
  showShortcuts: true
})

const emit = defineEmits<DatePickerEmits>()

// UI States
// UI 状态
const showCalendar = ref(false)
const showRangeSelect = ref(false)
const currentMonth = ref(new Date())

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

// Get calendar days for current month view
// 获取当前月份视图的日历天数
const calendarDays = computed(() => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  const days = [] as any

  // Previous month days
  const firstDayOfWeek = firstDay.getDay()
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month, -i)
    days.push({
      date: formatDate(date),
      day: date.getDate(),
      currentMonth: false
    })
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i)
    days.push({
      date: formatDate(date),
      day: i,
      currentMonth: true
    })
  }

  // Next month days
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i)
    days.push({
      date: formatDate(date),
      day: date.getDate(),
      currentMonth: false
    })
  }

  return days
})

// Format input value display
// 格式化输入值显示
const inputValue = computed(() => {
  if (!props.modelValue) {
    return ''
  }
  return formatDate(props.modelValue, props.format)
})

// Convert date string to standard format for comparison
// 将日期字符串转换为标准格式进行比较
const standardizeDate = (date: string | Date): string => {
  if (typeof date === 'string') {
    // Convert different format to standard format (YYYY-MM-DD)
    const d = new Date(date.replace(/\//g, '-'))
    return formatDate(d)
  }
  return formatDate(date)
}

// Check if date is selected
// 检查日期是否被选中
const isSelected = (date: string) => {
  if (!props.modelValue) {
    return false
  }
  const standardSelectedDate = standardizeDate(props.modelValue)
  const standardCompareDate = standardizeDate(date)
  return standardSelectedDate === standardCompareDate
}

// Toggle calendar visibility
// 切换日历显示
const toggleCalendar = () => {
  if (!props.disabled && !props.readonly) {
    showCalendar.value = !showCalendar.value
    // Set current month to selected date if exists
    if (props.modelValue) {
      const selectedDate = new Date(standardizeDate(props.modelValue))
      if (!isNaN(selectedDate.getTime())) {
        currentMonth.value = selectedDate
      }
    }
  }
}

// Navigate to previous month
// 导航到上一个月
const previousMonth = () => {
  currentMonth.value = new Date(
      currentMonth.value.getFullYear(),
      currentMonth.value.getMonth() - 1
  )
}

// Navigate to next month
// 导航到下一个月
const nextMonth = () => {
  currentMonth.value = new Date(
      currentMonth.value.getFullYear(),
      currentMonth.value.getMonth() + 1
  )
}

// Select date
// 选择日期
const selectDate = (date: string) => {
  const selectedDate = new Date(date)
  emit('update:modelValue', formatDate(selectedDate, props.format))
  emit('on-change', formatDate(selectedDate, props.format))
  showCalendar.value = false
}

// Clear selected date
// 清除选中的日期
const clearValue = () => {
  emit('update:modelValue', '')
  emit('on-change', '')
}

// Get date by type
// 根据类型获取日期
const getDateByType = (type: string): Date => {
  const today = new Date()
  switch (type) {
    case 'today':
      return today
    case 'yesterday':
      return new Date(today.setDate(today.getDate() - 1))
    case 'thisWeek':
      currentMonth.value = today
      return today
    case 'lastWeek':
      const lastWeek = new Date(today.setDate(today.getDate() - 7))
      currentMonth.value = lastWeek
      return lastWeek
    case 'thisMonth':
      currentMonth.value = today
      return today
    case 'lastMonth':
      const lastMonth = new Date(today.setMonth(today.getMonth() - 1))
      currentMonth.value = lastMonth
      return lastMonth
    default:
      return today
  }
}

// Handle shortcut click
// 处理快捷选项点击
const handleShortcutClick = (type: string) => {
  const date = getDateByType(type)
  const formattedDate = formatDate(date, props.format)
  emit('update:modelValue', formattedDate)
  emit('on-change', formattedDate)
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