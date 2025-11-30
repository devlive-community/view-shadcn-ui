<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div :class="[
              'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
              {
                'text-gray-200 hover:bg-gray-700 focus:bg-gray-700': dark,
                'hover:bg-gray-100 focus:bg-gray-100': !dark,
                'opacity-50 cursor-not-allowed': disabled
              }
          ]">
      <slot name="title">
        {{ label }}
      </slot>

      <svg :class="['ml-auto h-4 w-4', dark ? 'text-gray-400' : 'text-gray-600']"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"/>
      </svg>
    </div>

    <Transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
      <div v-show="isHovered"
           ref="subMenuRef"
           :class="['absolute min-w-[8rem] rounded-md border p-1 shadow-md',
                    dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
           ]"
           :style="subMenuStyle">
        <slot/>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, inject, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ContextMenuItemProps } from './types'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<ContextMenuItemProps>(), {
  disabled: false,
  dark: false
})

const injectedDark = inject('contextMenuDark', computed(() => false))
const dark = computed(() => props.dark || injectedDark.value)

const isHovered = ref(false)
const subMenuRef = ref<HTMLElement | null>(null)
const position = ref({ x: 0, y: 0 })

// Calculates submenu styles
const subMenuStyle = computed<CSSProperties>(() => {
  return {
    position: 'fixed',
    left: position.value.x ? calcSize(position.value.x) : '100%',
    top: position.value.y ? calcSize(position.value.y) : '0'
  }
})

// Update the submenu position
const updatePosition = async () => {
  if (!subMenuRef.value || !isHovered.value) {
    return
  }

  await nextTick()
  const parentRect = subMenuRef.value.parentElement?.getBoundingClientRect()
  const subMenuRect = subMenuRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  if (!parentRect) {
    return
  }

  // It is displayed on the right by default
  let x = parentRect.right + 4
  let y = parentRect.top

  // If there is not enough space on the right, it is displayed on the left
  if (x + subMenuRect.width > viewportWidth) {
    x = parentRect.left - subMenuRect.width - 4
  }

  // Handle the top boundary
  if (y < 0) {
    y = 4
  }

  // Handle the bottom boundary
  if (y + subMenuRect.height > viewportHeight) {
    y = viewportHeight - subMenuRect.height - 4
  }

  position.value = { x, y }
}

const onMouseEnter = () => {
  if (!props.disabled) {
    isHovered.value = true
    updatePosition()
  }
}

const onMouseLeave = () => {
  if (!props.disabled) {
    isHovered.value = false
  }
}

// Listens for changes in the size of the monitoring window
const handleResize = () => {
  if (isHovered.value) {
    updatePosition()
  }
}

// Listen for isHovered changes and update the position
watch(isHovered, (newVal) => {
  if (newVal) {
    updatePosition()
  }
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
