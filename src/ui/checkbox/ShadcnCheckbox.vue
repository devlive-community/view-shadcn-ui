<template>
  <div :class="[
                'inline-flex items-center w-fit',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
        ]"
       @click="onChange">
    <!-- Hidden Checkbox Input -->
    <input :checked="isChecked"
           :value="value"
           class="sr-only"
           type="checkbox"/>

    <!-- Custom Checkbox Style -->
    <div :class="['flex items-center justify-center rounded border transition-all duration-300 ease-in-out',
                  Size[size],
                  glass && 'backdrop-blur-xl backdrop-saturate-150',
                  glass && 'border-white/20',
                  glass && 'shadow-lg shadow-black/5',
                  glass ? (
                    (isChecked || indeterminate) ? (
                      type === 'primary' ? (isDark ? 'bg-blue-500/30' : 'bg-blue-400/40') :
                      type === 'success' ? (isDark ? 'bg-green-500/30' : 'bg-green-400/40') :
                      type === 'warning' ? (isDark ? 'bg-yellow-500/30' : 'bg-yellow-400/40') :
                      (isDark ? 'bg-red-500/30' : 'bg-red-400/40')
                    ) : (isDark ? 'bg-white/10' : 'bg-white/30')
                  ) : (
                    {
                      'bg-blue-400': type === 'primary' && (isChecked || indeterminate),
                      'bg-green-400': type === 'success' && (isChecked || indeterminate),
                      'bg-yellow-400': type === 'warning' && (isChecked || indeterminate),
                      'bg-red-400': type === 'error' && (isChecked || indeterminate),
                      'bg-white': !isChecked && !indeterminate && !isDark,
                      'bg-gray-800 border-gray-600': !isChecked && !indeterminate && isDark
                    }
                  )]">
      <svg v-if="indeterminate"
           :key="`indeterminate-${isChecked}`"
           :class="[glass ? (isDark ? 'text-gray-100' : 'text-gray-800') : 'text-white', ToggleSize[size]]"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
           style="animation: checkboxPop 0.3s ease-in-out;">
        <path d="M5 12h14"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"/>
      </svg>
      <svg v-else-if="isChecked"
           :key="`checked-${isChecked}`"
           :class="[glass ? (isDark ? 'text-gray-100' : 'text-gray-800') : 'text-white', ToggleSize[size]]"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
           style="animation: checkboxPop 0.3s ease-in-out;">
        <path d="M5 13l4 4L19 7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"/>
      </svg>
    </div>

    <!-- Label Slot -->
    <div v-if="$slots.label" :class="['ml-2 text-sm text-nowrap', isDark ? 'text-gray-200' : '']">
      <slot name="label"/>
    </div>
    <div v-else :class="['ml-2 text-sm text-nowrap', isDark ? 'text-gray-200' : '']">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

enum Size
{
  default = 'w-5 h-5',
  small = 'w-4 h-4',
  large = 'w-6 h-6'
}

enum ToggleSize
{
  default = 'w-3 h-3',
  small = 'w-2 h-2',
  large = 'w-4 h-4'
}

const emit = defineEmits(['update:modelValue', 'on-change'])

const props = withDefaults(defineProps<{
  modelValue?: any,
  value?: any,
  disabled?: boolean,
  size?: keyof typeof Size,
  type?: 'primary' | 'success' | 'warning' | 'error',
  indeterminate?: boolean,
  dark?: boolean,
  glass?: boolean
}>(), {
  modelValue: null,
  disabled: false,
  size: 'default',
  type: 'primary',
  indeterminate: false,
  dark: false,
  glass: false
})

// Get the checkboxGroup data and dark mode from parent
const checkboxGroup = inject<{ modelValue: { modelValue: any[] }, updateModelValue: Function } | null>('checkboxGroup', null)
const groupDark = inject<any>('checkboxGroupDark', false)
const groupGlass = inject<any>('checkboxGroupGlass', false)
const isDark = computed(() => props.dark || (typeof groupDark === 'object' && groupDark.value !== undefined ? groupDark.value : groupDark))
const glass = computed(() => props.glass || (typeof groupGlass === 'object' && groupGlass.value !== undefined ? groupGlass.value : groupGlass))

// Computed property to check if the checkbox is checked
const isChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.modelValue.modelValue.includes(props.value)
  }
  return props.modelValue === props.value
})

// Function to handle checkbox change
const onChange = () => {
  if (!props.disabled) {
    if (checkboxGroup) {
      // Call updateModelValue to update the group state
      checkboxGroup.updateModelValue(props.value, !isChecked.value)
    }
    else {
      const newValue = isChecked.value ? null : props.value
      emit('update:modelValue', newValue)
      emit('on-change', newValue)
    }
  }
}
</script>