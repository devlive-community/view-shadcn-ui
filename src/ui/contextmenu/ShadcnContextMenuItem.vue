<template>
  <div @click="onClick"
       class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { ContextMenuItemEmits } from './types'
import { inject } from 'vue'

const closeMenu = inject('closeMenu') as () => void

const emit = defineEmits<ContextMenuItemEmits>()

const onClick = () => {
  emit('on-click')
  closeMenu()
}
</script>
