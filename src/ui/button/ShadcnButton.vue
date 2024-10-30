<template>
  <button :type="submit ? 'submit' : reset ? 'reset' : 'button'"
          :class="[
            // Style
            'inline-flex items-center justify-center whitespace-nowrap transition-colors',
            // Size
            ButtonSize[size],
            // Type style
            ghost ? [
              'bg-transparent',
              'border-solid border',
              getBorderColorClass,
              getTextColorClass,
              getHoverClass,
            ] : type === 'default' ? [
              'bg-white',
              'border-solid border border-gray-200',
              'text-gray-500',
              'hover:border-gray-300',
            ] : [
              ButtonBackgroundType[type],
              ButtonHoverType[type],
              type === 'text' ? 'text-gray-500' : 'text-white'
            ],
            // Rounded corners
            {'rounded-full': round || circle},
            {'rounded-md': !round && !circle},
            // Rounded
            {'w-9 h-9 p-0': circle},
            // State
            {'opacity-70 cursor-not-allowed': loading || disabled},
          ]"
          :disabled="loading || disabled"
          :style="color ? { backgroundColor: color } : {}">
    <!-- Loading State -->
    <div v-if="loading" class="inline-flex items-center justify-center">
      <Loader2 class="animate-spin" :class="{'mr-1.5': $slots.loading}"/>
      <slot v-if="$slots.loading" name="loading"/>
    </div>

    <!-- Normal State -->
    <div v-else class="inline-flex items-center justify-center gap-1.5">
      <slot v-if="$slots.icon" name="icon"/>
      <span v-if="text" :class="{'ml-0': !$slots.icon}">{{ text }}</span>
      <slot v-else/>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import { ButtonBackgroundType, ButtonHoverType } from '@/ui/common/type.ts'
import { ButtonSize } from '@/ui/common/size.ts'

interface Props
{
  text?: string
  size?: keyof typeof ButtonSize
  type?: keyof typeof ButtonBackgroundType
  round?: boolean
  circle?: boolean
  loading?: boolean
  color?: string
  disabled?: boolean
  ghost?: boolean
  submit?: boolean
  reset?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  type: 'primary',
  ghost: false,
  submit: false,
  reset: false
})

// Ghost button style classes
const getBorderColorClass = computed(() => {
  if (!props.ghost) {
    return ''
  }

  const borderColorMap = {
    primary: 'border-blue-500',
    success: 'border-green-500',
    warning: 'border-yellow-500',
    danger: 'border-red-500',
    info: 'border-gray-500',
    default: 'border-gray-200'
  }

  return borderColorMap[props.type]
})

const getTextColorClass = computed(() => {
  if (!props.ghost) {
    return ''
  }

  const textColorMap = {
    primary: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    info: 'text-gray-500',
    default: 'text-gray-500'
  }

  return textColorMap[props.type]
})

const getHoverClass = computed(() => {
  if (!props.ghost) {
    return ''
  }

  const hoverColorMap = {
    primary: 'hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600',
    success: 'hover:bg-green-50 hover:border-green-600 hover:text-green-600',
    warning: 'hover:bg-yellow-50 hover:border-yellow-600 hover:text-yellow-600',
    danger: 'hover:bg-red-50 hover:border-red-600 hover:text-red-600',
    info: 'hover:bg-gray-50 hover:border-gray-600 hover:text-gray-600',
    default: 'hover:bg-gray-50 hover:border-gray-300'
  }

  return hoverColorMap[props.type]
})
</script>
