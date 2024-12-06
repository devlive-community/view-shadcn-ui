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
        <div :class="['text-4xl font-bold bg-slate-100 rounded-lg p-4',
                    { 'animate-pulse': timeLeft.days <= warningThreshold && !isPaused }
              ]">
          {{ padNumber(timeLeft.days) }}
          <span class="absolute -top-1 -right-1 flex h-3 w-3" v-if="timeLeft.days <= warningThreshold">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.day') }}</span>
      </div>

      <!-- Hours -->
      <div class="flex flex-col">
        <div :class="['text-4xl font-bold bg-slate-100 rounded-lg p-4',
                    { 'animate-pulse': timeLeft.days <= warningThreshold && !isPaused }
              ]">
          {{ padNumber(timeLeft.hours) }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.hour') }}</span>
      </div>

      <!-- Minutes -->
      <div class="flex flex-col">
        <div :class="['text-4xl font-bold bg-slate-100 rounded-lg p-4',
                    { 'animate-pulse': timeLeft.days <= warningThreshold && !isPaused }
              ]">
          {{ padNumber(timeLeft.minutes) }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.minute') }}</span>
      </div>

      <!-- Seconds -->
      <div class="flex flex-col">
        <div :class="['text-4xl font-bold bg-slate-100 rounded-lg p-4',
                    { 'animate-pulse': timeLeft.days <= warningThreshold && !isPaused }
              ]">
          {{ padNumber(timeLeft.seconds) }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.second') }}</span>
      </div>
    </div>
  </ShadcnCard>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import ShadcnCard from '@/ui/card'
import { CountDownEmits, CountDownProps } from '@/ui/count-down/types'

const emit = defineEmits<CountDownEmits>()
const props = withDefaults(defineProps<CountDownProps>(), {
  simple: false,
  toolbar: false,
  warningThreshold: 5
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timer: NodeJS.Timeout | null = null
const isPaused = ref(false)

const calculateTimeLeft = () => {
  const now = new Date().getTime()
  const target = new Date(props.time).getTime()
  const difference = target - now

  if (difference <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (timer) {
      clearInterval(timer)
    }
    emit('on-complete')
    return
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  }
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
  calculateTimeLeft()
}

// Number pad
// 数字补零
const padNumber = (num) => {
  return String(num).padStart(2, '0')
}

watch(() => props.time, () => {
  onReset()
})

onMounted(() => {
  calculateTimeLeft()
  timer = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
