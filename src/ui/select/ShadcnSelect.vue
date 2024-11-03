<template>
  <div ref="selectRef" class="relative">
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

      <svg :class="['w-4 h-4 transition-transform duration-200 ml-1',
                    { 'rotate-180': isExpanded }
            ]"
           fill="currentColor"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              fill-rule="evenodd"/>
      </svg>
    </div>

    <div v-show="isExpanded" class="absolute z-10 bg-white border border-gray-300 rounded-sm mt-1 w-full py-2 px-2">
      <slot name="options">
        <ShadcnSelectOption v-for="(option, index) in internalOptions"
                            :key="index"
                            :value="option.value"
                            :label="option.label"
                            :selected="option.value === modelValue"
                            :disabled="option.disabled"
                            :type="type"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, nextTick, onMounted, onUnmounted, provide, ref, watch, withDefaults } from 'vue'
import ShadcnSelectOption from './option/ShadcnSelectOption.vue'
import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'
import { SelectEmits, SelectOptionProps, SelectProps } from '@/ui/select/types.ts'
import { generateRandomId } from '@/utils/common.ts'

const emit = defineEmits<SelectEmits>()

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option',
  disabled: false,
  size: 'default',
  type: 'primary'
})

const isExpanded = ref(false)
const selectedLabel = ref('')
const slotOptions = ref<SelectOptionProps[]>([])
const selectRef = ref<HTMLElement | null>(null)
const parentName = `shadcn-select-${ generateRandomId() }`

const registerOption = (option: SelectOptionProps) => {
  if (!option || option.parentName !== parentName) {
    return
  }

  const existingIndex = slotOptions.value.findIndex(o => o.value === option.value)
  if (existingIndex === -1) {
    slotOptions.value.push(option)
  }
  else {
    slotOptions.value[existingIndex] = option
  }

  // Check and update the label of the selected item
  if (option.value === props.modelValue) {
    selectedLabel.value = option.label
  }
}

const unregisterOption = (value: any) => {
  const index = slotOptions.value.findIndex(o => o.value === value)
  if (index !== -1) {
    slotOptions.value.splice(index, 1)
  }
}

const updateSelectedLabel = () => {
  const option = slotOptions.value.find(opt => opt.value === props.modelValue)
  if (option) {
    selectedLabel.value = option.label
  }
}

watch(() => props.modelValue, (newValue) => {
  const option = slotOptions.value.find(opt => opt.value === newValue)
  if (option) {
    selectedLabel.value = option.label
  }
}, { immediate: true })

watch(() => slotOptions.value, () => {
  updateSelectedLabel()
}, { deep: true })

const internalOptions = computed(() => {
  return props.options || slotOptions.value
})

const toggleDropdown = () => {
  if (!props.disabled) {
    isExpanded.value = !isExpanded.value
    // When the drop-down box appears, make sure that the options are loaded
    if (isExpanded.value) {
      nextTick(updateSelectedLabel)
    }
  }
}

const selectOption = (option: SelectOptionProps) => {
  if (!props.disabled) {
    selectedLabel.value = option.label
    emit('update:modelValue', option.value)
    emit('on-change', option)
    isExpanded.value = false
  }
}

const onClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    if (isExpanded.value) {
      toggleDropdown()
      emit('on-click-outside', true)
    }
  }
}

provide('selectContext', {
  registerOption,
  unregisterOption,
  selectOption,
  modelValue: computed(() => props.modelValue),
  parentName
})

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  // When initializing, a drop-down box is displayed to trigger the mount of the option
  isExpanded.value = true
  nextTick(() => {
    isExpanded.value = false
  })
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>
