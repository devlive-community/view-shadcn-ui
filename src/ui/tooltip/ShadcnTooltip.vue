<template>
  <div class="relative inline-block" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <div ref="tooltipTrigger">
      <slot/>
    </div>

    <Teleport to="body">
      <div v-if="isVisible"
           ref="tooltipContent"
           class="fixed z-[100] px-3 py-2 text-sm text-white bg-black rounded shadow-lg"
           :style="tooltipStyle">
        <slot v-if="$slots.content" name="content"/>
        <div v-else>{{ content }}</div>

        <div v-if="arrow"
             :class="[ 'absolute w-2.5 h-2.5 rotate-45 bg-black']"/>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { TooltipProps } from '@/ui/tooltip/types.ts'
import { getBottomPosition, getLeftPosition, getRightPosition, getTopPosition } from '@/utils/position.ts'

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
  arrow: false
})

const isVisible = ref(false)

// Tooltip trigger element reference
const tooltipTrigger = ref<HTMLElement | null>(null)
// Tooltip content element reference
const tooltipContent = ref<HTMLElement | null>(null)
// Tooltip style object
const tooltipStyle = ref({})

// Show Tooltip
const showTooltip = () => {
  isVisible.value = true
  nextTick(updatePosition)
}

// Hide Tooltip
const hideTooltip = () => {
  isVisible.value = false
}

// Positioning function mapping
const positionFunctions = {
  top: (trigger: DOMRect, content: DOMRect) => getTopPosition(trigger, content, 5, true),
  bottom: (trigger: DOMRect, content: DOMRect) => getBottomPosition(trigger, content, 5, true),
  left: (trigger: DOMRect, content: DOMRect) => getLeftPosition(trigger, content, 5, true, props.position),
  right: (trigger: DOMRect, content: DOMRect) => getRightPosition(trigger, content, 5, true, props.position)
}

// Update Tooltip position
const updatePosition = async () => {
  if (!tooltipContent.value || !tooltipTrigger.value) {
    return
  }

  const triggerRect = tooltipTrigger.value.getBoundingClientRect()
  await nextTick()  // Wait for the DOM to update

  const contentRect = tooltipContent.value.getBoundingClientRect()
  tooltipStyle.value = positionFunctions[props.position]?.(triggerRect, contentRect) || {}
}

// Update Tooltip position on window resize
const handleResize = () => {
  if (isVisible.value) {
    updatePosition()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
