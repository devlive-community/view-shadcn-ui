<template>
  <div class="inline-flex w-fit items-center justify-center rounded-md bg-background text-sm font-medium text-foreground">
    {{ displayTime }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'
import { TimeEmits, TimeProps } from './types'
import { getLocale } from '@/utils/locale'

// 预加载常用语言包 - 必须放在插件扩展之前
// Preload common locales - must be placed before plugin extension
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

// Initialize dayjs plugins - 必须在导入语言包之后
// 初始化 dayjs 插件 - must be after importing locales
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTimePlugin)

// 立即设置初始语言 - 在组件初始化时就执行
// Set initial locale immediately - executed during component initialization
const initialLocale = getLocale()
dayjs.locale(initialLocale.toLowerCase().replace('_', '-'))

// 组件属性
const props = withDefaults(defineProps<TimeProps>(), {
  format: 'HH:mm:ss',
  timezone: undefined,
  relative: false,
  referenceTime: undefined
})

const emit = defineEmits<TimeEmits>()

// Current time state
// 当前时间状态
const currentTime = ref(new Date())

// 语言监听 - 使用ref和watch代替onLocaleChange
// Locale watching - use ref and watch instead of onLocaleChange
const currentLocale = ref(initialLocale)

// 监听语言变化并立即同步更新
// Watch for locale changes and update synchronously
watch(() => getLocale(), (newLocale) => {
  currentLocale.value = newLocale
  const normalizedLocale = newLocale.toLowerCase().replace('_', '-')
  dayjs.locale(normalizedLocale)
}, { immediate: true })

// Update time based on interval
// 基于间隔更新时间
let intervalId: number | null = null

onMounted(() => {
  // 设置定时器更新时间
  // Set timer to update time
  intervalId = window.setInterval(() => {
    currentTime.value = new Date()
    emit('on-change', currentTime.value)
  }, 1000)
})

onUnmounted(() => {
  // Clean up interval when component is unmounted
  // 组件卸载时清理定时器
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})

// Get formatted time
// 获取格式化的时间
const formattedTime = computed(() => {
  const time = dayjs(currentTime.value)

  // Only apply timezone if it's a valid non-empty string
  // 只有当时区是有效的非空字符串时才应用
  if (props.timezone && props.timezone.trim() !== '') {
    try {
      return time.tz(props.timezone).format(props.format)
    }
    catch (error) {
      console.warn('Invalid timezone specified:', props.timezone)
      return time.format(props.format)
    }
  }

  return time.format(props.format)
})

// Get relative time - 强制依赖currentLocale以确保语言变化时重新计算
// 获取相对时间 - Force dependency on currentLocale to ensure recalculation when language changes
const relativeTime = computed(() => {
  const now = dayjs(currentTime.value)
  const reference = props.referenceTime
      ? dayjs(props.referenceTime)
      : dayjs()

  return now.from(reference)
})

// Choose which time display to use based on props
// 根据 props 选择使用哪种时间显示
const displayTime = computed(() => {
  return props.relative ? relativeTime.value : formattedTime.value
})
</script>