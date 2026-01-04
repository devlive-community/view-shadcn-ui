<template>
  <div :class="containerClasses" @click="onChange">
    <input
        :checked="isChecked"
        :disabled="disabled"
        :value="value"
        class="sr-only"
        type="radio"/>

    <div :class="radioClasses" :style="radioStyle">
      <div v-if="isChecked" :class="radioInnerClasses" :style="radioInnerStyle"></div>
    </div>

    <div v-if="$slots.label" :class="labelClasses">
      <slot name="label"/>
    </div>
    <div v-else :class="labelClasses">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, useSlots } from 'vue'
import { type ComponentType, getComponentSize, getGlassStyles, getText, getTypeColor, type ThemeMode } from '@/utils/theme'
import { RadioEmits, RadioProps } from './types'

const emit = defineEmits<RadioEmits>()
const $slots = useSlots()

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  size: 'default',
  type: 'primary',
  dark: false,
  glass: false
})

const radioGroup = inject<{
  modelValue: { modelValue: any },
  updateModelValue: Function,
  dark?: { value: boolean },
  glass?: { value: boolean },
  size?: { value: any },
  type?: { value: any }
} | null>('radioGroup', null)

const finalDark = computed(() => radioGroup?.dark?.value ?? props.dark)
const finalGlass = computed(() => radioGroup?.glass?.value ?? props.glass)
const finalSize = computed(() => radioGroup?.size?.value ?? props.size)
const finalType = computed(() => radioGroup?.type?.value ?? props.type)

const isChecked = computed(() => {
  if (radioGroup) {
    return radioGroup.modelValue.modelValue === props.value
  }
  return props.modelValue === props.value
})

const onChange = () => {
  if (!props.disabled) {
    if (radioGroup) {
      radioGroup.updateModelValue(props.value)
    }
    else {
      emit('update:modelValue', props.value)
      emit('on-change', props.value)
    }
  }
}

const containerClasses = computed(() => {
  return [
    'inline-flex items-center',
    {
      'cursor-pointer': !props.disabled,
      'cursor-not-allowed opacity-50': props.disabled
    }
  ]
})

const radioClasses = computed(() => {
  const mode: ThemeMode = { dark: finalDark.value, glass: finalGlass.value }
  const componentType: ComponentType = finalType.value === 'error' ? 'danger' : finalType.value
  const baseClasses = [
    'flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out',
    getComponentSize('radio', finalSize.value)
  ]

  if (finalGlass.value) {
    if (isChecked.value) {
      return [
        ...baseClasses,
        ...getGlassStyles(mode, { type: componentType, withHover: false, withBorder: true, withText: false })
      ]
    }
    return [
      ...baseClasses,
      ...getGlassStyles(mode, { withHover: false, withBorder: true, withText: false })
    ]
  }

  if (isChecked.value) {
    return [
      ...baseClasses,
      getTypeColor(componentType, mode)
    ]
  }

  return [
    ...baseClasses,
    finalDark.value ? 'bg-gray-700 border-gray-500' : 'bg-white'
  ]
})

const radioStyle = computed(() => {
  return {
    transform: isChecked.value ? 'scale(1.1)' : 'scale(1)'
  }
})

const radioInnerClasses = computed(() => {
  const baseClasses = [
    'rounded-full transition-all duration-200',
    getComponentSize('radioInner', finalSize.value)
  ]

  if (finalGlass.value) {
    return [
      ...baseClasses,
      finalDark.value ? 'bg-white/90' : 'bg-white'
    ]
  }

  return [
    ...baseClasses,
    finalDark.value ? 'bg-gray-900' : 'bg-white'
  ]
})

const radioInnerStyle = computed(() => {
  return {
    transform: isChecked.value ? 'scale(1)' : 'scale(0)',
    opacity: isChecked.value ? '1' : '0'
  }
})

const labelClasses = computed(() => {
  const mode: ThemeMode = { dark: finalDark.value, glass: finalGlass.value }
  return ['ml-2 text-sm', getText(mode, 'secondary')]
})
</script>
