<template>
  <div
      v-if="modelValue"
      role="status"
      aria-label="loading"
      :class="wrapperClasses">
    <div v-if="fixed" :class="backgroundClasses"/>

    <div class="z-20">
      <template v-if="$slots.default">
        <slot/>
      </template>
      <div v-else :class="loadingClasses"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { getBackground, getComponentSize, getGlassStyles, getTypeBorderRight, type ThemeMode } from '@/utils/theme'
import { SpinEmits, SpinProps } from './types'

const emit = defineEmits<SpinEmits>()

const props = withDefaults(defineProps<SpinProps>(), {
  modelValue: true,
  type: 'primary',
  size: 'default',
  fixed: false,
  dark: false,
  glass: false
})

watch(() => props.modelValue, (newValue) => {
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
})

const wrapperClasses = computed(() => [
  'inline-flex items-center justify-center',
  props.fixed ? 'absolute inset-0' : 'relative'
])

const backgroundClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }

  if (props.glass) {
    return [
      'absolute inset-0 z-10',
      ...getGlassStyles(mode, { withHover: false, withBorder: false, withText: false })
    ]
  }

  return [
    'absolute inset-0 z-10 opacity-65',
    props.dark ? 'bg-gray-900' : 'bg-gray-50'
  ]
})

const loadingClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = [
    'inline-block animate-spin rounded-full border-2 shadow-lg p-2',
    getComponentSize('loading', props.size),
    getTypeBorderRight(props.type, mode)
  ]

  if (props.glass) {
    return [
      ...baseClasses,
      'bg-transparent backdrop-blur-sm shadow-black/5 border-opacity-60'
    ]
  }

  return [
    ...baseClasses,
    props.fixed ? 'bg-transparent' : getBackground(mode)
  ]
})
</script>