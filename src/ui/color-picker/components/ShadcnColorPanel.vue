<template>
  <div class="flex flex-col gap-4 p-2">
    <div v-if="showDropper" class="flex justify-between items-center select-none">
      <div class="flex items-center">
        <div class="w-6 h-6 rounded-md border shadow-sm mr-2"
             :style="{ backgroundColor: currentColor }"/>
        <span class="text-sm font-medium">{{ currentColorHex.toUpperCase() }}</span>
      </div>
      <button class="p-1 rounded-md items-center flex hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              @click="startEyeDropper"
              title="Color Picker">
        <Icon icon="Pipette" class="w-4 h-4"/>
      </button>
    </div>

    <div ref="saturationPanel"
         class="w-full h-32 rounded-sm relative cursor-pointer"
         role="slider"
         aria-label="Color saturation and brightness"
         :style="{
            backgroundColor: `hsl(${hue}, 100%, 50%)`,
            backgroundImage: 'linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)'
         }"
         @mousedown="startDraggingSaturation"
         @touchstart="startDraggingSaturation">
      <div class="w-4 h-4 rounded-full border-2 border-white absolute -translate-x-1/2 -translate-y-1/2 shadow-lg"
           :style="{
                left: `${saturation}%`,
                top: `${100 - value}%`,
                backgroundColor: currentColor
            }">
      </div>
    </div>

    <div ref="hueSlider"
         class="w-full h-4 rounded-sm relative cursor-pointer"
         role="slider"
         aria-label="Color hue"
         :style="{
            backgroundImage: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
         }"
         @mousedown="startDraggingHue"
         @touchstart="startDraggingHue">
      <div class="absolute top-0 w-4 h-full rounded-full border-2 border-white shadow-lg -translate-x-1/2"
           :style="{
              left: `${(hue / 360) * 100}%`,
              backgroundColor: `hsl(${hue}, 100%, 50%)`
           }">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
  showDropper?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'on-change', value: string): void
}>()

// State
const hue = ref(0)
const saturation = ref(100)
const value = ref(100)

// Refs for panels
const saturationPanel = ref<HTMLElement | null>(null)
const hueSlider = ref<HTMLElement | null>(null)

// Dragging state
const isDraggingSaturation = ref(false)
const isDraggingHue = ref(false)

// EyeDropper functionality
const startEyeDropper = async () => {
  if (!('EyeDropper' in window)) {
    alert('Your browser does not support the EyeDropper API')
    return
  }

  try {
    // @ts-ignore - EyeDropper API types not in all TypeScript versions
    const dropper = new window.EyeDropper()
    const result = await dropper.open()
    const color = result.sRGBHex
    initColor(color)
    emitColor()
  }
  catch (e) {
    console.error('EyeDropper error:', e)
  }
}

// Convert hex to RGB
const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ] : null
}

// Convert RGB to HSV
const rgbToHsv = (r: number, g: number, b: number): [number, number, number] => {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min
  let h = 0

  if (d === 0) {
    h = 0
  }
  else if (max === r) {
    h = ((g - b) / d) % 6
  }
  else if (max === g) {
    h = (b - r) / d + 2
  }
  else if (max === b) {
    h = (r - g) / d + 4
  }

  h = Math.round(h * 60)
  if (h < 0) {
    h += 360
  }

  const s = max === 0 ? 0 : (d / max) * 100
  const v = max * 100

  return [h, s, v]
}

// Initialize color from props
const initColor = (color: string) => {
  const rgb = hexToRgb(color)
  if (rgb) {
    const [h, s, v] = rgbToHsv(...rgb)
    hue.value = h
    saturation.value = s
    value.value = v
  }
}

// Watch for props changes
watch(() => props.modelValue, (newColor) => {
  if (newColor !== currentColorHex.value) {
    initColor(newColor)
  }
})

// Computed color values
const currentColor = computed(() => {
  return `hsl(${ hue.value }, ${ saturation.value }%, ${ value.value }%)`
})

const currentColorHex = computed(() => {
  const [r, g, b] = hsvToRgb(hue.value, saturation.value, value.value)
  return rgbToHex(r, g, b)
})

// Convert HSV to RGB
const hsvToRgb = (h: number, s: number, v: number): [number, number, number] => {
  s = s / 100
  v = v / 100
  const i = Math.floor(h / 60)
  const f = h / 60 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      return [v, t, p]
    case 1:
      return [q, v, p]
    case 2:
      return [p, v, t]
    case 3:
      return [p, q, v]
    case 4:
      return [t, p, v]
    case 5:
      return [v, p, q]
    default:
      return [0, 0, 0]
  }
}

// Convert RGB to Hex
const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0')
  return `#${ toHex(r) }${ toHex(g) }${ toHex(b) }`
}

const updateSaturationValue = (e: MouseEvent | TouchEvent) => {
  if (!saturationPanel.value) {
    return
  }

  const rect = saturationPanel.value.getBoundingClientRect()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

  let x = ((clientX - rect.left) / rect.width) * 100
  let y = ((clientY - rect.top) / rect.height) * 100

  x = Math.max(0, Math.min(100, x))
  y = Math.max(0, Math.min(100, y))

  saturation.value = x
  value.value = 100 - y

  emitColor()
}

const updateHue = (e: MouseEvent | TouchEvent) => {
  if (!hueSlider.value) {
    return
  }

  const rect = hueSlider.value.getBoundingClientRect()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

  let x = ((clientX - rect.left) / rect.width) * 360
  x = Math.max(0, Math.min(360, x))

  hue.value = x
  emitColor()
}

const startDraggingSaturation = (e: MouseEvent | TouchEvent) => {
  isDraggingSaturation.value = true
  updateSaturationValue(e)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('touchmove', handleMouseMove)
  document.addEventListener('mouseup', stopDragging)
  document.addEventListener('touchend', stopDragging)
}

const startDraggingHue = (e: MouseEvent | TouchEvent) => {
  isDraggingHue.value = true
  updateHue(e)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('touchmove', handleMouseMove)
  document.addEventListener('mouseup', stopDragging)
  document.addEventListener('touchend', stopDragging)
}

const handleMouseMove = (e: MouseEvent | TouchEvent) => {
  if (isDraggingSaturation.value) {
    updateSaturationValue(e)
  }
  else if (isDraggingHue.value) {
    updateHue(e)
  }
}

const stopDragging = () => {
  isDraggingSaturation.value = false
  isDraggingHue.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('touchmove', handleMouseMove)
  document.removeEventListener('mouseup', stopDragging)
  document.removeEventListener('touchend', stopDragging)
}

const emitColor = () => {
  emit('update:modelValue', currentColorHex.value)
  emit('on-change', currentColorHex.value)
}

onMounted(() => {
  if (props.modelValue) {
    initColor(props.modelValue)
  }
})

onUnmounted(() => {
  stopDragging()
})
</script>