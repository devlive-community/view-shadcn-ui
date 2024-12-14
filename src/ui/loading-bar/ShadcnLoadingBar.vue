<template>
  <div class="w-full bg-gray-200 overflow-hidden">
    <div role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         :aria-valuenow="modelValue"
         :style="barStyle">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { LoadingBarEmits, LoadingBarProps } from './types'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<LoadingBarProps>(), {
  modelValue: 0,
  height: 2,
  color: '#2563eb',
  duration: 300,
  animate: true
})

const emits = defineEmits<LoadingBarEmits>()

const barStyle = computed(() => ({
  height: calcSize(props.height),
  width: `${ props.modelValue }%`,
  backgroundColor: props.color,
  transition: props.animate ? `width ${ Number(props.duration) }ms ease-in-out` : 'none'
}))

watch(() => props.modelValue, (newValue) => {
  if (newValue === 100) {
    setTimeout(() => {
      emits('on-complete')
    }, Number(props.duration))
  }
})
</script>
