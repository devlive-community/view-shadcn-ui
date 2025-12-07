<template>
  <div class="inline-block relative shadcn-color-picker-container">
    <div :class="['w-8 h-8 rounded-md border',
             { 'cursor-pointer': !disabled && !readonly },
             { 'cursor-not-allowed opacity-50': disabled },
             dark ? 'border-gray-600' : '']"
         :style="{ backgroundColor: displayColor }"
         @click="togglePicker"/>
    <div v-if="isOpen" class="relative">
      <div :class="['absolute min-w-64 z-10 mt-0.5 p-2 rounded-lg shadow-lg border',
                    dark ? 'bg-gray-800 border-gray-600' : 'bg-white']">
        <div class="grid grid-cols-5 gap-2">
          <div v-for="color in finalPresetColors"
               class="w-6 h-6 rounded-md cursor-pointer"
               :key="color"
               :style="{ backgroundColor: color }"
               @click="selectColor(color)"/>
        </div>
        <div class="mt-2 space-y-2">
          <div v-if="showFormat" class="space-y-2">
            <div class="flex justify-between items-center">
              <span :class="['text-sm', dark ? 'text-gray-400' : 'text-gray-500']">{{ t('colorPicker.text.format') }}</span>
              <ShadcnSelect v-model="inputFormat" :dark="dark">
                <template #options>
                  <ShadcnSelectOption :dark="dark" label="HEX" value="hex"/>
                  <ShadcnSelectOption :dark="dark" label="RGB" value="rgb"/>
                  <ShadcnSelectOption :dark="dark" label="HSL" value="hsl"/>
                </template>
              </ShadcnSelect>
            </div>

            <template v-if="inputFormat === 'hex'">
              <ShadcnInput v-model="hexValue as any" :dark="dark" placeholder="#000000" @on-change="onHexInput"/>
            </template>

            <template v-if="inputFormat === 'rgb'">
              <div class="grid grid-cols-3 gap-2">
                <div v-for="(value, index) in rgbValues" :key="index">
                  <ShadcnNumber :model-value="value"
                                :min="0"
                                :max="255"
                                :dark="dark"
                                @on-change="onRgbInput(index, $event)"/>
                </div>
              </div>
            </template>

            <template v-if="inputFormat === 'hsl'">
              <div class="grid grid-cols-3 gap-2">
                <div>
                  <ShadcnNumber placeholder="H" :model-value="hslValues[0]"
                                :min="0"
                                :max="360"
                                :dark="dark"
                                @on-change="onHslInput(0, $event)"/>
                </div>
                <div>
                  <ShadcnNumber placeholder="S" :model-value="hslValues[1]"
                                :min="0"
                                :max="100"
                                :dark="dark"
                                @on-change="onHslInput(1, $event)"/>
                </div>
                <div>
                  <ShadcnNumber placeholder="L" :model-value="hslValues[2]"
                                :min="0"
                                :max="100"
                                :dark="dark"
                                @on-change="onHslInput(2, $event)"/>
                </div>
              </div>
            </template>
          </div>

          <div v-if="showPanel" class="mt-2">
            <ShadcnColorPanel :dark="dark" :model-value="modelValue as string" :show-dropper="showDropper" @on-change="onColorChange"/>
          </div>

          <div v-if="showTransparency" class="flex items-center select-none">
            <span :class="['text-sm mr-2', dark ? 'text-gray-400' : 'text-gray-500']">{{ t('colorPicker.text.transparency') }}</span>
            <ShadcnSlider v-model="alpha"
                          class="flex-1"
                          :min="0"
                          :max="100"
                          :dark="dark"
                          show-tip
                          @on-change="onAlphaInput as any"/>
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
import ShadcnColorPanel from './components/ShadcnColorPanel.vue'
import { ShadcnSelect, ShadcnSelectOption } from "@/ui/select";
import { ShadcnInput } from "@/ui/input";
import { ShadcnNumber } from "@/ui/number";
import { ShadcnSlider } from "@/ui/slider";

const props = withDefaults(defineProps<ColorPickerProps>(), {
  disabled: false,
  readonly: false,
  format: 'auto',
  dark: false,
  presetColors: () => ([
    '#f87171', '#fb923c', '#fbbf24', '#a3e635', '#34d399',
    '#2dd4bf', '#38bdf8', '#818cf8', '#c084fc', '#e879f9',
    '#fb7185', '#475569', '#737373', '#78716c', '#ef4444'
  ]),
  showPanel: true,
  showDropper: true,
  showTransparency: true,
  showFormat: true
})
const emit = defineEmits<ColorPickerEmits>()

