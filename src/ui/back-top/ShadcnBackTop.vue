<template>
  <Transition name="fade">
    <button v-show="visible"
            :class="[
              'fixed rounded-full p-3 shadow-md focus:outline-none z-50',
              glass ? 'backdrop-blur-md' : '',
              glass
                ? (dark ? 'bg-gray-700/30 text-gray-100 hover:bg-gray-600/40' : 'bg-primary/30 text-primary-foreground hover:bg-primary/40')
                : (dark ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-primary text-primary-foreground hover:bg-primary/90')
            ]"
            :style="buttonStyle"
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { BackTopEmits, BackTopProps } from './types'
import { calcSize } from '@/utils/common'

const props = withDefaults(defineProps<BackTopProps>(), {
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
  duration: 500,
  dark: false,
  glass: false
})

const emit = defineEmits<BackTopEmits>()
const visible = ref(false)
const container = ref<HTMLElement | Window | null>(null)
const containerRect = ref<DOMRect | null>(null)

const buttonStyle = computed(() => {
  if (props.target && containerRect.value) {
    return {
      right: `${window.innerWidth - containerRect.value.right + Number(props.right)}px`,
      bottom: `${window.innerHeight - containerRect.value.bottom + Number(props.bottom)}px`
    }
  }
  return {
    right: `${calcSize(props.right)}`,
    bottom: `${calcSize(props.bottom)}`
  }
})

const getScrollTop = () => {
  if (props.target && container.value && container.value !== window) {
    return (container.value as HTMLElement).scrollTop
  }
  return document.documentElement.scrollTop || document.body.scrollTop
}

const updateContainerRect = () => {
  if (container.value && container.value !== window) {
    containerRect.value = (container.value as HTMLElement).getBoundingClientRect()
  }
}

const handleScroll = () => {
  visible.value = getScrollTop() >= props.visibilityHeight
  if (props.target) {
    updateContainerRect()
  }
}

const handleClick = () => {
  const startTime = Date.now()
  const startPos = getScrollTop()

  const scrollStep = () => {
    const progress = (Date.now() - startTime) / props.duration
    if (progress < 1) {
      const newPos = startPos * (1 - easeInOutQuad(progress))
      if (props.target && container.value && container.value !== window) {
        (container.value as HTMLElement).scrollTop = newPos
      }
      else {
        window.scrollTo(0, newPos)
      }
      requestAnimationFrame(scrollStep)
    }
    else {
      if (props.target && container.value && container.value !== window) {
        (container.value as HTMLElement).scrollTop = 0
      }
      else {
        window.scrollTo(0, 0)
      }
      emit('click')
    }
  }

  requestAnimationFrame(scrollStep)
}

const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

onMounted(() => {
  if (props.target) {
    container.value = typeof props.target === 'string'
        ? document.querySelector(props.target) as HTMLElement
        : props.target
    if (container.value) {
      container.value.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', updateContainerRect)
      window.addEventListener('scroll', updateContainerRect)
      handleScroll()
    }
  }
  else {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})

onUnmounted(() => {
  if (props.target) {
    if (container.value) {
      container.value.removeEventListener('scroll', handleScroll)
    }
    window.removeEventListener('resize', updateContainerRect)
    window.removeEventListener('scroll', updateContainerRect)
  }
  else {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>