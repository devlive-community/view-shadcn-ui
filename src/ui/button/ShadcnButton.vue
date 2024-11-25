<template>
  <component :is="to ? ShadcnLink : 'button'"
             v-bind="buttonProps">
    <div class="inline-flex items-center justify-center" :class="{'gap-1.5': !circle}">
      <!-- Loading State -->
      <div v-if="loading" :class="{'mr-1.5': !circle && (text || $slots.default)}">
        <slot name="loading">
          <Loader2 :class="['animate-spin',
                          {
                            'w-3 h-3': finalSize === 'small',
                            'w-4 h-4': finalSize === 'default',
                            'w-5 h-5': finalSize === 'large',
                          }
                       ]"/>
        </slot>
      </div>

      <!-- Icon -->
      <template v-if="!loading">
        <slot v-if="circle" name="default">
          <slot name="icon"/>
        </slot>
        <slot v-else name="icon"/>
      </template>

      <!-- Text Content -->
      <template v-if="!circle">
        <span v-if="text" :class="{'ml-0': !$slots.icon && !loading}">{{ text }}</span>
        <slot/>
      </template>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import { ButtonBackgroundType, ButtonHoverType } from '@/ui/common/type.ts'
import { ButtonRoundedSize, ButtonSize } from '@/ui/common/size.ts'
import ShadcnLink from '@/ui/link'

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
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  type: 'primary',
  ghost: false,
  submit: false,
  reset: false,
  circle: false
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

// New computed property for type styles including hover
const getTypeStyles = computed(() => {
  // If disabled or loading, don't include hover styles
  if (props.disabled || props.loading) {
    return props.type === 'default'
        ? [
          'bg-white',
          'border-solid border border-gray-200',
          'text-gray-500'
        ]
        : [
          ButtonBackgroundType[props.type],
          props.type === 'text' ? 'text-gray-500' : 'text-white'
        ]
  }

  // Normal state with hover effects
  return props.type === 'default'
      ? [
        'bg-white',
        'border-solid border border-gray-200',
        'text-gray-500',
        'hover:border-gray-300'
      ]
      : [
        ButtonBackgroundType[props.type],
        ButtonHoverType[props.type],
        props.type === 'text' ? 'text-gray-500' : 'text-white'
      ]
})

const buttonGroupSize = inject<ComputedRef<keyof typeof ButtonSize> | undefined>(
    'buttonGroupSize',
    undefined
)

const finalSize = computed(() => buttonGroupSize?.value || props.size)

const circleClass = computed(() => {
  if (props.circle) {
    const sizeKey = finalSize.value as keyof typeof ButtonRoundedSize
    return {
      [ButtonRoundedSize[sizeKey]]: true
    }
  }
})

const buttonProps = computed(() => ({
  ...(props.to ? { link: props.to } : { type: props.submit ? 'submit' : props.reset ? 'reset' : 'button' }),
  class: [
    // Style
    'inline-flex items-center justify-center whitespace-nowrap transition-colors',
    // Size
    !props.circle && ButtonSize[finalSize.value],
    // Type style with conditional hover
    props.ghost
        ? [
          'bg-transparent',
          'border-solid border',
          getBorderColorClass.value,
          getTextColorClass.value,
          !props.disabled && !props.loading && getHoverClass.value
        ]
        : getTypeStyles.value,
    // Rounded corners
    { 'rounded-full': props.round || props.circle },
    { 'rounded-md': !props.round && !props.circle },
    // Rounded
    circleClass.value,
    // State
    { 'opacity-50 cursor-not-allowed': props.loading || props.disabled }
  ],
  disabled: props.loading || props.disabled,
  style: props.color ? { backgroundColor: props.color } : {}
}))
</script>