const isOpen = ref(false)
const alpha = ref(100)
const inputFormat = ref<'hex' | 'rgb' | 'hsl'>('hex')
const finalPresetColors = computed(() => props.presetColors)

// Color format detection
// 颜色格式检测
const isRgb = (color?: string): boolean => {
  if (!color) {
    return false
  }
  return color.startsWith('rgb')
}

const isHsl = (color?: string): boolean => {
  if (!color) {
    return false
  }
  return color.startsWith('hsl')
}

const isHex = (color?: string): boolean => {
  if (!color) {
    return false
  }
  return color.startsWith('#')
}

// Color conversion utilities
// 颜色转换工具
const hexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  }
  else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
  h = h % 360
  s = Math.max(0, Math.min(100, s)) / 100
  l = Math.max(0, Math.min(100, l)) / 100

  if (s === 0) {
    const value = Math.round(l * 255)
    return [value, value, value]
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) {
      t += 1
    }
    if (t > 1) {
      t -= 1
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t
    }
    if (t < 1 / 2) {
      return q
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6
    }
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const r = hue2rgb(p, q, h / 360 + 1 / 3)
  const g = hue2rgb(p, q, h / 360)
  const b = hue2rgb(p, q, h / 360 - 1 / 3)

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

// Convert hex color to RGBA
// 将十六进制颜色转换为 RGBA
const hexToRgba = (hex: string, alpha: number): string => {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
}

// Convert RGB to RGBA
// 将 RGB 转换为 RGBA
const rgbToRgba = (r: number, g: number, b: number, alpha: number): string => {
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
}

// Convert HSL to HSLA
// 将 HSL 转换为 HSLA
const hslToHsla = (h: number, s: number, l: number, alpha: number): string => {
  return `hsla(${h}, ${s}%, ${l}%, ${alpha / 100})`
}

// Extract RGB values from RGB/RGBA string
// 从 RGB/RGBA 字符串中提取 RGB 值
const parseRgb = (color: string): [number, number, number] => {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!match) {
    return [0, 0, 0]
  }
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
}

// Extract HSL values from HSL/HSLA string
// 从 HSL/HSLA 字符串中提取 HSL 值
const parseHsl = (color: string): [number, number, number] => {
  const match = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/)
  if (!match) {
    return [0, 0, 0]
  }
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
}

// Computed values for different formats
// 不同格式的计算值
const hexValue = computed(() => hexColor.value)

const rgbValues = computed(() => {
  const rgb = hexToRgb(hexColor.value!!)
  return rgb
})

const hslValues = computed(() => {
  const rgb = hexToRgb(hexColor.value!!)
  return rgbToHsl(...rgb)
})

// Calculate display color
// 计算显示颜色
const displayColor = computed(() => {
  if (!props.modelValue && !props.color) {
    return 'transparent'
  }
  const baseColor = props.modelValue || props.color

  if (isRgb(baseColor)) {
    const [r, g, b] = parseRgb(baseColor!!)
    return rgbToRgba(r, g, b, alpha.value)
  }
  else if (isHsl(baseColor)) {
    const [h, s, l] = parseHsl(baseColor!!)
    const [r, g, b] = hslToRgb(h, s, l)
    return rgbToRgba(r, g, b, alpha.value)
  }
  else if (isHex(baseColor)) {
    return hexToRgba(baseColor!!, alpha.value)
  }

  return 'transparent'
})

// Calculate hex color for color picker input
// 计算用于颜色选择器输入的十六进制颜色
const hexColor = computed(() => {
  if (!props.modelValue && !props.color) {
    return '#000000'
  }
  const baseColor = props.modelValue || props.color

  if (isRgb(baseColor)) {
    const [r, g, b] = parseRgb(baseColor!!)
    return rgbToHex(r, g, b)
  }
  else if (isHsl(baseColor)) {
    const [h, s, l] = parseHsl(baseColor!!)
    const [r, g, b] = hslToRgb(h, s, l)
    return rgbToHex(r, g, b)
  }
  else if (isHex(baseColor)) {
    return baseColor
  }

  return '#000000'
})

