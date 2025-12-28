<template>
  <div v-if="visible"
       :class="['fixed flex space-x-2 items-center top-5 left-1/2 border px-4 py-2 rounded-md shadow-md text-sm z-50',
                isLeaving ? 'animate-slide-up' : 'animate-slide-down',
                glass && 'backdrop-blur-xl backdrop-saturate-150',
                glass && 'shadow-lg shadow-black/5',
                [findBackgroundClass()],
                [findBorderAndTextClass()]
        ]">
    <ShadcnIcon v-if="showIcon"
                size="16"
                :class="[type === 'loading' ? 'animate-spin' : '',
                        [findClass()]
                ]"
                :dark="dark"
                :icon="findIcon()"/>
    <slot v-if="$slots.default"/>
    <span v-else>{{ content }}</span>

    <div v-if="closable"
         :class="['ml-auto cursor-pointer', dark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700']"
         @click="onClose">
      <slot v-if="$slots.close" name="close"/>
      <ShadcnIcon v-else
                  size="16"
                  class="ml-10"
                  icon="X"
                  :dark="dark"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onUnmounted, ref } from 'vue'
import { ShadcnIcon } from '@/ui/icon'
import { MessageType } from '@/ui/common/type.ts'

const emit = defineEmits(['on-close'])

const props = withDefaults(defineProps<{
  content?: string
  duration?: number
  showIcon?: boolean
  type: keyof typeof MessageType
  background?: boolean
  closable?: boolean
  onClose?: () => void
  dark?: boolean
  glass?: boolean
}>(), {
  duration: 1.5,
  showIcon: false,
  type: 'info',
  background: false,
  closable: false,
  dark: false,
  glass: false
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
  if (props.dark) {
    switch (props.type) {
      case 'info':
      case 'loading':
        return 'text-blue-400'
      case 'success':
        return 'text-green-400'
      case 'warning':
        return 'text-yellow-400'
      case 'error':
        return 'text-red-400'
    }
  }

  switch (props.type) {
    case 'info':
    case 'loading':
      return 'text-blue-600'
    case 'success':
      return 'text-green-600'
    case 'warning':
      return 'text-yellow-600'
    case 'error':
      return 'text-red-600'
  }
}

// Set background color, which depends on type
const findBackgroundClass = () => {
  if (props.glass) {
    return props.dark ? 'bg-white/10' : 'bg-white/30'
  }

  if (props.background) {
    if (props.dark) {
      switch (props.type) {
        case 'info':
        case 'loading':
          return 'bg-blue-900/30'
        case 'success':
          return 'bg-green-900/30'
        case 'warning':
          return 'bg-yellow-900/30'
        case 'error':
          return 'bg-red-900/30'
      }
    }

    switch (props.type) {
      case 'info':
      case 'loading':
        return 'bg-blue-100'
      case 'success':
        return 'bg-green-100'
      case 'warning':
        return 'bg-yellow-100'
      case 'error':
        return 'bg-red-100'
    }
  }
  else {
    return props.dark ? 'bg-gray-800' : 'bg-white'
  }
}

// Set border and text color, which depends on type
const findBorderAndTextClass = () => {
  if (props.glass) {
    return props.dark ? 'border-white/20 text-gray-200' : 'border-gray-400/40 text-gray-800'
  }

  if (props.background) {
    if (props.dark) {
      switch (props.type) {
        case 'info':
        case 'loading':
          return 'border-blue-700 text-blue-300'
        case 'success':
          return 'border-green-700 text-green-300'
        case 'warning':
          return 'border-yellow-700 text-yellow-300'
        case 'error':
          return 'border-red-700 text-red-300'
      }
    }

    switch (props.type) {
      case 'info':
      case 'loading':
        return 'border-blue-200 text-blue-700'
      case 'success':
        return 'border-green-200 text-green-700'
      case 'warning':
        return 'border-yellow-200 text-yellow-700'
      case 'error':
        return 'border-red-200 text-red-700'
    }
  }
  else {
    return props.dark ? 'border-gray-700 text-gray-200' : 'border-gray-100 text-gray-700'
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

// Set a timer to hide messages if duration is not zero
if (props.duration && props.duration > 0) {
  setTimeout(() => {
    onClose()
  }, props.duration * 1000)
}

// Clear possible timers to prevent memory leaks
onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
  visible.value = false
})
</script>