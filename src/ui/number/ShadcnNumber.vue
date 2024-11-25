<template>
  <div class="relative">
    <div :class="['flex items-center justify-between border rounded p-3 pr-1.5',
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
      <div v-if="clearable && localValue && hovered"
           class="flex items-center"
           @click="onClear">
        <slot name="clear">
          <svg viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               class="w-3 h-3 p-0.5 rounded-full bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-muted-foreground">
            <path d="M5 19L19 5M5 5l14 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </slot>
      </div>

      <!-- Control - Modified to vertical layout with adjusted icons -->
      <div v-if="showControl"
           class="ml-1 flex flex-col -my-1">
        <!-- Add Button -->
        <div :class="[
                  'h-3 flex items-center justify-center', // Reduced height
                  {
                    'cursor-pointer rounded': !disabled && validValue,
                    'cursor-not-allowed opacity-50': !validValue
                  }
              ]"
             @click="onAdd">
          <slot name="add">
            <svg viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 class="w-2.5 h-2.5 text-gray-400 hover:text-muted-foreground mt-1">
              <path d="M13 8H3M8 3v10"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </slot>
        </div>
        <!-- Minus Button -->
        <div :class="[
                  'h-3 flex items-center justify-center',
                  {
                    'cursor-pointer rounded': !disabled && validValue,
                    'cursor-not-allowed opacity-50': !validValue
                  }
             ]"
             @click="onMinus">
          <slot name="minus">
            <svg viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 class="w-2.5 h-2.5 text-gray-400 hover:text-muted-foreground">
              <path d="M13 8H3"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </slot>
        </div>
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
  clearable: false,
  showControl: true
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

// Function to handle add
const onAdd = () => {
  if (validValue.value) {
    onChange(Number(localValue.value) + 1)
  }
}

// Function to handle minus
const onMinus = () => {
  if (validValue.value) {
    onChange(Number(localValue.value) - 1)
  }
}
</script>
