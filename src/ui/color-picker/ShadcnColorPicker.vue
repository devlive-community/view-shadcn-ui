<template>
  <div class="inline-block relative shadcn-color-picker-container">
    <div class="w-8 h-8 rounded-md border"
         :class="[
             { 'cursor-pointer': !disabled && !readonly },
             { 'cursor-not-allowed opacity-50': disabled }
         ]"
         :style="{ backgroundColor: modelValue || color }"
         @click="togglePicker"/>
    <div v-if="isOpen" class="relative">
      <div class="absolute min-w-44 z-10 mt-0.5 p-2 bg-white rounded-lg shadow-lg border">
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
                 :value="modelValue"
                 @input="onColorInput"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, onMounted, onUnmounted, ref } from 'vue'
import type { ColorPickerEmits, ColorPickerProps } from './types'

const props = withDefaults(defineProps<ColorPickerProps>(), {
  disabled: false,
  readonly: false,
  presetColors: () => ([
    '#f87171', '#fb923c', '#fbbf24', '#a3e635', '#34d399',
    '#2dd4bf', '#38bdf8', '#818cf8', '#c084fc', '#e879f9',
    '#fb7185', '#475569', '#737373', '#78716c', '#ef4444'
  ])
})
const emit = defineEmits<ColorPickerEmits>()

const isOpen = ref(false)
const finalPresetColors = computed(() => props.presetColors)

const togglePicker = () => {
  if (props.disabled || props.readonly) {
    return
  }

  isOpen.value = !isOpen.value
}

const selectColor = (color: string) => {
  emit('update:modelValue', color)
  emit('on-change', color)
  isOpen.value = false
}

const onColorInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  emit('update:modelValue', input.value)
  emit('on-change', input.value)
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