// Initialize alpha value
// 初始化 alpha 值
onMounted(() => {
  const initialColor = props.modelValue || props.color
  if (!initialColor) {
    return
  }

  if (isRgb(initialColor)) {
    const match = initialColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
    if (match && match[4]) {
      alpha.value = Math.round(parseFloat(match[4]) * 100)
    }
  }
  else if (isHsl(initialColor)) {
    const match = initialColor.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/)
    if (match && match[4]) {
      alpha.value = Math.round(parseFloat(match[4]) * 100)
    }
  }
})

const togglePicker = () => {
  if (props.disabled || props.readonly) {
    return
  }
  isOpen.value = !isOpen.value
}

// Format output color based on specified format
// 根据指定格式输出颜色值
const formatOutputColor = (color: string, alphaValue: number): string => {
  let outputFormat = props.format
  if (outputFormat === 'auto') {
    // Determine format based on input value
    // 根据输入值确定格式
    if (props.modelValue) {
      if (isRgb(props.modelValue)) {
        outputFormat = 'rgb'
      }
      else if (isHsl(props.modelValue)) {
        outputFormat = 'hsl'
      }
      else {
        outputFormat = 'hex'
      }
    }
    else if (props.color) {
      if (isRgb(props.color)) {
        outputFormat = 'rgb'
      }
      else if (isHsl(props.color)) {
        outputFormat = 'hsl'
      }
      else {
        outputFormat = 'hex'
      }
    }
    else {
      outputFormat = 'hex'
    }
  }

  // Convert color to target format
  // 转换颜色到目标格式
  if (isHex(color)) {
    const [r, g, b] = hexToRgb(color)
    switch (outputFormat) {
      case 'rgb':
        return rgbToRgba(r, g, b, alphaValue)
      case 'hsl': {
        const [h, s, l] = rgbToHsl(r, g, b)
        return hslToHsla(h, s, l, alphaValue)
      }
      default:
        return color
    }
  }
  else if (isRgb(color)) {
    const [r, g, b] = parseRgb(color)
    switch (outputFormat) {
      case 'hex':
        return rgbToHex(r, g, b)
      case 'hsl': {
        const [h, s, l] = rgbToHsl(r, g, b)
        return hslToHsla(h, s, l, alphaValue)
      }
      default:
        return rgbToRgba(r, g, b, alphaValue)
    }
  }
  else if (isHsl(color)) {
    const [h, s, l] = parseHsl(color)
    const [r, g, b] = hslToRgb(h, s, l)
    switch (outputFormat) {
      case 'hex':
        return rgbToHex(r, g, b)
      case 'rgb':
        return rgbToRgba(r, g, b, alphaValue)
      default:
        return hslToHsla(h, s, l, alphaValue)
    }
  }
  return color
}

const selectColor = (color: string) => {
  const outputColor = formatOutputColor(color, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
  isOpen.value = false
}

// Event handlers for different input formats
// 不同输入格式的事件处理器
const onHexInput = (input: string) => {
  if (/^#[0-9A-Fa-f]{6}$/.test(input)) {
    const outputColor = formatOutputColor(input, alpha.value)
    emit('update:modelValue', outputColor)
    emit('on-change', outputColor)
  }
}

const onRgbInput = (index: number, newValue: number) => {
  if (isNaN(newValue) || newValue < 0 || newValue > 255) {
    return
  }

  const rgb = [...rgbValues.value]
  rgb[index] = newValue
  const hex = rgbToHex(...rgb as [number, number, number])
  const outputColor = formatOutputColor(hex, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
}

const onHslInput = (index: number, newValue: number) => {
  const max = index === 0 ? 360 : 100
  if (isNaN(newValue) || newValue < 0 || newValue > max) {
    return
  }

  const hsl = [...hslValues.value]
  hsl[index] = newValue
  const rgb = hslToRgb(...hsl as [number, number, number])
  const hex = rgbToHex(...rgb)
  const outputColor = formatOutputColor(hex, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
}

const onAlphaInput = (value: number) => {
  alpha.value = value
  const outputColor = formatOutputColor(hexColor.value!!, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
}

// Click outside handler
// 点击外部处理
const onClickOutside = (event: MouseEvent) => {
  if (!isOpen.value) {
    return
  }
  const target = event.target as HTMLElement
  if (!target.closest('.shadcn-color-picker-container')) {
    isOpen.value = false
  }
}

const onColorChange = (color: string) => {
  const outputColor = formatOutputColor(color, alpha.value)
  emit('update:modelValue', outputColor)
  emit('on-change', outputColor)
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>