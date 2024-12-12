<template>
  <div class="flex px-2 border rounded-md"
       :class="[
           Size[finalSize],
           [HoverType[type]],
           { 'cursor-not-allowed opacity-50 bg-gray-100': disabled }
       ]">
    <div class="flex gap-2 w-full overflow-x-auto py-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
         ref="containerRef">
      <div v-for="tag in modelValue"
           :class="[
             'flex items-center gap-1 px-1 py-0.5 text-sm rounded-md whitespace-nowrap transition-colors duration-300',
             {
               'bg-primary/10 text-primary': !isHighlighted(tag),
               'bg-red-100 text-red-600 animate-pulse': isHighlighted(tag)
             }
           ]"
           :key="tag">
        <span>{{ tag }}</span>
        <button type="button"
                :class="[
                  'hover:text-primary/80 focus:outline-none',
                  {
                    'text-primary': !isHighlighted(tag),
                    'text-red-600': isHighlighted(tag)
                  }
                ]"
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
             class="flex-1 min-w-[100px] bg-transparent border-none focus:outline-none text-sm"
             :class="{ 'cursor-not-allowed opacity-50 bg-gray-100': disabled }"
             type="text"
             :placeholder="modelValue.length === 0 ? placeholder : ''"
             :disabled="disabled || modelValue.length >= max"
             :name="name"
             @keydown="handleKeydown"
             @blur="handleBlur"
             @keypress.enter.prevent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref } from 'vue'
import { t } from '@/utils/locale'
import { InputTagEmits, InputTagProps } from './types'
import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'
import { FormItemContext } from '@/ui/form/context.ts'

const emit = defineEmits<InputTagEmits>()
const props = withDefaults(defineProps<InputTagProps>(), {
  modelValue: () => [],
  placeholder: t('inputTag.text.placeholder'),
  name: undefined,
  disabled: false,
  size: 'default',
  type: 'primary',
  max: Infinity
})

const finalSize = computed(() => props.size)
const containerRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLElement | null>(null)
const inputValue = ref('')
const highlightedTag = ref<string | null>(null)

const formItemContext = props.name ? inject<FormItemContext | null>(`form-item-${ props.name }`) : null

// 判断标签是否需要高亮显示
// Check if the tag needs to be highlighted
const isHighlighted = (tag: string) => tag === highlightedTag.value

// 处理重复标签的高亮显示
// Handle duplicate tag highlighting
const handleDuplicateTag = (tag: string) => {
  highlightedTag.value = tag
  // 1秒后取消高亮
  // Cancel highlighting after 1 second
  setTimeout(() => {
    if (highlightedTag.value === tag) {
      highlightedTag.value = null
    }
  }, 1000)
}

const canAddTag = computed(() => {
  return !props.disabled &&
      inputValue.value.trim() !== '' &&
      props.modelValue.length < props.max
})

const onAddTag = () => {
  if (canAddTag.value) {
    const newTag = inputValue.value.trim()

    // 检查是否重复
    // Check for duplicates
    if (props.modelValue.includes(newTag)) {
      handleDuplicateTag(newTag)
      return
    }

    const newTags = [...props.modelValue, newTag]
    emit('update:modelValue', newTags)
    emit('on-add', newTag)
    emit('on-change', newTags)
    inputValue.value = ''

    if (formItemContext) {
      formItemContext.onBlur()
    }

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
  emit('on-change', newTags)

  // 如果删除的是当前高亮的标签，取消高亮
  // If the deleted tag is currently highlighted, cancel highlighting
  if (tag === highlightedTag.value) {
    highlightedTag.value = null
  }

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const handleBlur = () => {
  if (formItemContext) {
    formItemContext.onBlur()
  }
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
