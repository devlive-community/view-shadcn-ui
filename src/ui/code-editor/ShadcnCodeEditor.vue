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

const props = withDefaults(defineProps<CodeEditorProps>(), {
  height: 300,
  config: {
    language: 'javascript',
    fontSize: 18,
    tabSize: 2
  } as any
})

const emit = defineEmits<CodeEditorEmits>()

const editorContainer = ref<HTMLElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

const initEditor = () => {
  if (!editorContainer.value) {
    return
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

onMounted(() => {
  initEditor()
})

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose()
  }
})
</script>