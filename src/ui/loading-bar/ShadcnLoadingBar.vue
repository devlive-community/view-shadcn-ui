<template>
  <div class="w-full bg-gray-200 overflow-hidden">
    <div role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         :aria-valuenow="modelValue"
         :style="barStyle"
         :class="statusClasses">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { LoadingBarEmits, LoadingBarProps } from './types'
import { calcSize } from '@/utils/common.ts'

const emits = defineEmits<LoadingBarEmits>()
const props = withDefaults(defineProps<LoadingBarProps>(), {
  modelValue: 0,
  height: 2,
  color: '#2563eb',
  duration: 300,
  animate: true,
  status: 'default'
})

const getStatusColor = (status: LoadingBarProps['status']) => {
  switch (status) {
    case 'success':
      return '#22c55e' // Tailwind green-500
    case 'error':
      return '#ef4444' // Tailwind red-500
    default:
      return props.color
  }
}

const barStyle = computed(() => ({
  height: calcSize(props.height),
  width: `${ props.modelValue }%`,
  backgroundColor: getStatusColor(props.status),
  transition: props.animate ? `width ${ Number(props.duration) }ms ease-in-out, background-color ${ Number(props.duration) }ms ease-in-out` : 'none'
}))

const statusClasses = computed(() => ({
  'transition-colors': props.animate
}))

watch(() => props.modelValue, (newValue) => {
  if (newValue === 100) {
    setTimeout(() => {
      emits('on-complete')
    }, Number(props.duration))
  }
})
</script>
