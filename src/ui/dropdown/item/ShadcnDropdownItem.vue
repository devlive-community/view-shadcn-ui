<template>
  <div @click="handleClick"
       :id="name"
       :class="[ 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                active ? 'bg-gray-100 text-gray-900' : ''
      ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { DropdownItemEmits, DropdownItemProps } from '@/ui/dropdown/types.ts'
import { generateRandomId } from '@/utils/common.ts'

const emit = defineEmits<DropdownItemEmits>()

const closeDropdown = inject('closeDropdown') as () => void

const props = withDefaults(defineProps<DropdownItemProps>(), {
  name: generateRandomId(),
  disabled: false,
  active: false
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('on-click', event)
    closeDropdown()
  }
}
</script>
