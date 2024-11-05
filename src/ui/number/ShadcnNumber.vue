<template>
  <div class="relative">
    <div :class="['flex items-center justify-between border rounded p-3',
              Size[size],
              HoverType[type],
              {
                'cursor-pointer': !disabled,
                'cursor-not-allowed opacity-50 bg-gray-100': disabled
              }
         ]"
         @mouseover="onHover"
         @mouseleave="onLeave">
      <!-- Input field for direct number entry -->
      <input :class="['w-full outline-none text-sm',
                  (!validValue && localValue) && 'line-through'
             ]"
             type="text"
             :value="localValue"
             :disabled="disabled"
             :placeholder="placeholder"
             @input="onInput"
             @blur="onBlur"/>

      <!-- Clear -->
      <div v-if="clearable && localValue && hovered" @click="onClear">
        <slot name="clear">
          <svg viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               class="w-4 h-4 p-1 rounded-full bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-muted-foreground">
            <!-- Close icon -->
            <path d="M5 19L19 5M5 5l14 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, inject, ref, watch } from 'vue'
import { NumberEmits, NumberProps } from './types'
import { isNumber } from '@/utils/number.ts'
import { Size } from '@/ui/common/size.ts'
import { FormItemContext } from '@/ui/form/context.ts'
import { HoverType } from '@/ui/common/type.ts'

const emit = defineEmits<NumberEmits>()
const props = withDefaults(defineProps<NumberProps>(), {
  size: 'default',
  type: 'primary',
  disabled: false,
  min: -Infinity,
  max: Infinity,
  clearable: false
})

// Create a reactive reference for the modelValue
const localValue = ref(props.modelValue)
const validValue = ref(isNumber(props.modelValue))
const hovered = ref(false)

// Get inject context
const formItemContext = inject<FormItemContext | null>(`form-item-${ props.name }`, null)

// Watch the incoming modelValue prop for changes
watch(() => props.modelValue, (newValue) => {
  validValue.value = isNumber(newValue)

  // Check if the value is within the min and max range
  if (isNumber(newValue)) {
    const numValue = Number(newValue)
    const min = Number(props.min ?? -Infinity)
    const max = Number(props.max ?? Infinity)

    if (numValue < min || numValue > max) {
      validValue.value = false
    }
  }

  localValue.value = newValue
})

const onChange = (value: any) => {
  emit('update:modelValue', value)
  emit('on-change', value)
}

const onHover = () => {
  if (!props.disabled) {
    hovered.value = true
  }
}

const onLeave = () => {
  hovered.value = false
}

// Function to handle input event and emit changes
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  onChange(target.value)
}

// Function to handle blur event and emit changes
const onBlur = (event: FocusEvent) => {
  const newValue = (event.target as HTMLInputElement).value
  localValue.value = newValue

  onChange(newValue)
  emit('on-blur', newValue)

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

// Function to handle clear event and emit changes
const onClear = () => {
  onChange(null)
  emit('on-clear', null)
}
</script>
