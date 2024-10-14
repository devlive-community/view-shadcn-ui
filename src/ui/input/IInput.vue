<template>
  <div class="relative w-full max-w-sm items-center"
       @mouseenter="hovered = true"
       @mouseleave="hovered = false">
    <Input type="text" :class="cn('focus-visible:border-blue-300 focus-visible:ring-0 active:border-blue-300',
                                  size && Size[size])"
           :default-value="localValue"
           :value="localValue"
           :placeholder="placeholder"
           @input="onInput"
           @update:modelValue="onModelValueUpdate"/>
    <span v-if="clearable && localValue && hovered" class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
          @click="onClear">
      <CircleXIcon class="size-5 text-muted-foreground"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils.ts'
import { CircleXIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { Size } from '@/ui/enum/Size.ts'

const emit = defineEmits(['on-change', 'on-clear', 'update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  clearable?: boolean
  size?: keyof typeof Size
}>(), {
  modelValue: '',
  placeholder: '',
  clearable: false,
  size: 'default'
})

const localValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  localValue.value = newValue
}, { immediate: true })

const hovered = ref(false)

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
</script>
