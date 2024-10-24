<template>
  <div class="relative w-full">
    <div :class="['flex items-center justify-between border border-gray-300 rounded p-2 hover:border-blue-400',
                  Size[size],
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
      <slot v-if="$slots.options" name="options"/>
      <ShadcnSelectOption v-else-if="options"
                          v-for="(option, index) in internalOptions"
                          :key="index"
                          :value="option.value"
                          :label="option.label"
                          :selected="option.value === modelValue"
                          :disabled="option.disabled"
                          @select="selectOption(option)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, provide, ref, watch, withDefaults } from 'vue'
import ShadcnSelectOption from './option/ShadcnSelectOption.vue'
import { Size } from '@/ui/common/size.ts'

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue: any
  options?: ShadcnOption[]
  placeholder?: string
  disabled?: boolean
  size?: keyof typeof Size
}>(), {
  placeholder: 'Select an option',
  disabled: false,
  size: 'default'
})

const dropdownVisible = ref(false)
const selectedLabel = ref('')
const slotOptions = ref<ShadcnOption[]>([])

const registerOption = (option: ShadcnOption) => {
  const existingIndex = slotOptions.value.findIndex(o => o.value === option.value)
  if (existingIndex === -1) {
    slotOptions.value.push(option)
  }
  else {
    slotOptions.value[existingIndex] = option
  }
}

const unregisterOption = (value: any) => {
  const index = slotOptions.value.findIndex(o => o.value === value)
  if (index !== -1) {
    slotOptions.value.splice(index, 1)
  }
}

provide('registerOption', registerOption)
provide('unregisterOption', unregisterOption)

const updateSelectedLabel = () => {
  const allOptions = [...(props.options || []), ...slotOptions.value]
  const selected = allOptions.find(option => option.value === props.modelValue)
  selectedLabel.value = selected ? selected.label : ''
}

watch(() => props.modelValue, () => {
  updateSelectedLabel()
}, { immediate: true })

const internalOptions = computed(() => {
  return props.options || slotOptions.value
})

const toggleDropdown = () => {
  if (!props.disabled) {
    dropdownVisible.value = !dropdownVisible.value
  }
}

const selectOption = (option: ShadcnOption) => {
  if (!props.disabled) {
    emit('update:modelValue', option.value)
    emit('on-change', option)
    dropdownVisible.value = false
  }
}

provide('selectOption', selectOption)
</script>
