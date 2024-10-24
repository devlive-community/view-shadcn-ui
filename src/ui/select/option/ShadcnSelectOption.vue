<template>
  <div :class="cn('flex items-center p-2 cursor-pointer hover:bg-gray-200 h-8',
                  isSelected && 'text-blue-600')"
       @click="onClick">
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { cn } from '@/lib/utils.ts'

const emit = defineEmits(['select'])

const props = defineProps<{
  value: any
  label: string
  isSelected: boolean
}>()

const onClick = () => {
  emit('select', { value: props.value, label: props.label })
}
</script>
