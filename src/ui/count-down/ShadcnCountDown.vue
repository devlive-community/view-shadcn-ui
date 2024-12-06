<template>
  <div v-if="simple">
    <div class="text-2xl font-bold">
      {{ `${ padNumber(timeLeft.days) } : ${ padNumber(timeLeft.hours) } : ${ padNumber(timeLeft.minutes) } : ${ padNumber(timeLeft.seconds) }` }}
    </div>
  </div>

  <ShadcnCard v-else :border="false">
    <template #title>
      <slot name="title">
        <div class="mb-2">
          {{ title }}
        </div>
      </slot>
    </template>

    <template v-if="toolbar" #extra>
      <div class="space-x-2">
        <ShadcnButton :type="isPaused ? 'primary' : 'warning'" @click="togglePause">
          {{ isPaused ? t('countDown.text.resume') : t('countDown.text.pause') }}
        </ShadcnButton>

        <ShadcnButton type="default" @click="onReset">
          {{ t('countDown.text.reset') }}
        </ShadcnButton>
      </div>
    </template>

    <div class="grid grid-cols-4 gap-4 text-center">
      <!-- Days -->
      <div class="relative flex flex-col">
        <div :class="['text-4xl font-bold rounded-lg p-4 transition-all duration-300',
                    {
                      'bg-slate-100': !isWarning && !isCompleted,
                      'bg-red-50': isWarning && !isCompleted,
                      'bg-green-50': isCompleted,
                      'animate-pulse': isWarning && !isPaused && !isCompleted
                    }
              ]">
          {{ padNumber(timeLeft.days) }}
          <span v-if="isWarning && !isCompleted"
                class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.day') }}</span>
      </div>

      <!-- Hours -->
      <div class="flex flex-col">
        <div :class="['text-4xl font-bold rounded-lg p-4 transition-all duration-300',
                    {
                      'bg-slate-100': !isWarning && !isCompleted,
                      'bg-red-50': isWarning && !isCompleted,
                      'bg-green-50': isCompleted,
                      'animate-pulse': isWarning && !isPaused && !isCompleted
                    }
             ]">
          {{ padNumber(timeLeft.hours) }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.hour') }}</span>
      </div>

      <!-- Minutes -->
      <div class="flex flex-col">
        <div :class="['text-4xl font-bold rounded-lg p-4 transition-all duration-300',
                    {
                      'bg-slate-100': !isWarning && !isCompleted,
                      'bg-red-50': isWarning && !isCompleted,
                      'bg-green-50': isCompleted,
                      'animate-pulse': isWarning && !isPaused && !isCompleted
                    }
            ]">
          {{ padNumber(timeLeft.minutes) }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.minute') }}</span>
      </div>

      <!-- Seconds -->
      <div class="flex flex-col">
        <div :class="['text-4xl font-bold rounded-lg p-4 transition-all duration-300',
                    {
                      'bg-slate-100': !isWarning && !isCompleted,
                      'bg-red-50': isWarning && !isCompleted,
                      'bg-green-50': isCompleted,
                      'animate-pulse': isWarning && !isPaused && !isCompleted
                    }
            ]">
          {{ padNumber(timeLeft.seconds) }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.second') }}</span>
      </div>
    </div>

    <!-- Progress bar -->
    <div v-if="showProgress" class="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div :class="['h-full transition-all duration-300',
                  {
                    'bg-primary': !isWarning && !isCompleted,
                    'bg-red-500': isWarning && !isCompleted,
                    'bg-green-500': isCompleted,
                    'animate-pulse': isWarning && !isPaused && !isCompleted
                  }
           ]"
           :style="{ width: `${progress}%` }"
      ></div>
    </div>

    <!-- Status display -->
    <div v-if="showProgress" class="mt-2 text-sm flex justify-between">
      <span :class="['transition-colors duration-300',
                    {
                      'text-gray-500': !isWarning && !isCompleted,
                      'text-red-500': isWarning && !isCompleted,
                      'text-green-500': isCompleted
                    }
            ]">
        {{ status }}
      </span>
      <span class="text-gray-500">{{ formatProgress }}</span>
    </div>
  </ShadcnCard>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import ShadcnCard from '@/ui/card'
import { CountDownEmits, CountDownProps } from '@/ui/count-down/types'

const emit = defineEmits<CountDownEmits>()
const props = withDefaults(defineProps<CountDownProps>(), {
  simple: false,
  toolbar: false,
  warningThreshold: 5,
  showProgress: false
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timer: NodeJS.Timeout | null = null
const initialDifference = ref(0)
const currentDifference = ref(0)
const isPaused = ref(false)

const calculateTimeLeft = () => {
  if (isPaused.value) {
    return
  }

  const now = new Date().getTime()
  const target = new Date(props.time).getTime()
  const difference = target - now
  currentDifference.value = difference

  // 如果时间差小于等于 0，设置完成状态
  // If the difference is less than or equal to 0, set the completed state
  if (difference <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    currentDifference.value = 0
    if (timer) {
      clearInterval(timer)
      timer = null
    }
    emit('on-complete')
    return
  }

  const newTimeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  }

  timeLeft.value = newTimeLeft
  emit('on-tick', newTimeLeft)
}

// Pause/Resume
// 暂停/继续
const togglePause = () => {
  isPaused.value = !isPaused.value
  if (!isPaused.value) {
    calculateTimeLeft()
    timer = setInterval(calculateTimeLeft, 1000)
  }
  else {
    clearInterval(timer!)
  }
}

// Reset
// 重置
const onReset = () => {
  isPaused.value = false
  const target = new Date(props.time).getTime()
  const now = new Date().getTime()
  initialDifference.value = target - now
  calculateTimeLeft()
  // 只有在还有剩余时间的情况下才启动定时器
  // Only start the timer if there is remaining time
  if (currentDifference.value > 0) {
    if (timer) {
      clearInterval(timer)
    }
    timer = setInterval(calculateTimeLeft, 1000)
  }
}

// Number pad
// 数字补零
const padNumber = (num) => {
  return String(num).padStart(2, '0')
}

// Calculate progress
// 计算进度
const progress = computed(() => {
  if (initialDifference.value === 0 || currentDifference.value <= 0) {
    return 100
  }
  const currentProgress = Math.max(0, Math.min(100,
      ((initialDifference.value - currentDifference.value) / initialDifference.value) * 100
  ))
  emit('update:progress', currentProgress)
  return currentProgress
})

const formatProgress = computed(() => {
  return `${ progress.value.toFixed(1) }%`
})

// Status text
// 状态文本
const status = computed(() => {
  // 先判断是否已经完成
  // First, check if it's completed
  if (currentDifference.value <= 0) {
    return t('countDown.text.completed')
  }
  // 其他状态判断
  // Other status checks
  if (isPaused.value) {
    return t('countDown.text.paused')
  }
  if (timeLeft.value.days <= props.warningThreshold) {
    return t('countDown.text.timeUp')
  }
  return t('countDown.text.running')
})

const isWarning = computed(() => {
  return timeLeft.value.days <= props.warningThreshold && currentDifference.value > 0
})

const isCompleted = computed(() => {
  return currentDifference.value <= 0
})

watch(() => props.time, () => {
  onReset()
})

onMounted(() => {
  const target = new Date(props.time).getTime()
  const now = new Date().getTime()
  initialDifference.value = target - now
  calculateTimeLeft()
  // 只有在还有剩余时间的情况下才启动定时器
  // Only start the timer if there is remaining time
  if (currentDifference.value > 0) {
    timer = setInterval(calculateTimeLeft, 1000)
  }
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
