<template>
  <div class="inline-block relative shadcn-color-picker-container">
    <div class="w-8 h-8 rounded-md border"
         :class="[
             { 'cursor-pointer': !disabled && !readonly },
             { 'cursor-not-allowed opacity-50': disabled }
         ]"
         :style="{ backgroundColor: displayColor }"
         @click="togglePicker"/>
    <div v-if="isOpen" class="relative">
      <div class="absolute min-w-48 z-10 mt-0.5 p-2 bg-white rounded-lg shadow-lg border">
        <div class="grid grid-cols-5 gap-2">
          <div v-for="color in finalPresetColors"
               class="w-6 h-6 rounded-md cursor-pointer"
               :key="color"
               :style="{ backgroundColor: color }"
               @click="selectColor(color)"/>
        </div>
        <div class="mt-2">
          <input type="color"
                 class="w-full h-8 cursor-pointer"
                 :value="hexColor"
                 @input="onColorInput"/>
        </div>
        <div class="mt-2">
          <div class="flex items-center">
            <span class="text-sm text-gray-500 mr-2">{{ t('colorPicker.text.transparency') }}</span>
            <ShadcnSlider v-model="alpha"
                          class="flex-1"
                          :min="0"
                          :max="100"
                          show-tip
                          @on-change="onAlphaInput"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, onMounted, onUnmounted, ref } from 'vue'
import { t } from '@/utils/locale'
import type { ColorPickerEmits, ColorPickerProps } from './types'

const props = withDefaults(defineProps<ColorPickerProps>(), {
  disabled: false,
  readonly: false,
  format: 'auto',
  presetColors: () => ([
    '#f87171', '#fb923c', '#fbbf24', '#a3e635', '#34d399',
    '#2dd4bf', '#38bdf8', '#818cf8', '#c084fc', '#e879f9',
    '#fb7185', '#475569', '#737373', '#78716c', '#ef4444'
  ])
})
const emit = defineEmits<ColorPickerEmits>()

const isOpen = ref(false)
const alpha = ref(100)
const finalPresetColors = computed(() => props.presetColors)

// 检测颜色格式
// Check color format
const isRgba = (color?: string): boolean => {
  if (!color) {
    return false
  }
  return color.startsWith('rgba')
}

const isHex = (color?: string): boolean => {
  if (!color) {
    return false
  }
  return color.startsWith('#')
}

// 将十六进制颜色转换为 RGBA
// Convert hex color to RGBA
const hexToRgba = (hex: string, alpha: number): string => {
  // 移除 alpha 部分（如果存在）
  // Remove alpha part (if exists)
  const baseHex = hex.length === 9 ? hex.slice(0, 7) : hex
  const r = parseInt(baseHex.slice(1, 3), 16)
  const g = parseInt(baseHex.slice(3, 5), 16)
  const b = parseInt(baseHex.slice(5, 7), 16)
  return `rgba(${ r }, ${ g }, ${ b }, ${ alpha / 100 })`
}

// 将 RGBA 转换为 8 位 hex
// Convert RGBA to 8-bit hex
const rgbaToHex8 = (rgba: string): string => {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
  if (!match) {
    return '#000000FF'
  }

  const r = parseInt(match[1])
  const g = parseInt(match[2])
  const b = parseInt(match[3])
  const a = match[4] ? Math.round(parseFloat(match[4]) * 255) : 255

  const toHex = (n: number): string => {
    const hex = n.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${ toHex(r) }${ toHex(g) }${ toHex(b) }${ toHex(a) }`
}

// 从 hex 颜色中提取透明度
// Extract transparency from hex color
const getHexAlpha = (hex: string): number => {
  if (hex.length !== 9) {
    return 100
  }
  const alpha = parseInt(hex.slice(7, 9), 16)
  return Math.round((alpha / 255) * 100)
}

// 将普通 hex 转换为 8 位 hex
// Convert normal hex to 8-bit hex
const hexToHex8 = (hex: string, alpha: number): string => {
  const baseHex = hex.length === 9 ? hex.slice(0, 7) : hex
  const alphaHex = Math.round(alpha * 255 / 100).toString(16).padStart(2, '0')
  return `${ baseHex }${ alphaHex }`
}

// 从 8 位 hex 中获取 6 位 hex（用于颜色选择器输入）
// Extract 6-bit hex from 8-bit hex
const hex8ToHex6 = (hex: string): string => {
  return hex.length === 9 ? hex.slice(0, 7) : hex
}

// 确定输出格式
// Determine output format
const shouldOutputRgba = computed(() => {
  if (props.format === 'rgba') {
    return true
  }
  if (props.format === 'hex') {
    return false
  }
  // auto 模式：根据输入值类型确定
  // Auto mode: Determine based on input value type
  return props.modelValue ? isRgba(props.modelValue) : props.color ? isRgba(props.color) : false
})

// 计算显示颜色（用于预览）
// Compute display color
const displayColor = computed(() => {
  if (!props.modelValue && !props.color) {
    return 'transparent'
  }
  const baseColor = props.modelValue || props.color

  if (isRgba(baseColor)) {
    return baseColor
  }
  else if (isHex(baseColor)) {
    return hexToRgba(baseColor!!, baseColor?.length === 9 ? getHexAlpha(baseColor) : alpha.value)
  }

  return 'transparent'
})

// 计算六位 hex 颜色值（用于颜色选择器输入框）
// Compute 6-bit hex color value (used for color picker input field)
const hexColor = computed(() => {
  if (!props.modelValue && !props.color) {
    return '#000000'
  }
  const baseColor = props.modelValue || props.color

  if (isRgba(baseColor)) {
    return hex8ToHex6(rgbaToHex8(baseColor!!))
  }
  else if (isHex(baseColor)) {
    return hex8ToHex6(baseColor!!)
  }

  return '#000000'
})

// 初始化 alpha 值
// Initialize alpha value
onMounted(() => {
  const initialColor = props.modelValue || props.color
  if (!initialColor) {
    return
  }

  if (isRgba(initialColor)) {
    const match = initialColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
    if (match && match[4]) {
      alpha.value = Math.round(parseFloat(match[4]) * 100)
    }
  }
  else if (isHex(initialColor) && initialColor.length === 9) {
    alpha.value = getHexAlpha(initialColor)
  }
})

const togglePicker = () => {
  if (props.disabled || props.readonly) {
    return
  }

  isOpen.value = !isOpen.value
}

// 根据设定的格式输出颜色值
// Output color value based on the specified format
const formatOutputColor = (hexValue: string, alphaValue: number): string => {
  if (shouldOutputRgba.value) {
    return hexToRgba(hexValue, alphaValue)
  }
  return hexToHex8(hexValue, alphaValue)
}

const selectColor = (color: string) => {
  const outputColor = formatOutputColor(color, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
  isOpen.value = false
}

const onColorInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  const outputColor = formatOutputColor(input.value, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
}

const onAlphaInput = (value: number) => {
  alpha.value = value
  const outputColor = formatOutputColor(hexColor.value, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
}

const onClickOutside = (event: MouseEvent) => {
  if (!isOpen.value) {
    return
  }
  const target = event.target as HTMLElement
  if (!target.closest('.shadcn-color-picker-container')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>