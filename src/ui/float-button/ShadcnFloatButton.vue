<template>
  <div class="relative">
    <button :class="[
                'fixed flex items-center justify-center p-2 border shadow-md transition-all duration-300 hover:scale-105',
                dark ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-200 text-gray-900',
                circle && 'rounded-full'
            ]"
            :style="positionStyle"
            @click="handleClick"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave">
      <slot v-if="$slots.icon" name="icon"/>
      <slot v-else/>
    </button>

    <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95">
      <div v-if="isMenuVisible && $slots.menu"
           :class="[
                'fixed z-50 border rounded shadow-lg',
                dark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200',
                getMenuPositionClasses
           ]"
           :style="menuStyle"
           @mouseenter="handleMouseEnter"
           @mouseleave="startHideTimer">
        <slot name="menu"/>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { type FloatButtonEmits, type FloatButtonProps } from './types'
import { calcSize } from '@/utils/common'

const props = withDefaults(defineProps<FloatButtonProps>(), {
  position: 'bottom-right',
  circle: false,
  top: 40,
  left: 40,
  right: 40,
  bottom: 40,
  trigger: 'hover',
  dark: false
})

const emit = defineEmits<FloatButtonEmits>()

const isMenuVisible = ref(false)
const hideTimer = ref<NodeJS.Timeout | null>(null)

const positionStyle = computed(() => {
  switch (props.position) {
    case 'top-left':
      return {
        top: calcSize(props.top),
        left: calcSize(props.left)
      }
    case 'top-right':
      return {
        top: calcSize(props.top),
        right: calcSize(props.right)
      }
    case 'bottom-left':
      return {
        bottom: calcSize(props.bottom),
        left: calcSize(props.left)
      }
    case 'bottom-right':
    default:
      return {
        bottom: calcSize(props.bottom),
        right: calcSize(props.right)
      }
  }
})

const menuStyle = computed(() => {
  return positionStyle.value
})

const getMenuPositionClasses = computed(() => {
  switch (props.position) {
    case 'top-left':
      return 'mt-12 ml-0'
    case 'top-right':
      return 'mt-12 mr-0'
    case 'bottom-left':
      return 'mb-12 ml-0'
    case 'bottom-right':
    default:
      return 'mb-12 mr-0'
  }
})

const handleClick = () => {
  if (props.trigger === 'click') {
    toggleMenu()
  }
}

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    clearHideTimer()
    showMenu()
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    startHideTimer()
  }
}

const clearHideTimer = () => {
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
    hideTimer.value = null
  }
}

const startHideTimer = () => {
  clearHideTimer()
  hideTimer.value = setTimeout(() => {
    hideMenu()
  }, 200)
}

const showMenu = () => {
  isMenuVisible.value = true
  emit('on-menu-visible', true)
}

const hideMenu = () => {
  isMenuVisible.value = false
  emit('on-menu-visible', false)
}

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
  emit('on-menu-visible', isMenuVisible.value)
}
</script>
