<template>
  <div :class="['relative w-full items-center border rounded transition-all duration-300',
                glass && 'backdrop-blur-xl backdrop-saturate-150',
                glass && 'border-white/20',
                glass && 'shadow-lg shadow-black/5',
                glass ? (dark ? 'bg-white/10' : 'bg-white/30') : (dark ? 'border-gray-600 active:border-gray-500 hover:border-gray-500 bg-gray-800' : 'border-gray-300 active:border-blue-400 hover:border-blue-400')
       ]"
       @mouseenter="hovered = true"
       @mouseleave="hovered = false">
    <component :is="isTextarea ? 'textarea' : 'input'"
               v-bind="isTextarea
                       ? { rows: props.rows, cols: props.cols }
                       : { type: currentType }"
               :class="cn('w-full p-2 rounded outline-none border-none',
                        type !== 'textarea' && size && Size[size],
                        $slots.prefix && 'pl-8',
                        $slots.suffix && 'pr-8',
                        glass ? 'bg-transparent' : '',
                        glass ? (dark ? 'text-gray-100 placeholder:text-gray-400' : 'text-gray-900 placeholder:text-gray-600') : (dark ? 'bg-gray-800 text-gray-200 placeholder:text-gray-500' : '')
               )"
               :style="wordCount || maxCount ? { paddingRight: paddingRight + 'px' } : ''"
               :value="localValue"
               :placeholder="placeholder"
               :maxlength="maxCount"
               :disabled="disabled"
               :readonly="readonly"
               @input="onInput"
               @blur="onBlur"
               @update:modelValue="onModelValueUpdate"/>

    <span v-if="clearable && localValue && hovered" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="onClear">
      <ShadcnIcon :class="['size-5', dark ? 'text-gray-400' : 'text-muted-foreground']" icon="CircleX"/>
    </span>

    <span v-if="type === 'password'" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="togglePasswordVisibility">
      <ShadcnIcon :class="['size-5', dark ? 'text-gray-400' : 'text-muted-foreground']" :icon="showPassword ? 'Eye' : 'EyeOff'"/>
    </span>

    <span v-if="wordCount" ref="wordCountSpan" :class="['absolute end-0 inset-y-0 flex items-center justify-center px-2 text-xs font-thin w-auto',
                                                        dark ? 'text-gray-500' : 'text-gray-400']">
      <span v-if="maxCount">{{ textCount }} / {{ maxCount }}</span>
      <span v-else>{{ textCount }}</span>
    </span>

    <span v-if="$slots.prefix" :class="['absolute start-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer',
                                        dark ? 'text-gray-500' : 'text-gray-400']"
          @click="onPrefixClick">
      <slot name="prefix"/>
    </span>

    <span v-if="$slots.suffix" :class="['absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer',
                                        dark ? 'text-gray-500' : 'text-gray-400']"
          @click="onSuffixClick">
      <slot name="suffix"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { computed, inject, nextTick, onMounted, ref, watch } from 'vue'
import { Size } from '@/ui/enum/Size.ts'
import { FormItemContext } from '@/ui/form/context.ts'
import { InputEmits, InputProps } from '@/ui/input/types.ts'
import { ShadcnIcon } from "@/ui/icon";

const emit = defineEmits<InputEmits>()

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

const onModelValueUpdate = (value: Object) => {
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
</script>