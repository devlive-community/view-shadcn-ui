// ShadcnContextMenu.vue
<template>
  <div ref="triggerRef" @contextmenu.prevent="onContextMenu">
    <slot name="trigger"/>
  </div>

  <Teleport to="body">
    <div v-if="modelValue"
         ref="menuRef"
         class="fixed min-w-[8rem] z-50 bg-white rounded-md shadow-lg border border-gray-200 p-1"
         :style="menuStyle">
      <slot/>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, defineEmits, onMounted, onUnmounted, provide, ref } from 'vue'
import { ContextMenuEmits, ContextMenuProps } from './types'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits<ContextMenuEmits>()

const props = withDefaults(defineProps<ContextMenuProps>(), {
  modelValue: false
})

const menuPosition = ref({ x: 0, y: 0 })
const menuRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)

// Calculate the position of the menu, handle boundary cases
const menuStyle = computed(() => {
  if (!menuRef.value) {
    return {
      left: calcSize(menuPosition.value.x),
      top: calcSize(menuPosition.value.y)
    }
  }

  const menuRect = menuRef.value.getBoundingClientRect()
  const menuWidth = menuRect.width
  const menuHeight = menuRect.height

  // Get the window size
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Calculate the final position
  let x = menuPosition.value.x
  let y = menuPosition.value.y

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

provide('menuPosition', menuPosition)

const closeMenu = () => {
  emit('update:modelValue', false)
  emit('on-close', false)
}
provide('closeMenu', closeMenu)

// Handle right-click events
const onContextMenu = (event) => {
  event.preventDefault()
  menuPosition.value = {
    x: event.clientX,
    y: event.clientY
  }
  emit('update:modelValue', true)
  emit('on-open', true)
}

// Handle clicking on the external close menu
const onClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    emit('update:modelValue', false)
    emit('on-close', false)
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
