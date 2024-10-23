<template>
  <div :class="[
                'inline-flex items-center',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
        ]"
       @click="onChange">
    <!-- Hidden Checkbox Input -->
    <input type="checkbox"
           :checked="isChecked"
           class="sr-only"
           :value="value"/>

    <!-- Custom Checkbox Style -->
    <div :class="['flex items-center justify-center rounded border transition-colors duration-300',
                  Size[size],
                  {
                    'bg-blue-400': type === 'primary' && modelValue === value,
                    'bg-green-400': type === 'success' && modelValue === value,
                    'bg-yellow-400': type === 'warning' && modelValue === value,
                    'bg-red-400': type === 'error' && modelValue === value,
                    'bg-white': modelValue !== value
                  }]">
      <svg v-if="isChecked"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           :class="['text-white', ToggleSize[size]]">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"/>
      </svg>
    </div>

    <!-- Label Slot -->
    <div v-if="$slots.label" class="ml-2 text-sm">
      <slot name="label"/>
    </div>
    <div v-else class="ml-2 text-sm">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  disabled?: boolean
  size?: keyof typeof Size
  type?: 'primary' | 'success' | 'warning' | 'error'
}>(), {
  modelValue: null,
  disabled: false,
  size: 'default',
  type: 'primary'
})

// Computed property to check if the checkbox is checked based on modelValue and value
const isChecked = computed(() => props.modelValue === props.value)

const onChange = () => {
  if (!props.disabled) {
    const newValue = isChecked.value ? null : props.value
    emit('update:modelValue', newValue)
    emit('on-change', newValue)
  }
}
</script>
