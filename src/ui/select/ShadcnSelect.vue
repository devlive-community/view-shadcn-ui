<template>
  <div class="relative w-full">
    <div class="flex items-center justify-between border border-gray-300 rounded p-2 cursor-pointer hover:border-blue-400 h-8"
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
}

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: any
  options?: Option[]
  placeholder?: string
}>(), {
  placeholder: 'Select an option'
})

const dropdownVisible = ref(false)
const selectedLabel = computed(() => {
  const selected = props.options?.find(option => option.value === props.modelValue)
  return selected ? selected.label : ''
})

const internalOptions = computed(() => {
  return props.options || []
})

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const selectOption = (option: { value: any, label: string }) => {
  emit('update:modelValue', option.value)
  emit('on-change', option)
  dropdownVisible.value = false
}
</script>
