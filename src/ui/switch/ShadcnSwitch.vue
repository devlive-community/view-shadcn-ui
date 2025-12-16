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
    <div :class="['relative flex items-center justify-between rounded-full transition-all duration-300 ease-in-out',
                  {
                    'pr-1': !isActive,
                    'pl-1': isActive
                  },
                  glass && 'backdrop-blur-xl backdrop-saturate-150',
                  glass && 'border border-white/20',
                  glass && 'shadow-lg shadow-black/5',
                  Size[size],
                  glass ? (
                    isActive ? (
                      type === 'primary' ? (dark ? 'bg-blue-500/30' : 'bg-blue-400/40') :
                      type === 'success' ? (dark ? 'bg-green-500/30' : 'bg-green-400/40') :
                      type === 'warning' ? (dark ? 'bg-yellow-500/30' : 'bg-yellow-400/40') :
                      (dark ? 'bg-red-500/30' : 'bg-red-400/40')
                    ) : (dark ? 'bg-white/10' : 'bg-white/30')
                  ) : (
                    isActive ? (
                      type === 'primary' ? 'bg-blue-400' :
                      type === 'success' ? 'bg-green-400' :
                      type === 'warning' ? 'bg-yellow-400' :
                      'bg-red-400'
                    ) : (dark ? 'bg-gray-600' : 'bg-gray-300')
                  )
                ]">
      <!-- Open text -->
      <div v-if="$slots.open && !isActive"
           class="ml-6 text-xs whitespace-nowrap transition-opacity duration-300"
           :class="[TextSize[size], glass ? (dark ? 'text-gray-200' : 'text-gray-700') : 'text-white']">
        <slot name="open"/>
      </div>

      <!-- Close text -->
      <div v-if="$slots.close && isActive"
           class="mr-6 text-xs whitespace-nowrap ml-auto transition-opacity duration-300"
           :class="[TextSize[size], glass ? (dark ? 'text-gray-200' : 'text-gray-700') : 'text-white']">
        <slot name="close"/>
      </div>

      <!-- Switch toggle -->
      <div :class="[
                    'absolute left-0.5 rounded-full transition-all duration-300 ease-in-out',
                    glass && 'shadow-lg',
                    glass ? (dark ? 'bg-white/90' : 'bg-white') : (dark ? 'bg-gray-200' : 'bg-white'),
                    ToggleSize[size]
                  ]"
           :style="{
             transform: `translateX(${isActive ? toggleOffset : '0px'}) ${isActive ? 'scale(1.1)' : 'scale(1)'}`
           }">
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
import { SwitchProps, SwitchEmits } from './types'

const emit = defineEmits<SwitchEmits>()

enum Size
{
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

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  type: 'primary',
  size: 'default',
  trueValue: true,
  falseValue: false,
  dark: false,
  glass: false
})

const isActive = computed(() => props.modelValue === props.trueValue)

const toggleOffset = computed(() => {
  const offsets = {
    small: '20px',
    default: '30px',
    large: '48px'
  }
  return offsets[props.size]
})

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