<template>
  <div class="relative">
    <div :class="['flex items-center justify-between border rounded p-3 pr-1.5 transition-all duration-300',
              glass && 'backdrop-blur-xl backdrop-saturate-150',
              glass && 'border-white/20',
              glass && 'shadow-lg shadow-black/5',
              Size[size],
              !glass && HoverType[type],
              glass ? (dark ? 'bg-white/10' : 'bg-white/80') : '',
              {
                'cursor-pointer': !disabled,
                'cursor-not-allowed opacity-50': disabled,
                'bg-gray-100': disabled && !dark && !glass,
                'bg-gray-700': disabled && dark && !glass,
                'border-gray-600 bg-gray-800': dark && !glass,
                'hover:border-gray-500': dark && !disabled && !glass,
                'hover:border-white/30': glass && !disabled
              }
         ]"
         @mouseover="onHover"
         @mouseleave="onLeave">
      <!-- Input field for direct number entry -->
      <input :class="['w-full outline-none text-sm transition-colors duration-200',
                  (!validValue && displayValue) && 'line-through',
                  glass ? 'bg-transparent' : '',
                  glass ? (dark ? 'text-gray-200 placeholder:text-gray-400' : 'text-gray-900 placeholder:text-gray-600') : (dark && 'bg-gray-800 text-gray-200 placeholder:text-gray-500')
             ]"
             type="text"
             :value="displayValue"
             :disabled="disabled"
             :placeholder="placeholder"
             @input.stop="onInput"
             @blur.stop="onBlur"/>

      <!-- Clear -->
      <div v-if="clearable && displayValue && hovered"
           class="flex items-center"
           @click.stop="onClear">
        <slot name="clear">
          <svg viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               :class="['w-3 h-3 p-0.5 rounded-full',
                        dark ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-muted-foreground'
               ]">
            <path d="M5 19L19 5M5 5l14 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </slot>
      </div>

      <!-- Control -->
      <div v-if="showControl"
           class="ml-1 flex flex-col -my-1">
        <div :class="[
                  'h-3 flex items-center justify-center transition-all duration-200',
                  {
                    'cursor-pointer rounded hover:scale-110': !disabled && validValue && Number(localValue) < Number(props.max),
                    'cursor-not-allowed opacity-50': !validValue || Number(localValue) >= Number(props.max)
                  }
              ]"
             @click.stop="onAdd">
          <slot name="add">
            <svg viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 :class="['w-2.5 h-2.5 mt-1',
                          dark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-muted-foreground'
                 ]">
              <path d="M13 8H3M8 3v10"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </slot>
        </div>
        <div :class="[
                  'h-3 flex items-center justify-center transition-all duration-200',
                  {
                    'cursor-pointer rounded hover:scale-110': !disabled && validValue && Number(localValue) > Number(props.min),
                    'cursor-not-allowed opacity-50': !validValue || Number(localValue) <= Number(props.min)
                  }
             ]"
             @click.stop="onMinus">
          <slot name="minus">
            <svg viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 :class="['w-2.5 h-2.5',
                          dark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-muted-foreground'
                 ]">
              <path d="M13 8H3"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, inject, ref, watch } from 'vue'
import { NumberEmits, NumberProps } from './types'
import { isNumber } from '@/utils/number.ts'
import { Size } from '@/ui/common/size.ts'
import { FormItemContext } from '@/ui/form/context.ts'
import { HoverType } from '@/ui/common/type.ts'

const emit = defineEmits<NumberEmits>()
const props = withDefaults(defineProps<NumberProps>(), {
  size: 'default',
  type: 'primary',
  disabled: false,
  min: -Infinity,
  max: Infinity,
  clearable: false,
  showControl: true,
  formatter: (value: number) => value.toString(),
  parser: (value: string) => Number(value),
  dark: false,
  glass: false
})

const localValue = ref(props.modelValue)
const validValue = ref(isNumber(props.modelValue))
const hovered = ref(false)

const displayValue = computed(() => {
  if (!validValue.value) {
    return localValue.value
  }

  if (localValue.value === null || localValue.value === undefined) {
    return localValue.value
  }

  return props.formatter ? props.formatter(Number(localValue.value)) : localValue.value
})

const formItemContext = props.name ? inject<FormItemContext | null>(`form-item-${props.name}`) : null

watch(() => props.modelValue, (newValue) => {
  validValue.value = isNumber(newValue)

  if (isNumber(newValue)) {
    const numValue = Number(newValue)
    const min = Number(props.min ?? -Infinity)
    const max = Number(props.max ?? Infinity)

    if (numValue < min || numValue > max) {
      validValue.value = false
    }
  }

  localValue.value = newValue
})

const onChange = (value: any) => {
  if (props.parser && typeof value === 'string') {
    try {
      value = props.parser(value)
    }
    catch (e) {
      console.error('Failed to parse value:', e)
      validValue.value = false
      return
    }
  }

  emit('update:modelValue', value)
  emit('on-change', value)
}

const onHover = () => {
  if (!props.disabled) {
    hovered.value = true
  }
}

const onLeave = () => {
  hovered.value = false
}

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  localValue.value = value
  onChange(value)
}

const onBlur = (event: FocusEvent) => {
  const value = (event.target as HTMLInputElement).value
  localValue.value = value

  onChange(value)
  emit('on-blur', value)

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const onClear = () => {
  onChange(null)
  emit('on-clear', null)
}

const onAdd = () => {
  if (validValue.value) {
    const newValue = Number(localValue.value) + 1
    if (newValue <= Number(props.max)) {
      onChange(newValue)
    }
  }
}

const onMinus = () => {
  if (validValue.value) {
    const newValue = Number(localValue.value) - 1
    if (newValue >= Number(props.min)) {
      onChange(newValue)
    }
  }
}
</script>