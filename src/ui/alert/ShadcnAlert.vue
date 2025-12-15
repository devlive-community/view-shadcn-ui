<template>
  <div v-if="visible"
       :class="['relative w-full py-2 px-3 border',
                !banner ? 'rounded-md' : 'rounded-none',
                glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                glass ? 'border-white/20' : (dark ? DarkBorderType[props.type] : BorderType[props.type]),
                glass ? (dark ? GlassBackgroundTypeDark[props.type] : GlassBackgroundType[props.type]) : (dark ? DarkBackgroundType[props.type] : BackgroundType[props.type]),
                glass ? 'shadow-lg shadow-black/5' : ''
       ]">
    <div class="flex items-center gap-3">
      <!-- Icon -->
      <div v-if="!banner && showIcon" class="flex-shrink-0">
        <ShadcnIcon :icon="IconMap[type]"
                    :dark="dark"
                    :class="['h-5 w-5',
                            dark ? DarkTextType[type] : TextType[type]
                    ]"/>
      </div>
      <div v-else-if="$slots.icon" class="flex-shrink-0">
        <slot name="icon"/>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div v-if="!banner && (title || $slots.title)"
             :class="['text-sm font-medium leading-none tracking-tight', dark && 'text-gray-100']">
          <span v-if="title">{{ title }}</span>
          <slot v-else-if="$slots.title" name="title"/>
        </div>
        <div :class="['text-sm', { 'mt-1': title || $slots.title }, dark && 'text-gray-300']">
          <slot/>
        </div>
      </div>

      <!-- Close the button -->
      <div v-if="closable"
           :class="['flex-shrink-0 mr-2 cursor-pointer', dark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700']"
           @click="onClose">
        <slot v-if="$slots.close" name="close"/>
        <ShadcnIcon icon="XCircle" v-else class="h-4 w-4" :dark="dark"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackgroundType, BorderType, TextType } from '@/ui/common/type.ts'
import { ShadcnIcon } from '@/ui/icon'

const IconMap = {
  primary: 'Info',
  success: 'CheckCircle',
  warning: 'AlertTriangle',
  error: 'XCircle'
}

// 暗黑模式边框颜色
const DarkBorderType = {
  primary: 'border-blue-700',
  success: 'border-green-700',
  warning: 'border-yellow-700',
  error: 'border-red-700',
  info: 'border-blue-700',
  default: 'border-gray-700'
}

// 暗黑模式背景颜色
const DarkBackgroundType = {
  primary: 'bg-blue-900/30',
  success: 'bg-green-900/30',
  warning: 'bg-yellow-900/30',
  error: 'bg-red-900/30',
  info: 'bg-blue-900/30',
  default: 'bg-gray-800'
}

// 暗黑模式文字颜色
const DarkTextType = {
  primary: 'text-blue-400',
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  default: 'text-gray-300'
}

// 液态玻璃效果背景颜色
const GlassBackgroundType = {
  primary: 'bg-blue-500/30',
  success: 'bg-green-500/30',
  warning: 'bg-yellow-500/30',
  error: 'bg-red-500/30',
  info: 'bg-blue-500/30',
  default: 'bg-gray-500/30'
}

const GlassBackgroundTypeDark = {
  primary: 'bg-blue-600/30',
  success: 'bg-green-600/30',
  warning: 'bg-yellow-600/30',
  error: 'bg-red-600/30',
  info: 'bg-blue-600/30',
  default: 'bg-gray-600/30'
}

const emit = defineEmits(['on-close'])

const props = withDefaults(defineProps<{
  title?: string
  type?: keyof typeof BackgroundType
  showIcon?: boolean
  banner?: boolean
  closable?: boolean
  dark?: boolean
  glass?: boolean
}>(), {
  type: 'primary',
  closable: false,
  dark: false,
  glass: false
})

const visible = ref(true)

const onClose = () => {
  visible.value = false
  emit('on-close', visible.value)
}
</script>