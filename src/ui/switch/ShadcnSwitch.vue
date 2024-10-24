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

      <div v-if="$slots.close && modelValue" class="absolute left-0 pl-1.5 text-white text-xs z-10">
        <slot name="close"/>
      </div>

      <div :class="['absolute w-full h-full rounded-full transition-colors duration-300',
                    {
                      'bg-blue-400': type === 'primary' && modelValue,
                      'bg-green-400': type === 'success' && modelValue,
                      'bg-yellow-400': type === 'warning' && modelValue,
                      'bg-red-400': type === 'error' && modelValue,
                      'bg-gray-300': !modelValue
                    }
                  ]">
      </div>

      <div v-if="$slots.open && !modelValue" class="absolute right-0 pr-1.5 text-white text-xs">
        <slot name="open"/>
      </div>

      <!-- Switch toggle -->
      <div :class="['absolute h-full bg-white rounded-full transition-all duration-300',
                    ToggleSize[size],
                    {
                      'left-0': !modelValue,
                      'right-0': modelValue
                    }
                  ]">
      </div>

      <!-- Hidden checkbox for accessibility -->
      <input type="checkbox"
             class="sr-only"
             :checked="modelValue"
             @change="onChange"/>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  modelValue?: boolean
  type?: 'primary' | 'success' | 'warning' | 'error'
  size?: keyof typeof Size
  disabled?: boolean
}>(), {
  modelValue: false,
  type: 'primary',
  size: 'default'
})

const toggleSwitch = () => {
  if (props.disabled) {
    return
  }
  emit('update:modelValue', !props.modelValue)
  emit('on-change', !props.modelValue)
}

const onChange = (event: Event) => {
  if (props.disabled) {
    return
  }
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('on-change', target.checked)
}
</script>
