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
    <Teleport to="body">
      <Transition enter-active-class="transition duration-200 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
        <div v-if="isOpen"
             :class="['fixed z-50 min-w-[8rem] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
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
import { computed, nextTick, onMounted, onUnmounted, provide, ref } from 'vue'
import type { DropdownEmits, DropdownProps } from './types'
import { ArrangePosition } from '@/ui/common/position.ts'

const emit = defineEmits<DropdownEmits>()

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'click',
  position: ArrangePosition.left
})

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const updateDropdownPosition = async () => {
  if (!dropdownRef.value || !isOpen.value) {
    return
  }

  await nextTick()

  const trigger = dropdownRef.value
  const rect = trigger.getBoundingClientRect()
  const dropdownMenu = document.querySelector('.fixed') as HTMLElement

  if (!dropdownMenu) {
    return
  }

  switch (props.position) {
    case ArrangePosition.left:
      dropdownMenu.style.left = `${ rect.left }px`
      dropdownMenu.style.top = `${ rect.bottom + 4 }px`
      break
    case ArrangePosition.right:
      dropdownMenu.style.right = `${ window.innerWidth - rect.right }px`
      dropdownMenu.style.top = `${ rect.bottom + 4 }px`
      break
    case ArrangePosition.top:
      dropdownMenu.style.left = `${ rect.left }px`
      dropdownMenu.style.bottom = `${ window.innerHeight - rect.top + 4 }px`
      break
    case ArrangePosition.bottom:
      dropdownMenu.style.left = `${ rect.left }px`
      dropdownMenu.style.top = `${ rect.bottom + 4 }px`
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

const onClose = () => {
  isOpen.value = false
  emit('on-close', isOpen.value)
}

const onClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    const dropdownMenu = document.querySelector('.fixed')
    if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
      if (isOpen.value) {
        onClose()
        emit('on-click-outside', true)
      }
    }
  }
}

provide('closeDropdown', onClose)

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  window.addEventListener('scroll', updateDropdownPosition)
  window.addEventListener('resize', updateDropdownPosition)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  window.removeEventListener('scroll', updateDropdownPosition)
  window.removeEventListener('resize', updateDropdownPosition)
})
</script>
