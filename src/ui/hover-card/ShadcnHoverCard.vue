<template>
  <div class="relative inline-block"
       @mouseenter="showContext"
       @mouseleave="handleTriggerLeave">
    <div ref="tooltipTrigger">
      <slot/>
    </div>

    <Teleport to="body">
      <Transition enter-active-class="transition duration-200 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
        <div v-if="isVisible"
             ref="tooltipContent"
             class="fixed z-[100] text-sm text-black rounded border border-gray-200 bg-white shadow-lg"
             :style="[tooltipStyle, { maxWidth: computedMaxWidth }]"
             @mouseenter="handleContentEnter"
             @mouseleave="handleContentLeave">

          <div v-if="$slots.title" class="text-lg font-semibold leading-none tracking-tight border-b px-3 py-2">
            <slot name="title"/>
          </div>

          <slot name="content">
            <div class="text-center break-words px-3 py-2">
              {{ content }}
            </div>
          </slot>

          <div v-if="$slots.footer" class="border-t px-3 py-2">
            <slot name="footer"/>
          </div>

          <div v-if="arrow"
               :class="['absolute w-2.5 h-2.5 bg-white border-inherit',
                      arrowPositionClass
               ]"
               :style="arrowStyle"/>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { getBottomPosition, getLeftPosition, getRightPosition, getTopPosition } from '@/utils/position.ts'
import { calcSize } from '@/utils/common.ts'
import { HoverCardProps } from '@/ui/hover-card/types.ts'

const props = withDefaults(defineProps<HoverCardProps>(), {
  position: 'top',
  arrow: true,
  maxWidth: '250px',
  delay: 0
})

const isVisible = ref(false)
const tooltipTrigger = ref<HTMLElement | null>(null)
const tooltipContent = ref<HTMLElement | null>(null)
const tooltipStyle = ref({})
const arrowStyle = ref({})
const isHoveringContent = ref(false)
const hideTimeout = ref<any | null>(null)

const computedMaxWidth = computed(() => {
  return calcSize(props.maxWidth)
})

const arrowPositionClass = computed(() => {
  const positionClasses = {
    'top': [
      'bottom-[-5px]',
      'left-1/2',
      '-translate-x-1/2',
      'rotate-45',
      'border-r',
      'border-b'
    ],
    'bottom': [
      'top-[-5px]',
      'left-1/2',
      '-translate-x-1/2',
      'rotate-45',
      'border-l',
      'border-t'
    ],
    'left': [
      'right-[-5px]',
      'top-1/2',
      '-translate-y-1/2',
      'rotate-45',
      'border-t',
      'border-r'
    ],
    'right': [
      'left-[-5px]',
      'top-1/2',
      '-translate-y-1/2',
      'rotate-45',
      'border-b',
      'border-l'
    ]
  }

  return [...positionClasses[props.position]]
})

const clearHideTimeout = () => {
  if (hideTimeout.value !== null) {
    clearTimeout(hideTimeout.value)
    hideTimeout.value = null
  }
}

const showContext = () => {
  clearHideTimeout()
  if (!isVisible.value) {
    setTimeout(() => {
      isVisible.value = true
      nextTick(updatePosition)
    }, props.delay)
  }
}

const hideContext = () => {
  clearHideTimeout()
  hideTimeout.value = setTimeout(() => {
    if (!isHoveringContent.value) {
      isVisible.value = false
    }
  }, 50) // Add a small delay to ensure that the mouse has time to move to the content area
}

const handleContentEnter = () => {
  clearHideTimeout()
  isHoveringContent.value = true
}

const handleContentLeave = () => {
  isHoveringContent.value = false
  hideContext()
}

const handleTriggerLeave = () => {
  hideContext()
}

watch(isHoveringContent, (newValue) => {
  if (!newValue && !isVisible.value) {
    clearHideTimeout()
  }
})

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
  clearHideTimeout()
})
</script>
