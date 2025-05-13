<template>
  <div class="inline-flex w-fit items-center justify-center rounded-md bg-background text-sm font-medium text-foreground">
    {{ formattedTime }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { TimeEmits, TimeProps } from './types'

// Initialize dayjs plugins
// 初始化 dayjs 插件
dayjs.extend(utc)
dayjs.extend(timezone)

const props = withDefaults(defineProps<TimeProps>(), {
  format: 'HH:mm:ss',
  timezone: undefined
})

const emit = defineEmits<TimeEmits>()

// Current time state
// 当前时间状态
const currentTime = ref(new Date())

// Update time every second
// 每秒更新一次时间
let intervalId: number | null = null

onMounted(() => {
  // Set up interval to update time every second
  // 设置每秒更新时间的定时器
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

// Format time using dayjs
// 使用 dayjs 格式化时间
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
</script>