<template>
  <div ref="containerRef" class="relative overflow-hidden w-full">
    <div ref="contentRef"
         :style="{
           transform: `translateX(${currentPosition}px)`,
           transition: isAnimating ? `transform ${remainingTime}s linear` : 'none',
         }"
         :class="['whitespace-nowrap inline-block',
                  dark ? 'text-gray-200' : ''
         ]"
         @transitionend.stop="handleTransitionEnd"
         @mouseenter.stop="handleMouseEnter"
         @mouseleave.stop="handleMouseLeave">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onMounted, ref } from 'vue'
import type { MarqueeEmits, MarqueeProps } from './types'

const props = withDefaults(defineProps<MarqueeProps>(), {
  speed: 10,
  repeat: -1,
  dark: false
})

const emit = defineEmits<MarqueeEmits>()

const containerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const currentPosition = ref(0)
const isAnimating = ref(false)
const currentRepeat = ref(0)
const remainingTime = ref(props.speed)

// 记录动画开始时间和暂停时的位置
const animationStartTime = ref(0)
const pausedPosition = ref(0)
const isPaused = ref(false)

// 使用固定的起始位置计算方法
const getStartOffset = () => {
  if (!contentRef.value || !containerRef.value) {
    return 0
  }
  return containerRef.value.offsetWidth
}

// 使用固定的结束位置计算方法
const getFinalOffset = () => {
  if (!contentRef.value) {
    return 0
  }
  return -contentRef.value.offsetWidth
}

const startNewAnimation = () => {
  if (!contentRef.value || !containerRef.value) {
    return
  }

  isAnimating.value = false
  currentPosition.value = getStartOffset()
  remainingTime.value = props.speed

  setTimeout(() => {
    isAnimating.value = true
    animationStartTime.value = performance.now()
    currentPosition.value = getFinalOffset()
  }, 50)
}

const handleMouseEnter = () => {
  if (!isAnimating.value) {
    return
  }

  // 计算已经过的时间和剩余时间
  const elapsedTime = (performance.now() - animationStartTime.value) / 1000
  remainingTime.value = props.speed - elapsedTime

  // 获取当前实际位置
  const totalDistance = getFinalOffset() - getStartOffset()
  const elapsedDistance = totalDistance * (elapsedTime / props.speed)
  pausedPosition.value = getStartOffset() + elapsedDistance

  // 暂停动画
  isAnimating.value = false
  currentPosition.value = pausedPosition.value
  isPaused.value = true
}

const handleMouseLeave = () => {
  if (!isPaused.value) {
    return
  }

  // 从暂停位置继续动画
  isAnimating.value = true
  currentPosition.value = getFinalOffset()
  animationStartTime.value = performance.now() - ((props.speed - remainingTime.value) * 1000)
  isPaused.value = false
}

onMounted(() => {
  if (contentRef.value && containerRef.value) {
    startNewAnimation()
  }
})

const handleTransitionEnd = () => {
  if (isPaused.value) {
    return
  }

  if (props.repeat === -1) {
    startNewAnimation()
  }
  else {
    currentRepeat.value++
    if (currentRepeat.value < props.repeat) {
      startNewAnimation()
    }
    else {
      isAnimating.value = false
      currentPosition.value = 0
      emit('on-complete')
    }
  }
}
</script>