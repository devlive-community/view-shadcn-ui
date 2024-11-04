<template>
  <div class="relative inline-block"
       ref="triggerRef"
       @mouseenter="startShowingTooltip"
       @mouseleave="hideTooltip">
    <span>
      <slot/>
    </span>

    <Teleport to="body">
      <div v-if="isVisible"
           ref="tooltipRef"
           :class="['fixed z-[100] px-3 py-2 text-sm text-white bg-black rounded shadow-lg',
                   'transition-opacity duration-200',
                   !maxWidth && { 'whitespace-nowrap': props.width === 'auto' },
                   { 'whitespace-normal': maxWidth },
                   { 'opacity-0': !mounted },
                   { 'opacity-100': mounted }
           ]"
           :style="[computedWidth, tooltipStyle]">

        <template v-if="content">{{ content }}</template>
        <slot v-else name="content"/>

        <div v-if="arrow"
             :class="['absolute w-2 h-2 rotate-45 bg-black',
                      arrowPosition
             ]"/>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<{
  content?: string
  delay?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  arrow?: boolean
  width?: string | number
  maxWidth?: number | string
  offset?: number
}>(), {
  delay: 0,
  position: 'top',
  arrow: true,
  width: 'auto',
  offset: 8
})

const isVisible = ref(false)
const mounted = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const tooltipStyle = ref({})
const arrowPosition = ref('')
let timeoutId: NodeJS.Timeout | null = null

const computedWidth = computed(() => {
  if (props.width === 'auto') {
    return {
      maxWidth: calcSize(props.maxWidth)
    }
  }

  const widthValue = typeof props.width === 'number'
      ? `${ props.width }px`
      : props.width

  return {
    width: widthValue,
    minWidth: widthValue,
    maxWidth: widthValue
  }
})

// Define position combinations for fallback
const positionMap = {
  top: ['top', 'bottom', 'right', 'left'],
  bottom: ['bottom', 'top', 'right', 'left'],
  left: ['left', 'right', 'top', 'bottom'],
  right: ['right', 'left', 'top', 'bottom']
}

const getPositionStyle = (position: string, triggerRect: DOMRect, tooltipRect: DOMRect) => {
  let top = 0
  let left = 0
  let arrowPos = ''

  switch (position) {
    case 'top':
      top = triggerRect.top - tooltipRect.height - props.offset
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
      arrowPos = 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
      break
    case 'bottom':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
      arrowPos = 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
      break
    case 'left':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
      left = triggerRect.left - tooltipRect.width - props.offset
      arrowPos = 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2'
      break
    case 'right':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
      left = triggerRect.right + props.offset
      arrowPos = 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2'
      break
  }

  return { top, left, arrowPos }
}

const checkPositionAvailable = (position: string, triggerRect: DOMRect, tooltipRect: DOMRect) => {
  const { top, left } = getPositionStyle(position, triggerRect, tooltipRect)
  const margin = props.offset

  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  return (
      top >= margin &&
      left >= margin &&
      top + tooltipRect.height <= viewportHeight - margin &&
      left + tooltipRect.width <= viewportWidth - margin
  )
}

const updatePosition = () => {
  if (!triggerRef.value || !tooltipRef.value) {
    return
  }

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const tooltipRect = tooltipRef.value.getBoundingClientRect()

  // Find the first available position from the fallback list
  const availablePosition = positionMap[props.position].find(pos =>
      checkPositionAvailable(pos, triggerRect, tooltipRect)
  ) || props.position // Use original position as fallback

  const { top, left, arrowPos } = getPositionStyle(availablePosition, triggerRect, tooltipRect)

  // Update styles
  tooltipStyle.value = {
    top: `${ top }px`,
    left: `${ left }px`
  }
  arrowPosition.value = arrowPos
}

// Start showing tooltip with delay
const startShowingTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    isVisible.value = true
    nextTick(() => {
      updatePosition()
      mounted.value = true
    })
  }, props.delay)
}

// Hide tooltip and clear timeout
const hideTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  mounted.value = false
  setTimeout(() => {
    isVisible.value = false
  }, 200)
}

// Handle window resize
const handleResize = () => {
  if (isVisible.value) {
    updatePosition()
  }
}

// Setup
onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.addEventListener('scroll', updatePosition, true)
})

// Cleanup
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('scroll', updatePosition, true)
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>
