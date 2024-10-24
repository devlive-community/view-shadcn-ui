<template>
  <div class="relative w-full">
    <div :class="['flex items-center justify-between border border-gray-300 rounded p-2 hover:border-blue-400 h-8',
                  {
                    'cursor-pointer': !disabled,
                    'cursor-not-allowed opacity-50 bg-gray-100': disabled
                  }
                 ]"
         @click="toggleDropdown">
      <slot name="selected">
        {{ selectedLabel || placeholder }}
      </slot>
    </div>

    <div v-if="dropdownVisible" class="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full py-1">
      <slot name="options">
        <ShadcnSelectOption v-for="(option, index) in internalOptions"
                            :key="index"
                            :value="option.value"
                            :label="option.label"
                            :isSelected="option.value === modelValue"
                            :disabled="option.disabled"
                            @select="selectOption(option)"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, withDefaults } from 'vue'
import ShadcnSelectOption from './option/ShadcnSelectOption.vue'

interface Option
{
  value: any
  label: string
  disabled?: boolean
}

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: any
  options?: Option[]
  placeholder?: string
  disabled?: boolean
}>(), {
  placeholder: 'Select an option',
  disabled: false
})

const dropdownVisible = ref(false)
const selectedLabel = computed(() => {
  const selected = props.options?.find(option => option.value === props.modelValue)
  return selected ? selected.label : ''
})

const internalOptions = computed(() => {
  return props.options
})

const toggleDropdown = () => {
  if (!props.disabled) {
    dropdownVisible.value = !dropdownVisible.value
  }
}

const selectOption = (option: { value: any, label: string }) => {
  if (!props.disabled) {
    emit('update:modelValue', option.value)
    emit('on-change', option)
    dropdownVisible.value = false
  }
}
</script>
