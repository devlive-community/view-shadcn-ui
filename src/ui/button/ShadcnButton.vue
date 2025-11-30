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
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  type: 'primary',
  ghost: false,
  submit: false,
  reset: false,
  circle: false,
  dark: false
})

// Ghost button style classes
const getBorderColorClass = computed(() => {
  if (!props.ghost) {
    return ''
  }

  if (finalDark.value) {
    const borderColorMap = {
      primary: 'border-blue-400',
      success: 'border-green-400',
      warning: 'border-yellow-400',
      danger: 'border-red-400',
      info: 'border-gray-400',
      default: 'border-gray-600'
    }
    return borderColorMap[props.type]
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

  if (finalDark.value) {
    const textColorMap = {
      primary: 'text-blue-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      danger: 'text-red-400',
      info: 'text-gray-300',
      default: 'text-gray-300'
    }
    return textColorMap[props.type]
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

  if (finalDark.value) {
    const hoverColorMap = {
      primary: 'hover:bg-blue-900/30 hover:border-blue-300 hover:text-blue-300',
      success: 'hover:bg-green-900/30 hover:border-green-300 hover:text-green-300',
      warning: 'hover:bg-yellow-900/30 hover:border-yellow-300 hover:text-yellow-300',
      danger: 'hover:bg-red-900/30 hover:border-red-300 hover:text-red-300',
      info: 'hover:bg-gray-800 hover:border-gray-300 hover:text-gray-200',
      default: 'hover:bg-gray-800 hover:border-gray-500'
    }
    return hoverColorMap[props.type]
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
    if (props.type === 'default') {
      return finalDark.value
          ? [
            'bg-gray-800',
            'border-solid border border-gray-600',
            'text-gray-400'
          ]
          : [
            'bg-white',
            'border-solid border border-gray-200',
            'text-gray-500'
          ]
    }
    return [
      ButtonBackgroundType[props.type],
      props.type === 'text' ? (finalDark.value ? 'text-gray-300' : 'text-gray-500') : 'text-white'
    ]
  }

  // Normal state with hover effects
  if (props.type === 'default') {
    return finalDark.value
        ? [
          'bg-gray-800',
          'border-solid border border-gray-600',
          'text-gray-200',
          'hover:bg-gray-700 hover:border-gray-500'
        ]
        : [
          'bg-white',
          'border-solid border border-gray-200',
          'text-gray-500',
          'hover:border-gray-300'
        ]
  }

  return [
    ButtonBackgroundType[props.type],
    ButtonHoverType[props.type],
    props.type === 'text' ? (finalDark.value ? 'text-gray-300' : 'text-gray-500') : 'text-white'
  ]
})

const buttonGroupSize = inject<ComputedRef<keyof typeof ButtonSize> | undefined>(
    'buttonGroupSize',
    undefined
)

const buttonGroupDark = inject<ComputedRef<boolean> | undefined>(
    'buttonGroupDark',
    undefined
)

const finalSize = computed(() => buttonGroupSize?.value || props.size)
const finalDark = computed(() => buttonGroupDark?.value ?? props.dark)

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
    'inline-flex items-center justify-center whitespace-nowrap transition-colors',
    props.circle ? '' : 'w-fit',
    !props.circle && ButtonSize[finalSize.value],
    props.ghost
        ? [
          'bg-transparent',
          'border-solid border',
          getBorderColorClass.value,
          getTextColorClass.value,
          !props.disabled && !props.loading && getHoverClass.value
        ]
        : getTypeStyles.value,
    { 'rounded-full': props.round || props.circle },
    { 'rounded-md': !props.round && !props.circle },
    circleClass.value,
    { 'opacity-50 cursor-not-allowed': props.loading || props.disabled }
  ],
  disabled: props.loading || props.disabled,
  style: props.color ? { backgroundColor: props.color } : {}
}))
</script>