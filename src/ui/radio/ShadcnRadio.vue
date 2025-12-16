<template>
  <div :class="[
                'inline-flex items-center',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
        ]"
       @click="onChange">
    <!-- Radio Input -->
    <input type="radio"
           :value="value"
           :checked="isChecked"
           :disabled="disabled"
           class="sr-only"/>

    <!-- Custom Radio Style -->
    <div :class="['flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out',
                  finalGlass && 'backdrop-blur-xl backdrop-saturate-150',
                  finalGlass && 'border-white/20',
                  finalGlass && 'shadow-lg shadow-black/5',
                  Size[size],
                  finalGlass ? (
                    isChecked ? (
                      type === 'primary' ? (finalDark ? 'bg-blue-500/30' : 'bg-blue-400/40') :
                      type === 'success' ? (finalDark ? 'bg-green-500/30' : 'bg-green-400/40') :
                      type === 'warning' ? (finalDark ? 'bg-yellow-500/30' : 'bg-yellow-400/40') :
                      (finalDark ? 'bg-red-500/30' : 'bg-red-400/40')
                    ) : (finalDark ? 'bg-white/10 border-white/20' : 'bg-white/30 border-white/20')
                  ) : (
                    isChecked ? (
                      type === 'primary' ? 'bg-blue-400' :
                      type === 'success' ? 'bg-green-400' :
                      type === 'warning' ? 'bg-yellow-400' :
                      'bg-red-400'
                    ) : (finalDark ? 'bg-gray-700 border-gray-500' : 'bg-white')
                  )
                  ]"
         :style="{
           transform: isChecked ? 'scale(1.1)' : 'scale(1)'
         }">
      <div v-if="isChecked"
           :class="['rounded-full transition-all duration-200',
                    ToggleSize[size],
                    finalGlass ? (finalDark ? 'bg-white/90' : 'bg-white') : (finalDark ? 'bg-gray-900' : 'bg-white')
            ]"
           :style="{
             transform: isChecked ? 'scale(1)' : 'scale(0)',
             opacity: isChecked ? '1' : '0'
           }"/>
    </div>

    <!-- Label Slot -->
    <div v-if="$slots.label" :class="['ml-2 text-sm', finalDark ? 'text-gray-200' : '']">
      <slot name="label"/>
    </div>
    <div v-else :class="['ml-2 text-sm', finalDark ? 'text-gray-200' : '']">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { RadioProps, RadioEmits } from './types'

const emit = defineEmits<RadioEmits>()

enum Size
{
  default = 'w-5 h-5',
  small = 'w-4 h-4',
  large = 'w-6 h-6'
}

enum ToggleSize
{
  default = 'w-3 h-3',
  small = 'w-2 h-2',
  large = 'w-4 h-4'
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  size: 'default',
  type: 'primary',
  dark: false,
  glass: false
})

const radioGroup = inject<{ modelValue: { modelValue: any }, updateModelValue: Function, dark?: { value: boolean }, glass?: { value: boolean } } | null>('radioGroup', null)

const finalDark = computed(() => radioGroup?.dark?.value ?? props.dark)
const finalGlass = computed(() => radioGroup?.glass?.value ?? props.glass)

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
</script>
