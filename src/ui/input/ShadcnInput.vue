<template>
  <div :class="containerClasses" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <component
        :is="isTextarea ? 'textarea' : 'input'"
        v-bind="isTextarea
                       ? { rows: props.rows, cols: props.cols }
                       : { type: currentType }"
        :class="inputClasses"
        :style="wordCount || maxCount ? { paddingRight: paddingRight + 'px' } : ''"
        :value="localValue"
        :placeholder="placeholder"
        :maxlength="maxCount"
        :disabled="disabled"
        :readonly="readonly"
        @input="onInput"
        @blur="onBlur"
        @update:model-value="onModelValueUpdate"/>

    <span
        v-if="clearable && localValue && hovered"
        class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
        @click="onClear">
      <ShadcnIcon :class="['size-5', iconColorClasses]" :dark="props.dark" :glass="props.glass" icon="CircleX"/>
    </span>

    <span
        v-if="type === 'password'"
        class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
        @click="togglePasswordVisibility">
      <ShadcnIcon :class="['size-5', iconColorClasses]" :dark="props.dark" :glass="props.glass" :icon="showPassword ? 'Eye' : 'EyeOff'"/>
    </span>

    <span v-if="wordCount" ref="wordCountSpan" :class="wordCountClasses">
      <span v-if="maxCount">{{ textCount }} / {{ maxCount }}</span>
      <span v-else>{{ textCount }}</span>
    </span>

    <span v-if="$slots.prefix" :class="prefixClasses" @click="onPrefixClick">
      <slot name="prefix"/>
    </span>

    <span v-if="$slots.suffix" :class="suffixClasses" @click="onSuffixClick">
      <slot name="suffix"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onMounted, ref, useSlots, watch } from 'vue'
import { getBackground, getBorder, getComponentSize, getGlassStyles, getInputBorderActive, getInputBorderHover, getText, type ThemeMode } from '@/utils/theme'
import { FormItemContext } from '@/ui/form/context.ts'
import { InputEmits, InputProps } from '@/ui/input/types.ts'
import { ShadcnIcon } from '@/ui/icon'

const emit = defineEmits<InputEmits>()
const $slots = useSlots()

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: '',
  clearable: false,
  size: 'default',
  wordCount: false,
  type: 'text',
  rows: 3,
  cols: 20,
  dark: false,
  glass: false
})

const localValue = ref(props.modelValue)
const hovered = ref(false)
const showPassword = ref(false)

const isTextarea = computed(() => props.type === 'textarea')

watch(() => props.modelValue, (newValue) => {
  localValue.value = newValue
}, { immediate: true })

const currentType = computed(() => {
  return showPassword.value ? 'text' : props.type
})

// Count the total number of characters entered
const textCount = computed(() => {
  return localValue.value?.length ?? 0
})

// Used to calculate and monitor the total number of input characters + length limit
const wordCountSpan = ref<HTMLElement | null>(null)
const paddingRight = ref(12)

const updatePaddingRight = () => {
  if (wordCountSpan.value) {
    paddingRight.value = wordCountSpan.value.offsetWidth
  }
}

onMounted(() => {
  nextTick(() => updatePaddingRight())
})

watch(textCount, () => {
  nextTick(() => updatePaddingRight())
})

const onInput = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value
  localValue.value = newValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

const formItemContext = props.name ? inject<FormItemContext | null>(`form-item-${props.name}`) : null

const onBlur = (event: FocusEvent) => {
  const newValue = (event.target as HTMLInputElement).value
  localValue.value = newValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
  emit('on-blur', newValue)

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const onModelValueUpdate = (value: any) => {
  const newValue = String(value)
  localValue.value = newValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
}

const onClear = () => {
  const newValue = ''
  localValue.value = newValue
  emit('update:modelValue', newValue)
  emit('on-change', newValue)
  emit('on-clear')
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const onPrefixClick = () => {
  emit('on-prefix-click')
}

const onSuffixClick = () => {
  emit('on-suffix-click')
}

const containerClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = ['relative w-full items-center border rounded transition-all duration-300']

  if (props.glass) {
    return [
      ...baseClasses,
      ...getGlassStyles(mode, { withHover: false, withBorder: true, withText: false })
    ]
  }

  return [
    ...baseClasses,
    getBorder(mode),
    getBackground(mode),
    getInputBorderHover(mode),
    getInputBorderActive(mode)
  ]
})

const inputClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  const baseClasses = ['w-full p-2 rounded outline-none border-none']

  if (props.disabled) {
    baseClasses.push('opacity-50 cursor-not-allowed')
  }

  if (props.type !== 'textarea' && props.size) {
    baseClasses.push(getComponentSize('input', props.size))
  }

  if ($slots.prefix) {
    baseClasses.push('pl-8')
  }

  if ($slots.suffix) {
    baseClasses.push('pr-8')
  }

  if (props.glass) {
    baseClasses.push('bg-transparent')
    baseClasses.push(getText(mode))
    baseClasses.push(props.dark ? 'placeholder:text-gray-400' : 'placeholder:text-gray-600')
  }
  else {
    if (props.dark) {
      baseClasses.push('bg-gray-800 text-gray-200 placeholder:text-gray-500')
    }
  }

  return baseClasses
})

const iconColorClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return getText(mode, 'muted')
})

const wordCountClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return ['absolute end-0 inset-y-0 flex items-center justify-center px-2 text-xs font-thin w-auto', getText(mode, 'disabled')]
})

const prefixClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return ['absolute start-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer', getText(mode, 'muted')]
})

const suffixClasses = computed(() => {
  const mode: ThemeMode = { dark: props.dark, glass: props.glass }
  return ['absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer', getText(mode, 'muted')]
})
</script>