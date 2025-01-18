<template>
  <div :class="[
                'relative inline-flex items-center',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
       ]"
       @click="toggleSwitch">

    <!-- Switch track -->
    <div :class="['relative flex items-center justify-between rounded-full transition-colors duration-300',
                  {
                    'pr-1': !isActive,
                    'pl-1': isActive
                  },
                  Size[size],
                  {
                    'bg-blue-400': type === 'primary' && isActive,
                    'bg-green-400': type === 'success' && isActive,
                    'bg-yellow-400': type === 'warning' && isActive,
                    'bg-red-400': type === 'error' && isActive,
                    'bg-gray-300': !isActive
                  }
                ]">
      <!-- Open text -->
      <div v-if="$slots.open && !isActive"
           class="ml-6 text-white text-xs whitespace-nowrap"
           :class="TextSize[size]">
        <slot name="open"/>
      </div>

      <!-- Close text -->
      <div v-if="$slots.close && isActive"
           class="mr-6 text-white text-xs whitespace-nowrap ml-auto"
           :class="TextSize[size]">
        <slot name="close"/>
      </div>

      <!-- Switch toggle -->
      <div :class="['absolute bg-white rounded-full transition-all duration-300',
                    ToggleSize[size],
                    {
                      'left-0.5': !isActive,
                      'right-0.5': isActive
                    }
                  ]">
      </div>
    </div>

    <!-- Hidden checkbox for accessibility -->
    <input type="checkbox"
           class="sr-only"
           :checked="isActive"
           @change="onChange"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue', 'on-change'])

enum Size {
  small = 'h-5 min-w-[2.5rem]',
  default = 'h-6 min-w-[3.5rem]',
  large = 'h-8 min-w-[5rem]'
}

const ToggleSize = {
  small: 'w-4 h-4',
  default: 'w-5 h-5',
  large: 'w-7 h-7'
}

const TextSize = {
  small: 'text-xs',
  default: 'text-sm',
  large: 'text-base'
}

const props = withDefaults(defineProps<{
  modelValue?: any
  type?: 'primary' | 'success' | 'warning' | 'error'
  size?: keyof typeof Size
  disabled?: boolean
  trueValue?: any
  falseValue?: any
}>(), {
  modelValue: false,
  type: 'primary',
  size: 'default',
  trueValue: true,
  falseValue: false
})

const isActive = computed(() => props.modelValue === props.trueValue)

const toggleSwitch = () => {
  if (props.disabled) {
    return
  }
  const newValue = isActive.value ? props.falseValue : props.trueValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

const onChange = (event: Event) => {
  if (props.disabled) {
    return
  }
  const target = event.target as HTMLInputElement
  const newValue = target.checked ? props.trueValue : props.falseValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}
</script>