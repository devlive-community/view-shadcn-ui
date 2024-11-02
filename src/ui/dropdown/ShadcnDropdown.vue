<template>
  <div ref="dropdownRef"
       class="relative inline-block"
       @mouseleave="trigger === 'hover' && (isOpen = false)">
    <!-- Trigger button -->
    <div @click="trigger === 'click' && onOpen()"
         @mouseenter="trigger === 'hover' && (isOpen = true)"
         class="inline-flex items-center justify-center cursor-pointer">
      <slot name="trigger"/>
    </div>

    <!-- Dropdown menu -->
    <Transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
      <div v-if="isOpen"
           :class="['absolute z-50 min-w-[8rem] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
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
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, ref } from 'vue'
import type { DropdownEmits, DropdownProps } from './types'
import { ArrangePosition } from '@/ui/common/position.ts'

const emit = defineEmits<DropdownEmits>()

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'click',
  position: ArrangePosition.left
})

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const positionClasses = computed(() => {
  switch (props.position) {
    case ArrangePosition.left:
      return 'left-0 mt-1 origin-top-left'
    case ArrangePosition.right:
      return 'right-0 mt-1 origin-top-right'
    case ArrangePosition.top:
      return 'bottom-full mb-1 left-0 origin-bottom-left'
    case ArrangePosition.bottom:
      return 'top-full mt-1 left-0 origin-top-left'
    default:
      return 'left-0 mt-1 origin-top-left'
  }
})

const dropdownStyle = computed(() => {
  switch (props.position) {
    case ArrangePosition.right:
      return {
        transform: 'translateX(0)'
      }
    default:
      return {}
  }
})

const onOpen = (event?: MouseEvent) => {
  if (event && props.trigger === 'click') {
    event.stopPropagation()
  }
  isOpen.value = !isOpen.value
  emit('on-open', isOpen.value)
}

const onClose = () => {
  isOpen.value = false
  emit('on-close', isOpen.value)
}

const onClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    if (isOpen.value) {
      onClose()
      emit('on-click-outside', true)
    }
  }
}

provide('closeDropdown', onClose)

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>
