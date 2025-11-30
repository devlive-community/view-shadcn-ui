<template>
  <Transition name="fade">
    <button v-show="visible"
            :class="[
              'fixed rounded-full p-3 shadow-md focus:outline-none z-50',
              dark
                ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            ]"
            :style="{
                right: `${calcSize(props.right)}`,
                bottom: `${calcSize(props.bottom)}`
            }"
            @click="handleClick">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { BackTopEmits, BackTopProps } from './types'
import { calcSize } from '@/utils/common'

const props = withDefaults(defineProps<BackTopProps>(), {
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
  duration: 500,
  dark: false
})

const emit = defineEmits<BackTopEmits>()
const visible = ref(false)
const container = ref<HTMLElement | null>(null)

const getScrollTop = () => {
  return document.documentElement.scrollTop || document.body.scrollTop
}

const handleScroll = () => {
  visible.value = getScrollTop() >= props.visibilityHeight
}

const handleClick = () => {
  const startTime = Date.now()
  const startPos = getScrollTop()

  const scrollStep = () => {
    const progress = (Date.now() - startTime) / props.duration
    if (progress < 1) {
      const newPos = startPos * (1 - easeInOutQuad(progress))
      if (container.value) {
        container.value.scrollTop = newPos
      }
      else {
        window.scrollTo(0, newPos)
      }
      requestAnimationFrame(scrollStep)
    }
    else {
      window.scrollTo(0, 0)
      emit('click')
    }
  }

  requestAnimationFrame(scrollStep)
}

const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>