<template>
  <div :class="['relative inline-flex items-center',
                Size[size],
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
       ]"
       @click="toggleSwitch">

    <!-- Switch track -->
    <div :class="['relative w-full flex items-center justify-between',
                  Size[size]
                ]">

      <div v-if="$slots.close && isActive" class="absolute left-0 pl-1.5 text-white text-xs z-10">
        <slot name="close"/>
      </div>

      <div :class="['absolute w-full h-full rounded-full transition-colors duration-300',
                    {
                      'bg-blue-400': type === 'primary' && isActive,
                      'bg-green-400': type === 'success' && isActive,
                      'bg-yellow-400': type === 'warning' && isActive,
                      'bg-red-400': type === 'error' && isActive,
                      'bg-gray-300': !isActive
                    }
                  ]">
      </div>

      <div v-if="$slots.open && !isActive" class="absolute right-0 pr-1.5 text-white text-xs">
        <slot name="open"/>
      </div>

      <!-- Switch toggle -->
      <div :class="['absolute h-full bg-white rounded-full transition-all duration-300',
                    ToggleSize[size],
                    {
                      'left-0': !isActive,
                      'right-0': isActive
                    }
                  ]">
      </div>

      <!-- Hidden checkbox for accessibility -->
      <input type="checkbox"
             class="sr-only"
             :checked="isActive"
             @change="onChange"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue', 'on-change'])

enum Size
{
  small = 'w-10 h-5',
  default = 'w-14 h-6',
  large = 'w-20 h-8'
}

const ToggleSize = {
  small: 'w-5 h-4',
  default: 'w-6 h-6',
  large: 'w-8 h-6'
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
