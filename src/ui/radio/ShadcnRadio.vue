<template>
  <div :class="[
                'inline-flex items-center cursor-pointer',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
        ]"
       @click="onChange">
    <!-- Radio Input -->
    <input type="radio"
           :value="value"
           :checked="modelValue === value"
           :disabled="disabled"
           class="sr-only"/>

    <!-- Custom Radio Style -->
    <div :class="['flex items-center justify-center rounded-full border transition-colors duration-300',
                  Size[size],
                  {
                    'bg-blue-400': type === 'primary' && modelValue === value,
                    'bg-green-400': type === 'success' && modelValue === value,
                    'bg-yellow-400': type === 'warning' && modelValue === value,
                    'bg-red-400': type === 'error' && modelValue === value,
                    'bg-white': modelValue !== value
                  }]">
      <div v-if="modelValue === value"
           :class="['bg-white rounded-full',
                    ToggleSize[size],
            ]"/>
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
const emit = defineEmits(['update:modelValue', 'on-change'])

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

const props = withDefaults(defineProps<{
  modelValue?: any,
  value: any,
  disabled?: boolean
  size?: keyof typeof Size
  type?: 'primary' | 'success' | 'warning' | 'error'
}>(), {
  disabled: false,
  size: 'default',
  type: 'primary'
})

const onChange = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.value)
    emit('on-change', props.value)
  }
}
</script>
