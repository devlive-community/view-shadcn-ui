<template>
  <div :class="[
                'inline-flex items-center',
                {
                  'cursor-pointer': !disabled,
                  'cursor-not-allowed opacity-50': disabled
                }
        ]"
       @click="onChange">
    <!-- Radio Input -->
    <input type="radio"
           :value="value"
           :checked="isChecked"
           :disabled="disabled"
           class="sr-only"/>

    <!-- Custom Radio Style -->
    <div :class="['flex items-center justify-center rounded-full border transition-colors duration-300',
                  Size[size],
                  {
                    'bg-blue-400': type === 'primary' && isChecked,
                    'bg-green-400': type === 'success' && isChecked,
                    'bg-yellow-400': type === 'warning' && isChecked,
                    'bg-red-400': type === 'error' && isChecked,
                    'bg-white': !isChecked
                  }]">
      <div v-if="isChecked"
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
import { computed, inject } from 'vue'

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
  modelValue?: any
  value: any
  disabled?: boolean
  size?: keyof typeof Size
  type?: 'primary' | 'success' | 'warning' | 'error'
}>(), {
  disabled: false,
  size: 'default',
  type: 'primary'
})

const radioGroup = inject<{ modelValue: { modelValue: any }, updateModelValue: Function } | null>('radioGroup', null)

const isChecked = computed(() => {
  if (radioGroup) {
    return radioGroup.modelValue.modelValue === props.value
  }
  return props.modelValue === props.value
})

const onChange = () => {
  if (!props.disabled) {
    if (radioGroup) {
      radioGroup.updateModelValue(props.value)
    }
    else {
      emit('update:modelValue', props.value)
      emit('on-change', props.value)
    }
  }
}
</script>
