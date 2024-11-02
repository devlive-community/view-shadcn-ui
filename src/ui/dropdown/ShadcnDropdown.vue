<template>
  <div class="relative inline-block" @mouseleave="trigger === 'hover' && (isOpen = false)">
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
           class="absolute z-50 mt-2 min-w-[8rem] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
import { provide, ref } from 'vue'
import type { DropdownEmits, DropdownProps } from './types'

const emit = defineEmits<DropdownEmits>()

withDefaults(defineProps<DropdownProps>(), {
  trigger: 'click'
})

const isOpen = ref(false)

const onOpen = () => {
  isOpen.value = !isOpen.value
  emit('on-open', isOpen.value)
}

const onClose = () => {
  isOpen.value = false
  emit('on-close', isOpen.value)
}

// Provide close function to child components
provide('closeDropdown', onClose)
</script>
