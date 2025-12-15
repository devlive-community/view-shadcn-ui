<template>
  <div ref="triggerRef" @contextmenu.prevent="onContextMenu">
    <slot name="trigger"/>
  </div>

  <Teleport to="body">
    <div v-if="modelValue"
         ref="menuRef"
         :class="['fixed min-w-[8rem] z-50 rounded-md border p-1',
                  glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                  glass ? 'border-white/20' : (dark ? 'border-gray-700' : 'border-gray-200'),
                  glass ? (dark ? 'bg-white/10' : 'bg-white/60') : (dark ? 'bg-gray-800' : 'bg-white'),
                  glass ? 'shadow-lg shadow-black/5' : 'shadow-lg'
         ]"
         :style="menuStyle">
      <slot/>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, defineEmits, onMounted, onUnmounted, provide, ref, watch } from 'vue'
import { ContextMenuEmits, ContextMenuProps } from './types'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits<ContextMenuEmits>()

const props = withDefaults(defineProps<ContextMenuProps>(), {
  modelValue: false,
  position: undefined,
  dark: false,
  glass: false
})

const menuPosition = ref({ x: 0, y: 0 })
const menuRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)

// Watch for manual position changes
watch(() => props.position, (newPos) => {
  if (newPos) {
    menuPosition.value = newPos
  }
}, { immediate: true })

// Calculate the position of the menu, handle boundary cases
const menuStyle = computed(() => {
  const position = props.position || menuPosition.value

  if (!menuRef.value) {
    return {
      left: calcSize(position.x),
      top: calcSize(position.y)
    }
  }

  const menuRect = menuRef.value.getBoundingClientRect()
  const menuWidth = menuRect.width
  const menuHeight = menuRect.height

  // Get the window size
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Calculate the final position
  let x = position.x
  let y = position.y

  // Handle the right boundary
  if (x + menuWidth > viewportWidth) {
    x = viewportWidth - menuWidth - 10
  }

  if (x < 0) {
    x = 8
  }

  if (y + menuHeight > viewportHeight) {
    y = viewportHeight - menuHeight - 8
  }

  if (y < 0) {
    y = 8
  }

  return {
    left: calcSize(x),
    top: calcSize(y)
  }
})

// Handle right-click events
const onContextMenu = (event) => {
  // If a manual location is provided, the default right-click event is not processed
  if (props.position) {
    return
  }
  event.preventDefault()
  menuPosition.value = {
    x: event.clientX,
    y: event.clientY
  }
  emit('update:modelValue', true)
  emit('on-open', true)
}

const closeMenu = () => {
  emit('update:modelValue', false)
  emit('on-close', false)
}
provide('closeMenu', closeMenu)
provide('contextMenuDark', computed(() => props.dark))
provide('contextMenuGlass', computed(() => props.glass))

// Handle clicking on the external close menu
const onClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    closeMenu()
  }
}

const handleResize = () => {
  if (props.modelValue) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>
