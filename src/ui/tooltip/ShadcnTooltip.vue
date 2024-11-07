<template>
  <div class="relative inline-block" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <div ref="tooltipTrigger">
      <slot/>
    </div>

    <Teleport to="body">
      <div v-if="isVisible"
           ref="tooltipContent"
           class="fixed z-[100] px-3 py-2 text-sm text-white bg-black rounded shadow-lg"
           :style="[tooltipStyle, { maxWidth: computedMaxWidth }]">
        <div class="text-center break-words">
          <slot v-if="$slots.content" name="content"/>
          <div v-else>{{ content }}</div>
        </div>

        <div v-if="arrow"
             :class="['absolute w-2.5 h-2.5 rotate-45 bg-black',
                      arrowPositionClass
             ]"
             :style="arrowStyle"/>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { TooltipProps } from '@/ui/tooltip/types.ts'
import { getBottomPosition, getLeftPosition, getRightPosition, getTopPosition } from '@/utils/position.ts'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
  arrow: false,
  maxWidth: '250px',
  delay: 0
})

const isVisible = ref(false)
const tooltipTrigger = ref<HTMLElement | null>(null)
const tooltipContent = ref<HTMLElement | null>(null)
const tooltipStyle = ref({})
const arrowStyle = ref({})

const computedMaxWidth = computed(() => {
  return calcSize(props.maxWidth)
})

// Computed property for arrow positioning classes
const arrowPositionClass = computed(() => {
  switch (props.position) {
    case 'top':
      return 'bottom-[-5px] left-1/2 -translate-x-1/2 rotate-45'
    case 'bottom':
      return 'top-[-5px] left-1/2 -translate-x-1/2 rotate-45'
    case 'left':
      return 'right-[-5px] top-1/2 -translate-y-1/2 rotate-45'
    case 'right':
      return 'left-[-5px] top-1/2 -translate-y-1/2 rotate-45'
    default:
      return ''
  }
})

const showTooltip = () => {
  setTimeout(() => {
    isVisible.value = true
    nextTick(updatePosition)
  }, props.delay)
}

const hideTooltip = () => {
  isVisible.value = false
}

const positionFunctions = {
  top: (trigger: DOMRect, content: DOMRect) => {
    const pos = getTopPosition(trigger, content, 8, true)
    return pos
  },
  bottom: (trigger: DOMRect, content: DOMRect) => {
    const pos = getBottomPosition(trigger, content, 8, true)
    return pos
  },
  left: (trigger: DOMRect, content: DOMRect) => {
    const pos = getLeftPosition(trigger, content, 8, true, props.position)
    return pos
  },
  right: (trigger: DOMRect, content: DOMRect) => {
    const pos = getRightPosition(trigger, content, 8, true, props.position)
    return pos
  }
}

const updatePosition = async () => {
  if (!tooltipContent.value || !tooltipTrigger.value) {
    return
  }

  const triggerRect = tooltipTrigger.value.getBoundingClientRect()
  await nextTick()

  const contentRect = tooltipContent.value.getBoundingClientRect()
  tooltipStyle.value = positionFunctions[props.position]?.(triggerRect, contentRect) || {}
}

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
