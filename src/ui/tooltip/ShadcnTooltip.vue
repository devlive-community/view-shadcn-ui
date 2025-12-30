<template>
  <div class="relative inline-block w-fit" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <div ref="tooltipTrigger">
      <slot/>
    </div>

    <Teleport to="body">
      <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0">
        <div v-if="isVisible"
             ref="tooltipContent"
             :class="['fixed z-[100] px-3 py-2 text-sm rounded shadow-lg',
                      glass && 'backdrop-blur-xl backdrop-saturate-150',
                      glass && (dark ? 'bg-white/10 border border-white/20 text-gray-100' : 'bg-white/30 border border-gray-400/40 text-gray-800'),
                      !glass && (dark ? 'text-gray-100 bg-gray-800' : 'text-white bg-black')
             ]"
             :style="[tooltipStyle, { maxWidth: computedMaxWidth }]">
          <div class="text-center break-words">
            <slot v-if="$slots.content" name="content"/>
            <div v-else v-html="content"/>
          </div>

          <div v-if="arrow"
               :class="['absolute w-2.5 h-2.5 rotate-45',
                        glass && (dark ? 'bg-white/10 border-r border-b border-white/20' : 'bg-white/30 border-r border-b border-gray-400/40'),
                        !glass && (dark ? 'bg-gray-800' : 'bg-black'),
                        arrowPositionClass
               ]"
               :style="arrowStyle"/>
        </div>
      </Transition>
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
  delay: 0,
  dark: false,
  glass: false
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
    const pos = getTopPosition(trigger, content, 8)
    return pos
  },
  bottom: (trigger: DOMRect, content: DOMRect) => {
    const pos = getBottomPosition(trigger, content, 8)
    return pos
  },
  left: (trigger: DOMRect, content: DOMRect) => {
    const pos = getLeftPosition(trigger, content, 8, props.position)
    return pos
  },
  right: (trigger: DOMRect, content: DOMRect) => {
    const pos = getRightPosition(trigger, content, 8, props.position)
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