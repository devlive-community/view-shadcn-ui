<template>
  <div @click="onClick"
       :class="[
           'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
           {
             'text-gray-200': dark,
             'hover:bg-gray-700 focus:bg-gray-700': dark && !glass,
             'hover:bg-white/10 focus:bg-white/10': dark && glass,
             'hover:bg-gray-100 focus:bg-gray-100': !dark && !glass,
             'hover:bg-white/20 focus:bg-white/20': !dark && glass,
             'opacity-50 cursor-not-allowed': disabled
           }
       ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { ContextMenuItemEmits, ContextMenuItemProps } from './types'
import { computed, inject } from 'vue'

const props = withDefaults(defineProps<ContextMenuItemProps>(), {
  disabled: false,
  dark: false
})

const injectedDark = inject('contextMenuDark', computed(() => false))
const dark = computed(() => props.dark || injectedDark.value)

const injectedGlass = inject('contextMenuGlass', computed(() => false))
const glass = computed(() => injectedGlass.value)

const closeMenu = inject('closeMenu') as () => void

const emit = defineEmits<ContextMenuItemEmits>()

const onClick = () => {
  if (!props.disabled) {
    emit('on-click')
    closeMenu()
  }
}
</script>
