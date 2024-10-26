<template>
  <div v-if="visible"
       :class="['fixed flex space-x-2 items-center top-5 left-1/2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md text-sm text-gray-700 z-50',
                isLeaving ? 'animate-slide-up' : 'animate-slide-down',
        ]">
    <ShadcnIcon v-if="showIcon"
                size="16"
                :class="[type === 'loading' ? 'animate-spin' : '',
                        [findClass()]
                ]"
                :icon="findIcon()"/>
    <slot v-if="$slots.default"/>
    <span v-else>{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onUnmounted, ref } from 'vue'
import ShadcnIcon from '@/ui/icon'
import { MessageType } from '@/ui/common/type.ts'

const emit = defineEmits(['on-close'])

const props = withDefaults(defineProps<{
  content?: string
  duration?: number
  showIcon?: boolean
  type: keyof typeof MessageType
  onClose?: () => void
}>(), {
  duration: 1500,
  showIcon: false,
  type: 'info'
})

const visible = ref(true)
const isLeaving = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const findIcon = () => {
  switch (props.type) {
    case 'info':
    case 'warning':
      return 'Info'
    case 'success':
      return 'CheckCircle'
    case 'error':
      return 'XCircle'
    case 'loading':
      return 'Loader2'
  }
}

const findClass = () => {
  switch (props.type) {
    case 'info':
      return 'text-blue-800'
    case 'success':
      return 'text-green-800'
    case 'warning':
      return 'text-yellow-800'
    case 'error':
      return 'text-red-800'
    case 'loading':
      return 'text-blue-800'
  }
}

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
