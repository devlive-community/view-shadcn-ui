<template>
  <div class="relative">
    <div :class="['flex items-center justify-between border rounded p-3',
                  Size[size],
                  {
                    'cursor-pointer': !disabled,
                    'cursor-not-allowed opacity-50 bg-gray-100': disabled,
                    [HoverType[type]]: true
                  }
         ]"
         @click="toggleDropdown">
      <slot name="selected">
        {{ selectedLabel || placeholder }}
      </slot>
    </div>
    <div v-if="dropdownVisible" class="absolute z-10 bg-white border border-gray-300 rounded-sm mt-1 w-full py-2 px-2">
      <slot v-if="$slots.options" name="options"/>
      <ShadcnSelectOption v-else-if="options"
                          v-for="(option, index) in internalOptions"
                          :key="index"
                          :value="option.value"
                          :label="option.label"
                          :selected="option.value === modelValue"
                          :disabled="option.disabled"
                          :type="type"
                          @select="selectOption(option)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, provide, ref, watch, withDefaults } from 'vue'
import ShadcnSelectOption from './option/ShadcnSelectOption.vue'
import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'
import { SelectEmits, SelectOptionProps, SelectProps } from '@/ui/select/types.ts'

const emit = defineEmits<SelectEmits>()

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option',
  disabled: false,
  size: 'default',
  type: 'primary'
})

const dropdownVisible = ref(false)
const selectedLabel = ref('')
const slotOptions = ref<SelectOptionProps[]>([])

const registerOption = (option: SelectOptionProps) => {
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

const selectOption = (option: SelectOptionProps) => {
  if (!props.disabled) {
    emit('update:modelValue', option.value)
    emit('on-change', option)
    dropdownVisible.value = false
  }
}

provide('selectOption', selectOption)
provide('registerOption', registerOption)
provide('unregisterOption', unregisterOption)
</script>
