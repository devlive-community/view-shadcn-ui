<template>
  <div class="flex px-2 border rounded-md"
       :class="[
           Size[finalSize],
           [HoverType[type]]
       ]">
    <div class="flex gap-2 w-full overflow-x-auto py-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
         ref="containerRef">
      <div v-for="tag in modelValue"
           class="flex items-center gap-1 px-1 py-0.5 text-sm bg-primary/10 text-primary rounded-md whitespace-nowrap"
           :key="tag">
        <span>{{ tag }}</span>
        <button type="button"
                class="text-primary hover:text-primary/80 focus:outline-none"
                :disabled="disabled"
                @click="onRemoveTag(tag)">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="14"
               height="14"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>

      <input v-model="inputValue"
             ref="inputRef"
             class="flex-1 min-w-[120px] bg-transparent border-none focus:outline-none text-sm"
             type="text"
             :placeholder="modelValue.length === 0 ? placeholder : ''"
             :disabled="disabled || modelValue.length >= max"
             @keydown="handleKeydown">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { InputTagEmits, InputTagProps } from './types'
import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'

const emit = defineEmits<InputTagEmits>()
const props = withDefaults(defineProps<InputTagProps>(), {
  modelValue: () => [],
  placeholder: 'Add tag...',
  disabled: false,
  size: 'default',
  type: 'primary',
  max: Infinity
})

const finalSize = computed(() => props.size)
const containerRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLElement | null>(null)
const inputValue = ref('')

const canAddTag = computed(() => {
  return !props.disabled &&
      inputValue.value.trim() !== '' &&
      !props.modelValue.includes(inputValue.value.trim()) &&
      props.modelValue.length < props.maxTags
})

const onAddTag = () => {
  if (canAddTag.value) {
    const newTag = inputValue.value.trim()
    const newTags = [...props.modelValue, newTag]
    emit('update:modelValue', newTags)
    emit('on-add', newTag)
    inputValue.value = ''

    nextTick(() => {
      if (containerRef.value) {
        const container = containerRef.value
        container.scrollLeft = container.scrollWidth - container.clientWidth
      }
    })
  }
}

const onRemoveTag = (tag: string) => {
  const newTags = props.modelValue.filter(t => t !== tag)
  emit('update:modelValue', newTags)
  emit('on-remove', tag)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault()
    onAddTag()
  }
  else if (e.key === 'Backspace' && inputValue.value === '' && props.modelValue.length > 0) {
    const lastTag = props.modelValue[props.modelValue.length - 1]
    onRemoveTag(lastTag)
  }
}
</script>
