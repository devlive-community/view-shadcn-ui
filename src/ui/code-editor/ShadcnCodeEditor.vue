<template>
  <div ref="editorContainer"
       class="border w-full"
       :style="{ height: calcSize(height)}"/>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { CodeEditorEmits, CodeEditorProps } from './types'
import { calcSize } from '@/utils/common.ts'
import { registerApiCompletion } from '@/ui/code-editor/feature/auto-completion.ts'
import { disableLanguageValidation } from '@/ui/code-editor/feature/disable_language_validation.ts'

const props = withDefaults(defineProps<CodeEditorProps>(), {
  height: 300,
  config: {
    language: 'javascript',
    fontSize: 18,
    tabSize: 2
  } as any,
  disableValidation: true
})

const emit = defineEmits<CodeEditorEmits>()

const editorContainer = ref<HTMLElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

const initEditor = () => {
  if (!editorContainer.value) {
    return
  }

  if (props.disableValidation) {
    ['typescript', 'javascript', 'css', 'json'].forEach(language => disableLanguageValidation(language))
  }

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    value: props.modelValue || '',
    ...props.config
  }

  editor = monaco.editor.create(editorContainer.value, options)

  editor.onDidChangeModelContent(() => {
    emit('update:modelValue', editor?.getValue())
    emit('on-change', editor?.getValue())
  })

  emit('on-created', editor)
}

const updateEditorOptions = () => {
  if (!editor) {
    return
  }

  editor.updateOptions(props.config)
}

const updateEditorContent = () => {
  if (!editor) {
    return
  }

  const currentValue = editor.getValue()
  if (currentValue !== props.modelValue) {
    editor.setValue(props.modelValue || '')
  }
}

watch(() => props.config, updateEditorOptions)
watch(() => props.modelValue, updateEditorContent)

const setupApiCompletion = () => {
  if (!editor || !props.autoCompleteConfig) {
    return
  }

  const disposable = registerApiCompletion(editor, props.autoCompleteConfig)

  onBeforeUnmount(() => {
    disposable.dispose()
  })
}

onMounted(() => {
  initEditor()
  setupApiCompletion()
})

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose()
  }
})
</script>