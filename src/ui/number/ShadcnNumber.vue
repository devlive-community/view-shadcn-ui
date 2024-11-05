<template>
  <div class="relative">
    <div :class="['flex items-center justify-between border rounded p-3 h-8']">
      <!-- Input field for direct number entry -->
      <input :class="['w-full outline-none text-sm',
                  !validValue && 'line-through'
             ]"
             type="text"
             :value="localValue"
             @input="onInput"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'
import { NumberEmits, NumberProps } from './types'
import { isNumber } from '@/utils/number.ts'

const emit = defineEmits<NumberEmits>()
const props = defineProps<NumberProps>()

// Create a reactive reference for the modelValue
const localValue = ref(props.modelValue)
const validValue = ref(isNumber(props.modelValue))

// Watch the incoming modelValue prop for changes
watch(() => props.modelValue, (newValue) => {
  validValue.value = isNumber(newValue)
  localValue.value = newValue
})

// Function to handle input event and emit changes
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('on-change', target.value)
}
</script>
