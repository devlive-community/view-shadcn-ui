<template>
  <div :class="containerClasses" @click="toggleSwitch">
    <div :class="trackClasses">
      <div v-if="$slots.open && !isActive" :class="openTextClasses">
        <slot name="open"/>
      </div>

      <div v-if="$slots.close && isActive" :class="closeTextClasses">
        <slot name="close"/>
      </div>

      <div :class="toggleClasses" :style="toggleStyle"></div>
    </div>

    <input type="checkbox" class="sr-only" :checked="isActive" @change="onChange"/>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { type ComponentType, getComponentSize, getGlassStyles, getText, getTypeColor, type ThemeMode } from '@/utils/theme'
import { SwitchEmits, SwitchProps } from './types'

const emit = defineEmits<SwitchEmits>()
const $slots = useSlots()

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  type: 'primary',
  size: 'default',
  trueValue: true,
  falseValue: false,
  dark: false,
  glass: false
})

const isActive = computed(() => props.modelValue === props.trueValue)

const toggleOffset = computed(() => {
  const offsets = {
    small: '20px',
    default: '30px',
    large: '48px'
  }
  return offsets[props.size]
})

const toggleSwitch = () => {
  if (props.disabled) {
    return
  }
  const newValue = isActive.value ? props.falseValue : props.trueValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

const onChange = (event: Event) => {
  if (props.disabled) {
    return
  }
  const target = event.target as HTMLInputElement
  const newValue = target.checked ? props.trueValue : props.falseValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

const containerClasses = computed(() => {
  return [
    'relative inline-flex items-center',
    {
      'cursor-pointer': !props.disabled,
      'cursor-not-allowed opacity-50': props.disabled
    }
  ]
})

const trackClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const componentType: ComponentType = props.type === 'error' ? 'danger' : props.type
  const baseClasses = [
    'relative flex items-center justify-between rounded-full transition-all duration-300 ease-in-out',
    getComponentSize('switch', props.size),
    {
      'pr-1': !isActive.value,
      'pl-1': isActive.value
    }
  ]

  if (props.glass) {
    if (isActive.value) {
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

  if (isActive.value) {
    return [
      ...baseClasses,
      getTypeColor(componentType, mode)
    ]
  }

  return [
    ...baseClasses,
    props.dark ? 'bg-gray-600' : 'bg-gray-300'
  ]
})

const openTextClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = ['ml-6 whitespace-nowrap transition-opacity duration-300', getComponentSize('switchText', props.size)]

  if (props.glass) {
    return [...baseClasses, getText(mode, 'secondary')]
  }

  return [...baseClasses, 'text-white']
})

const closeTextClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = ['mr-6 whitespace-nowrap ml-auto transition-opacity duration-300', getComponentSize('switchText', props.size)]

  if (props.glass) {
    return [...baseClasses, getText(mode, 'secondary')]
  }

  return [...baseClasses, 'text-white']
})

const toggleClasses = computed(() => {
  const baseClasses = [
    'absolute left-0.5 rounded-full transition-all duration-300 ease-in-out',
    getComponentSize('switchToggle', props.size)
  ]

  if (props.glass) {
    return [
      ...baseClasses,
      'shadow-lg',
      props.dark ? 'bg-white/90' : 'bg-white'
    ]
  }

  return [
    ...baseClasses,
    props.dark ? 'bg-gray-200' : 'bg-white'
  ]
})

const toggleStyle = computed(() => {
  return {
    transform: `translateX(${isActive.value ? toggleOffset.value : '0px'}) ${isActive.value ? 'scale(1.1)' : 'scale(1)'}`
  }
})
</script>