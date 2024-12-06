<template>
  <ShadcnCard :border="false">
    <div v-if="simple">
      <div class="text-2xl font-bold">
        {{ `${ timeLeft.days } : ${ timeLeft.hours } : ${ timeLeft.minutes } : ${ timeLeft.seconds }` }}
      </div>
    </div>

    <div v-else class="grid grid-cols-4 gap-4 text-center">
      <!-- Days -->
      <div class="flex flex-col">
        <div class="text-4xl font-bold bg-slate-100 rounded-lg p-4">
          {{ timeLeft.days }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.day') }}</span>
      </div>

      <!-- Hours -->
      <div class="flex flex-col">
        <div class="text-4xl font-bold bg-slate-100 rounded-lg p-4">
          {{ timeLeft.hours }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.hour') }}</span>
      </div>

      <!-- Minutes -->
      <div class="flex flex-col">
        <div class="text-4xl font-bold bg-slate-100 rounded-lg p-4">
          {{ timeLeft.minutes }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.minute') }}</span>
      </div>

      <!-- Seconds -->
      <div class="flex flex-col">
        <div class="text-4xl font-bold bg-slate-100 rounded-lg p-4">
          {{ timeLeft.seconds }}
        </div>
        <span class="text-sm mt-2">{{ t('countDown.text.second') }}</span>
      </div>
    </div>
  </ShadcnCard>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { t } from '@/utils/locale'
import ShadcnCard from '@/ui/card'
import { CountDownEmits, CountDownProps } from '@/ui/count-down/types'

const emit = defineEmits<CountDownEmits>()
const props = withDefaults(defineProps<CountDownProps>(), {
  simple: false
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timer: NodeJS.Timeout | null = null

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
