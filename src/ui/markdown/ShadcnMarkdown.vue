<template>
  <div :class="[
    'rounded-sm overflow-hidden',
    props.glass && 'backdrop-blur-xl backdrop-saturate-150',
    props.glass && (props.dark ? 'bg-white/10 border border-white/20' : 'bg-white/60 border border-gray-400/40'),
    props.glass && 'shadow-lg shadow-black/5',
    !props.glass && (props.dark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200')
  ]">
    <div v-if="props.mode === 'split'" class="grid grid-cols-2 divide-x" :class="props.dark ? 'divide-gray-700' : 'divide-gray-200'">
      <div class="flex flex-col">
        <div :class="['px-3 py-2 text-sm font-medium border-b', props.dark ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-700']">
          编辑
        </div>
        <textarea v-model="internalValue"
                  :placeholder="props.placeholder"
                  :style="{ height: props.height }"
                  :class="[
                    'w-full p-4 resize-none outline-none font-mono text-sm',
                    props.glass && (props.dark ? 'bg-transparent text-gray-200 placeholder-gray-500' : 'bg-transparent text-gray-800 placeholder-gray-400'),
                    !props.glass && (props.dark ? 'bg-gray-900 text-gray-200 placeholder-gray-500' : 'bg-gray-50 text-gray-800 placeholder-gray-400')
                  ]"
                  @input="handleInput"/>
      </div>
      <div class="flex flex-col">
        <div :class="['px-3 py-2 text-sm font-medium border-b', props.dark ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-700']">
          预览
        </div>
        <div :style="{ height: props.height }" :class="['overflow-auto p-4']">
          <div :class="getPreviewClass" v-html="renderedContent"/>
        </div>
      </div>
    </div>

    <div v-else-if="props.mode === 'edit'">
      <textarea v-model="internalValue"
                :placeholder="props.placeholder"
                :style="{ height: props.height }"
                :class="[
                  'w-full p-4 resize-none outline-none font-mono text-sm',
                  props.glass && (props.dark ? 'bg-transparent text-gray-200 placeholder-gray-500' : 'bg-transparent text-gray-800 placeholder-gray-400'),
                  !props.glass && (props.dark ? 'bg-gray-900 text-gray-200 placeholder-gray-500' : 'bg-gray-50 text-gray-800 placeholder-gray-400')
                ]"
                @input="handleInput"
      />
    </div>

    <div v-else :style="{ minHeight: props.height }">
      <div :class="['overflow-auto p-4']">
        <div :class="getPreviewClass" v-html="renderedContent"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { marked } from 'marked'
import { MarkdownProps, MarkdownEmits } from '@/ui/markdown/types.ts'

const emit = defineEmits<MarkdownEmits>()

const props = withDefaults(defineProps<MarkdownProps>(), {
  modelValue: '',
  mode: 'split',
  dark: false,
  glass: false,
  height: '400px',
  placeholder: '请输入 Markdown 内容...'
})

const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue
})

const handleInput = () => {
  emit('update:modelValue', internalValue.value)
  emit('on-change', internalValue.value)
}

marked.setOptions({
  breaks: true,
  gfm: true
})

const getPreviewClass = computed(() => {
  const baseClasses = ['prose max-w-none']

  if (props.dark) {
    baseClasses.push('prose-invert')
  }

  if (props.glass) {
    if (props.dark) {
      baseClasses.push(
          'prose-headings:text-gray-100',
          'prose-p:text-gray-200',
          'prose-a:text-blue-400',
          'prose-strong:text-gray-100',
          'prose-code:text-gray-200',
          'prose-li:text-gray-200',
          'prose-blockquote:text-gray-300',
          'prose-code:bg-white/10',
          'prose-pre:bg-white/5'
      )
    }
    else {
      baseClasses.push(
          'prose-headings:text-gray-900',
          'prose-p:text-gray-800',
          'prose-a:text-blue-600',
          'prose-strong:text-gray-900',
          'prose-code:text-gray-800',
          'prose-li:text-gray-800',
          'prose-blockquote:text-gray-700',
          'prose-code:bg-black/10',
          'prose-pre:bg-black/5'
      )
    }
  }

  return baseClasses
})

const renderedContent = computed(() => {
  if (!internalValue.value) {
    return `<p class="text-gray-400">暂无内容</p>`
  }

  try {
    return marked(internalValue.value) as string
  }
  catch (err) {
    return `<p class="text-red-500">Markdown 解析错误</p>`
  }
})
</script>
