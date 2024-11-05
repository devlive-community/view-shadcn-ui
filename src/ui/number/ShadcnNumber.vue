<template>
  <div class="relative">
    <div :class="['flex items-center justify-between border rounded p-3',
              Size[size],
              HoverType[type],
              {
                'cursor-pointer': !disabled,
                'cursor-not-allowed opacity-50 bg-gray-100': disabled
              }
         ]">
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
  disabled: false
})

// Create a reactive reference for the modelValue
const localValue = ref(props.modelValue)
const validValue = ref(isNumber(props.modelValue))

// Get inject context
const formItemContext = inject<FormItemContext | null>(`form-item-${ props.name }`, null)

// Watch the incoming modelValue prop for changes
watch(() => props.modelValue, (newValue) => {
  validValue.value = isNumber(newValue)
  localValue.value = newValue
})

const onChange = (value: any) => {
  emit('update:modelValue', value)
  emit('on-change', value)
}

// Function to handle input event and emit changes
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  onChange(target.value)
}

const onBlur = (event: FocusEvent) => {
  const newValue = (event.target as HTMLInputElement).value
  localValue.value = newValue
  onChange(newValue)
  emit('on-blur', newValue)

  if (formItemContext) {
    formItemContext.onBlur()
  }
}
</script>
