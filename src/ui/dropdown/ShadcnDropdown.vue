<template>
  <div ref="dropdownRef"
       class="relative inline-block">
    <!-- Trigger button -->
    <div ref="triggerRef"
         @click="trigger === 'click' && onOpen()"
         @mouseenter="trigger === 'hover' && onHover()"
         @mouseleave="trigger === 'hover' && handleTriggerMouseLeave()"
         class="inline-flex items-center justify-center cursor-pointer">
      <slot name="trigger"/>
    </div>

    <!-- Dropdown menu -->
    <Teleport to="body">
      <Transition enter-active-class="transition duration-200 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
        <div v-if="isOpen"
             ref="menuRef"
             @mouseenter="trigger === 'hover' && onMenuMouseEnter()"
             @mouseleave="trigger === 'hover' && onMenuMouseLeave()"
             :class="['fixed z-50 min-w-[8rem] rounded-md shadow-lg ring-1 focus:outline-none',
                 glass && 'backdrop-blur-xl backdrop-saturate-150',
                 glass && (dark ? 'bg-white/10 ring-white/20' : 'bg-white/30 ring-gray-400/40'),
                 !glass && (dark ? 'bg-gray-700 ring-gray-600' : 'bg-white ring-black ring-opacity-5'),
                 positionClasses
            ]"
             :style="dropdownStyle">
          <div v-if="$slots.list" class="py-1">
            <slot name="list" :close="onClose"/>
          </div>
          <div v-else class="py-1">
            <slot :close="onClose"/>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, provide, ref, toRef } from 'vue'
import type { DropdownEmits, DropdownProps } from './types'
import { ArrangePosition } from '@/ui/common/position.ts'

const emit = defineEmits<DropdownEmits>()

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'click',
  position: ArrangePosition.left,
  dark: false,
  glass: false
})

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
let closeTimer: NodeJS.Timeout | null = null

const updateDropdownPosition = async () => {
  if (!triggerRef.value || !isOpen.value) {
    return
  }

  await nextTick()
  await nextTick()

  if (!menuRef.value) {
    return
  }

  const trigger = triggerRef.value
  const rect = trigger.getBoundingClientRect()
  const dropdownMenu = menuRef.value

  switch (props.position) {
    case ArrangePosition.left:
      dropdownMenu.style.left = `${ rect.left }px`
      dropdownMenu.style.top = `${ rect.bottom + 4 }px`
      dropdownMenu.style.right = 'auto'
      dropdownMenu.style.bottom = 'auto'
      break
    case ArrangePosition.right:
      dropdownMenu.style.left = 'auto'
      dropdownMenu.style.right = `${ window.innerWidth - rect.right }px`
      dropdownMenu.style.top = `${ rect.bottom + 4 }px`
      dropdownMenu.style.bottom = 'auto'
      break
    case ArrangePosition.top:
      dropdownMenu.style.left = `${ rect.left }px`
      dropdownMenu.style.bottom = `${ window.innerHeight - rect.top + 4 }px`
      dropdownMenu.style.right = 'auto'
      dropdownMenu.style.top = 'auto'
      break
    case ArrangePosition.bottom:
      dropdownMenu.style.left = `${ rect.left }px`
      dropdownMenu.style.top = `${ rect.bottom + 4 }px`
      dropdownMenu.style.right = 'auto'
      dropdownMenu.style.bottom = 'auto'
      break
  }
}

const positionClasses = computed(() => {
  return 'min-w-[8rem]'
})

const dropdownStyle = computed(() => {
  return {}
})

const onOpen = async (event?: MouseEvent) => {
  if (event && props.trigger === 'click') {
    event.stopPropagation()
  }
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await updateDropdownPosition()
  }
  emit('on-open', isOpen.value)
}

const onHover = async () => {
  isOpen.value = true
  await updateDropdownPosition()
  emit('on-open', isOpen.value)
}

const onClose = () => {
  isOpen.value = false
  emit('on-close', isOpen.value)
}

const handleTriggerMouseLeave = () => {
  if (props.trigger === 'hover') {
    closeTimer = setTimeout(() => {
      onClose()
    }, 100)
  }
}

const onMenuMouseEnter = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const onMenuMouseLeave = () => {
  if (props.trigger === 'hover') {
    onClose()
  }
}

const onClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
      if (isOpen.value) {
        onClose()
        emit('on-click-outside', true)
      }
    }
  }
}

provide('closeDropdown', onClose)
provide('dropdownDark', toRef(props, 'dark'))
provide('dropdownGlass', toRef(props, 'glass'))

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  window.addEventListener('scroll', updateDropdownPosition)
  window.addEventListener('resize', updateDropdownPosition)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  window.removeEventListener('scroll', updateDropdownPosition)
  window.removeEventListener('resize', updateDropdownPosition)
  if (closeTimer) {
    clearTimeout(closeTimer)
  }
})
</script>
