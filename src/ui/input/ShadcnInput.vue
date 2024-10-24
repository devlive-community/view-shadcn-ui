<template>
  <div class="relative w-full max-w-sm items-center"
       @mouseenter="hovered = true"
       @mouseleave="hovered = false">
    <component :is="isTextarea ? 'textarea' : 'input'"
               v-bind="isTextarea
                       ? { rows: props.rows, cols: props.cols }
                       : { type: currentType }"
               :class="cn('w-full p-2 border-gray-300 active:border-blue-400 hover:border-blue-400 border rounded transition-colors duration-300',
                        type !== 'textarea' && size && Size[size],
                        $slots.prefix && 'pl-6',
                        $slots.suffix && 'pr-6'
               )"
               :style="wordCount || maxCount ? { paddingRight: paddingRight + 'px' } : ''"
               :value="localValue"
               :placeholder="placeholder"
               :maxlength="maxCount"
               :disabled="disabled"
               @input="onInput"
               @update:modelValue="onModelValueUpdate"/>

    <span v-if="clearable && localValue && hovered" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="onClear">
      <ShadcnIcon class="size-5 text-muted-foreground" icon="CircleX"/>
    </span>

    <span v-if="type === 'password'" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="togglePasswordVisibility">
      <ShadcnIcon :icon="showPassword ? 'Eye' : 'EyeOff'" class="size-5 text-muted-foreground"/>
    </span>

    <span v-if="wordCount" ref="wordCountSpan" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 text-gray-400 text-xs font-thin w-auto">
      <span v-if="maxCount">{{ textCount }} / {{ maxCount }}</span>
      <span v-else>{{ textCount }}</span>
    </span>

    <span v-if="$slots.prefix" class="absolute start-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="onPrefixClick">
      <slot v-if="$slots.prefix" name="prefix"/>
    </span>

    <span v-if="$slots.suffix" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="onSuffixClick">
      <slot v-if="$slots.suffix" name="suffix"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { Size } from '@/ui/enum/Size.ts'
import ShadcnIcon from '@/ui/icon'

const emit = defineEmits(['on-change', 'on-clear', 'on-prefix-click', 'on-suffix-click', 'update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  clearable?: boolean
  size?: keyof typeof Size
  wordCount?: boolean
  maxCount?: number | string
  disabled?: boolean
  type?: string
  rows?: number | string
  cols?: number | string
}>(), {
  modelValue: '',
  placeholder: '',
  clearable: false,
  size: 'default',
  wordCount: false,
  type: 'text',
  rows: 3,
  cols: 20
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
  return localValue.value.length
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
