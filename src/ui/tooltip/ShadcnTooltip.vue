<template>
  <div class="relative inline-block"
       ref="triggerRef"
       @mouseenter="startShowingTooltip"
       @mouseleave="hideTooltip">
    <span>
      <slot/>
    </span>

    <div v-if="isVisible"
         ref="tooltipRef"
         :class="[
           'absolute z-50 px-3 py-2 text-sm text-white bg-black rounded shadow-lg',
           'animate-in fade-in-0 zoom-in-95',
           computedPosition.positionClass
         ]"
         :style="{ width: `${width}px`, minWidth: `${width}px`, maxWidth: `${width}px` }">
      <template v-if="content">{{ content }}</template>
      <slot v-else name="content"/>

      <div v-if="arrow"
           :class="[
             'absolute w-2 h-2 rotate-45 bg-black',
             computedPosition.arrowClass
           ]"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  content?: string
  delay?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  arrow?: boolean
  width?: string | number
}>(), {
  delay: 0,
  position: 'top',
  arrow: true,
  width: 'auto'
})

const isVisible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
let timeoutId: NodeJS.Timeout | null = null

// Position classes for the tooltip
const positionClasses = {
  top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
  right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
  bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
  left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2'
}

// Arrow position classes for each tooltip position
const arrowClasses = {
  top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  right: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  left: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2'
}

// Define position fallback priority for each position
const positionPriority = {
  top: ['top', 'bottom', 'right', 'left'],
  right: ['right', 'left', 'top', 'bottom'],
  bottom: ['bottom', 'top', 'right', 'left'],
  left: ['left', 'right', 'top', 'bottom']
}

// Compute the optimal position for the tooltip based on viewport constraints
const computedPosition = computed(() => {
  if (!isVisible.value || !triggerRef.value || !tooltipRef.value) {
    return {
      positionClass: positionClasses[props.position],
      arrowClass: arrowClasses[props.position]
    }
  }

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const tooltipRect = tooltipRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Check if a given position has enough space in the viewport
  const checkPosition = (pos: 'top' | 'right' | 'bottom' | 'left') => {
    const margin = 8 // Safety margin from viewport edges

    switch (pos) {
      case 'top':
        return triggerRect.top > tooltipRect.height + margin
      case 'right':
        return triggerRect.right + tooltipRect.width + margin < viewportWidth
      case 'bottom':
        return triggerRect.bottom + tooltipRect.height + margin < viewportHeight
      case 'left':
        return triggerRect.left > tooltipRect.width + margin
      default:
        return false
    }
  }

  // Find first suitable position based on priority list
  const priorities = positionPriority[props.position] as Array<'top' | 'right' | 'bottom' | 'left'>
  const suitablePosition = priorities.find(checkPosition) || props.position

  return {
    positionClass: positionClasses[suitablePosition],
    arrowClass: arrowClasses[suitablePosition]
  }
})

// Start showing tooltip with delay
const startShowingTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    isVisible.value = true
  }, props.delay)
}

// Hide tooltip and clear timeout
const hideTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  isVisible.value = false
}

// Handle window resize to reposition tooltip if needed
const handleResize = () => {
  if (isVisible.value) {
    // Force position recalculation
    isVisible.value = false
    nextTick(() => {
      isVisible.value = true
    })
  }
}

// Setup window resize listener
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// Cleanup resize listener and timeouts
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>
