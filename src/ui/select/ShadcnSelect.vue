<template>
  <div ref="selectRef" class="relative">
    <div :class="['flex rounded-md px-2 relative',
                  border && 'border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                  {
                    'cursor-pointer': !disabled,
                    'cursor-not-allowed opacity-50 bg-gray-50': disabled,
                    [HoverType[type]]: true
                  }
         ]"
         @click="toggleDropdown">
      <div class="flex-1 flex items-center overflow-hidden">
        <div :class="['flex flex-wrap gap-1 w-full py-0.5',
                    MinSize[size]
              ]">
          <slot name="selected">
            <template v-if="multiple && selectedLabels.length">
              <span v-for="(label, _index) in selectedLabels"
                    class="bg-gray-100 hover:bg-gray-200 px-2 rounded text-sm flex items-center gap-1 transition-colors"
                    :key="_index"
                    :style="{ paddingTop: PtPbSize[size], paddingBottom: PtPbSize[size] }">
                {{ label }}
                <button class="hover:text-red-500" @click.stop="removeSelection(_index)">
                  ×
                </button>
              </span>
            </template>
            <template v-else>
              <span class="flex items-center min-w-0 truncate select-none">
                {{ selectedLabels[0] || placeholder }}
              </span>
            </template>
          </slot>
        </div>
      </div>

      <div :class="['flex items-center ml-1 flex-shrink-0']">
        <svg class="w-4 h-4 transition-transform duration-200"
             :class="{ 'rotate-180': isExpanded }"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                fill-rule="evenodd"/>
        </svg>
      </div>
    </div>

    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-2 scale-95 opacity-0"
        enter-to-class="transform translate-y-0 scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 scale-100 opacity-100"
        leave-to-class="transform -translate-y-2 scale-95 opacity-0">
      <div v-show="isExpanded"
           ref="dropdownRef"
           class="absolute z-10 w-full px-2 rounded-md border border-gray-200 bg-white shadow-lg mt-1 py-1 overflow-y-auto max-h-60"
           @scroll="handleScroll">
        <slot name="options">
          <ShadcnSelectOption v-for="(option, index) in internalOptions"
                              :key="index"
                              :value="option.value"
                              :label="option.label"
                              :selected="isOptionSelected(option.value)"
                              :disabled="option.disabled"
                              :type="type"/>
        </slot>
        <div v-if="isLoading" class="flex justify-center items-center py-2">
          <div class="animate-spin rounded-full h-4 w-4 border-2 border-primary-500 border-t-transparent"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, nextTick, onMounted, onUnmounted, provide, ref, watch, withDefaults } from 'vue'
import { t } from '@/utils/locale'
import ShadcnSelectOption from './option/ShadcnSelectOption.vue'
import { MinSize, PtPbSize } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'
import { SelectEmits, SelectOptionProps, SelectProps } from '@/ui/select/types.ts'
import { generateRandomId } from '@/utils/common.ts'

const emit = defineEmits<SelectEmits>()

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: String(t('select.text.placeholder')),
  disabled: false,
  size: 'default',
  type: 'primary',
  multiple: false,
  border: true,
  lazy: false
})

const isExpanded = ref(false)
const selectedLabels = ref<string[]>([])
const slotOptions = ref<SelectOptionProps[]>([])
const selectRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const parentName = `shadcn-select-${ generateRandomId() }`
const isLoading = ref(false)

// Handle scroll loading
const handleScroll = () => {
  if (!props.lazy || !props.loadData || isLoading.value) {
    return
  }

  const dropdown = dropdownRef.value
  if (!dropdown) {
    return
  }

  const { scrollTop, scrollHeight, clientHeight } = dropdown
  // Triggers loading when scrolling to 20px from the bottom
  if (scrollHeight - scrollTop - clientHeight < 20) {
    if (!isLoading.value) {
      isLoading.value = true
      props.loadData((children: SelectOptionProps[]) => {
        // Process incoming new data directly
        if (Array.isArray(children) && children.length > 0) {
          if (props.options !== undefined) {
            // Note the change here: use emit events to update the data of the parent component
            emit('update:options', [...props.options, ...children])
          }
          else {
            // If you're using the slot option
            slotOptions.value = [...slotOptions.value, ...children]
          }
        }
        isLoading.value = false
      })
    }
  }
}

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
}

const unregisterOption = (value: any) => {
  const index = slotOptions.value.findIndex(o => o.value === value)
  if (index !== -1) {
    slotOptions.value.splice(index, 1)
  }
}

// Check if the option is selected
const isOptionSelected = (value: any) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value)
  }
  return props.modelValue === value
}

// Update the selected label
const updateSelectedLabels = () => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    selectedLabels.value = props.modelValue.map(value => {
      const option = slotOptions.value.find(opt => opt.value === value)
      return option ? option.label : value
    })
  }
  else {
    const option = slotOptions.value.find(opt => opt.value === props.modelValue)
    selectedLabels.value = option ? [option.label] : []
  }
}

// Removes the selection
const removeSelection = (index: number) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue]
    newValue.splice(index, 1)
    emit('update:modelValue', newValue)
    emit('on-change', newValue)
  }
}

const internalOptions = computed(() => {
  return props.options || slotOptions.value
})

const toggleDropdown = () => {
  if (!props.disabled) {
    isExpanded.value = !isExpanded.value
    if (isExpanded.value) {
      nextTick(updateSelectedLabels)
    }
  }
}

// Select an option
const selectOption = (option: SelectOptionProps) => {
  if (props.disabled || option.disabled) {
    return
  }

  if (props.multiple) {
    const newValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const valueIndex = newValue.indexOf(option.value)

    if (valueIndex === -1) {
      newValue.push(option.value)
    }
    else {
      newValue.splice(valueIndex, 1)
    }

    emit('update:modelValue', newValue)
    emit('on-change', newValue)
  }
  else {
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

watch(() => props.modelValue, () => {
  updateSelectedLabels()
}, { immediate: true, deep: true })

watch(() => slotOptions.value, () => {
  updateSelectedLabels()
}, { deep: true })

provide('selectContext', {
  registerOption,
  unregisterOption,
  selectOption,
  modelValue: computed(() => props.modelValue),
  multiple: props.multiple,
  parentName
})

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  // isExpanded.value = true
  // nextTick(() => {
  //   isExpanded.value = false
  // })
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>
