<template>
  <div v-if="visible"
       :class="['fixed flex space-x-2 items-center top-5 left-1/2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md text-sm text-gray-700 z-50',
                isLeaving ? 'animate-slide-up' : 'animate-slide-down',
        ]">
    <ShadcnIcon v-if="showIcon" icon="Info" size="16"/>
    <slot v-if="$slots.default"/>
    <span v-else>{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onUnmounted, ref } from 'vue'
import ShadcnIcon from '@/ui/icon'

const emit = defineEmits(['on-close'])

const props = withDefaults(defineProps<{
  content?: string
  duration?: number
  showIcon?: boolean
  onClose?: () => void
}>(), {
  duration: 1500,
  showIcon: false
})

const visible = ref(true)
const isLeaving = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const onClose = () => {
  isLeaving.value = true
  timer = setTimeout(() => {
    visible.value = false
    emit('on-close')
    if (props.onClose) {
      props.onClose()
    }
  }, 300)
}

// Set a timer to hide messages
if (props.duration) {
  setTimeout(() => {
    onClose()
  }, props.duration)
}

// Clear possible timers to prevent memory leaks
onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
  visible.value = false
})
</script>
