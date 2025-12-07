<template>
  <div v-if="divided" :class="['h-px my-1', isDark ? 'bg-gray-600' : 'bg-gray-100']"/>
  <div @click="handleClick"
       :id="name"
       :class="[ 'block px-4 py-2 text-sm',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                !isDark ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-gray-200 hover:bg-gray-600 hover:text-white',
                active && !isDark ? 'bg-gray-100 text-gray-900' : '',
                active && isDark ? 'bg-gray-600 text-white' : ''
      ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { DropdownItemEmits, DropdownItemProps } from '@/ui/dropdown/types.ts'
import { generateRandomId } from '@/utils/common.ts'

const emit = defineEmits<DropdownItemEmits>()

const closeDropdown = inject('closeDropdown') as () => void
const dropdownDark = inject('dropdownDark', ref(false))

const props = withDefaults(defineProps<DropdownItemProps>(), {
  name: generateRandomId(),
  disabled: false,
  active: false,
  dark: false
})

const isDark = computed(() => props.dark || dropdownDark.value)

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('on-click', event)
    closeDropdown()
  }
}
</script>
