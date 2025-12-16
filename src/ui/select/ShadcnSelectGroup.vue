<template>
  <div class="select-group space-y-1 select-none">
    <div :class="['px-2 py-1.5 text-sm font-medium', glass ? (dark ? 'text-gray-200' : 'text-gray-700') : (dark ? 'text-gray-400' : 'text-gray-500')]">
      {{ label }}
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { defineProps, provide, withDefaults } from 'vue'
import { SelectGroupProps } from '@/ui/select/types.ts'

withDefaults(defineProps<SelectGroupProps>(), {
  dark: false,
  glass: false
})

provide('inGroup', true)
</script>
