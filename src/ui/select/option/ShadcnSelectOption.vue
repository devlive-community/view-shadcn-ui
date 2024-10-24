<template>
  <div :class="['flex items-center p-2 hover:bg-gray-200 h-8',
                 {
                   'cursor-not-allowed opacity-50': disabled,
                   'cursor-pointer': !disabled,
                   'text-blue-600': isSelected
                 }
               ]"
       @click="onClick">
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['select'])

const props = defineProps<{
  value: any
  label: string
  isSelected: boolean
  disabled?: boolean
}>()

const onClick = () => {
  if (!props.disabled) {
    emit('select', { value: props.value, label: props.label })
  }
}
</script>
