<template>
  <div class="relative w-full max-w-sm items-center"
       @mouseenter="hovered = true"
       @mouseleave="hovered = false">
    <Input type="text" :class="cn('focus-visible:border-blue-300 focus-visible:ring-0 active:border-blue-300')"
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

const emit = defineEmits(['on-change', 'on-clear', 'update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  clearable?: boolean
}>(), {
  modelValue: '',
  placeholder: '',
  clearable: false
})

const localValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  localValue.value = newValue
})

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
