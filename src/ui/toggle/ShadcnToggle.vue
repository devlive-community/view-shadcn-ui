<template>
  <button :aria-checked="isSelected"
          :data-state="isSelected ? 'checked' : 'unchecked'"
          :disabled="isDisabled"
          :class="[
              'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'px-2 py-1 w-fit',
              finalGlass && 'backdrop-blur-xl backdrop-saturate-150',
              finalGlass && 'border border-white/20',
              finalGlass && 'shadow-lg shadow-black/5',
              finalGlass ? (
                isSelected ? (
                  finalDark ? 'bg-blue-500/30 text-gray-100' : 'bg-blue-400/40 text-gray-800'
                ) : (
                  finalDark ? 'bg-white/10 text-gray-200 hover:bg-white/20' : 'bg-white/30 text-gray-700 hover:bg-white/40'
                )
              ) : (
                finalDark ? (isSelected ? 'bg-gray-600 text-gray-100' : 'text-gray-200 hover:bg-gray-700 hover:text-gray-200') : (isSelected ? 'bg-accent text-accent-foreground' : 'hover:bg-muted hover:text-muted-foreground')
              ),
              {
                'cursor-pointer': !isDisabled,
                'cursor-not-allowed opacity-50': isDisabled
              },
              ...($attrs.class ? [$attrs.class] : [WrapperSize[finalSize]]),
          ]"
          :style="isSelected ? 'transform: scale(1.05);' : ''"
          @click="onToggle">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { ToggleEmits, ToggleGroupContext, ToggleProps } from './types'
import { WrapperSize } from '@/ui/common/size.ts'

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  size: 'default',
  dark: false,
  glass: false
})
const emit = defineEmits<ToggleEmits>()

const group = inject<ToggleGroupContext | null>('toggleGroup', null)

const finalSize = computed(() => group?.size.value ?? props.size)
const isDisabled = computed(() => group?.disabled.value ?? props.disabled)
const finalDark = computed(() => group?.dark.value ?? props.dark)
const finalGlass = computed(() => group?.glass.value ?? props.glass)

const isSelected = computed(() => {
  if (group) {
    if (group.multiple.value) {
      return group.modelValue.value?.includes(props.value) ?? false
    }
    return group.modelValue.value === props.value
  }
  return props.modelValue === props.value
})

const onToggle = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()

  if (isDisabled.value) {
    return
  }

  if (group) {
    const currentValue = group.modelValue.value
    let newValue

    if (group.multiple.value) {
      const currentArray = Array.isArray(currentValue) ? currentValue : []
      if (isSelected.value) {
        newValue = currentArray.filter(v => v !== props.value)
      } else {
        newValue = [...currentArray, props.value]
      }
    } else {
      newValue = isSelected.value ? null : props.value
    }

    group.onChange(newValue)
  } else {
    const newValue = isSelected.value ? null : props.value
    emit('update:modelValue', newValue)
    emit('on-change', newValue)
  }
}
</script>