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
import { registerApiCompletion } from './feature/auto-completion.ts'
import { disableLanguageValidation } from './feature/disable_language_validation.ts'
import { registerContextMenu } from './feature/context-menu.ts'

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
let menuDisposable: { dispose: () => void } | null = null

const initEditor = () => {
  if (!editorContainer.value) {
    return
  }

  if (props.disableValidation) {
    ['typescript', 'javascript', 'css', 'json'].forEach(language => disableLanguageValidation(language))
  }

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    ...props.config,
    value: props.modelValue || '',
    contextmenu: false,
    suggest: {
      showMethods: false,
      showFunctions: false,
      showConstructors: false,
      showFields: false,
      showVariables: false,
      showClasses: false,
      showStructs: false,
      showInterfaces: false,
      showModules: false,
      showProperties: false,
      showEvents: false,
      showOperators: false,
      showUnits: false,
      showValues: false,
      showConstants: false,
      showEnums: false,
      showEnumMembers: false,
      showKeywords: false,
      showWords: false,
      showColors: false,
      showFiles: false,
      showReferences: false,
      showFolders: false,
      showTypeParameters: false,
      showSnippets: false
    }
  }

  editor = monaco.editor.create(editorContainer.value, options)

  if (props.contextMenuConfig) {
    menuDisposable = registerContextMenu(editor, props.contextMenuConfig)
  }

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
  menuDisposable?.dispose()
})
</script>