<template>
  <div ref="editorContainer"
       :class="['border w-full overflow-hidden', dark ? 'border-gray-600' : '']"
       :style="{ height: calcSize(height) }"/>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { CodeEditorEmits, CodeEditorProps } from './types'
import { calcSize } from '@/utils/common.ts'
import { registerApiCompletion } from './feature/auto-completion.ts'
import { disableLanguageValidation } from './feature/disable_language_validation.ts'
import { registerContextMenu } from './feature/context-menu.ts'
import { registerSearchPanel } from './feature/search.ts'
import 'monaco-editor/min/vs/editor/editor.main.css'

const props = withDefaults(defineProps<CodeEditorProps>(), {
  height: 300,
  config: {
    language: 'javascript',
    fontSize: 18,
    tabSize: 2
  } as any,
  disableValidation: true,
  searchConfig: {
    caseSensitive: false,
    replace: true,
    matchWholeWord: false,
    useRegex: false,
    showHistory: false
  } as any,
  dark: false
})

const emit = defineEmits<CodeEditorEmits>()

const editorContainer = ref<HTMLElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null
let menuDisposable: { dispose: () => void } | null = null
let currentSearchPanel: { dispose: () => void } | null = null
let currentApiCompletion: { dispose: () => void } | null = null
let focusDisposable: monaco.IDisposable | null = null
let blurDisposable: monaco.IDisposable | null = null

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
    theme: props.dark ? 'vs-dark' : 'vs',
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
    },
    scrollBeyondLastLine: false,
    acceptSuggestionOnCommitCharacter: false,
    acceptSuggestionOnEnter: 'off',
    hover: {
      enabled: false
    }
  }

  editor = monaco.editor.create(editorContainer.value, options)

  // 注册焦点事件
  // Register focus event
  focusDisposable = editor.onDidFocusEditorText(() => {
    if (editor) {
      emit('on-focus', editor)

      // 处理搜索面板
      // Handle search panel
      if (props.searchConfig) {
        if (currentSearchPanel) {
          currentSearchPanel.dispose()
        }
        // @ts-ignore
        currentSearchPanel = registerSearchPanel(editor, props.searchConfig)
      }

      // 处理右键菜单
      // Handle right-click menu
      if (props.contextMenuConfig && !menuDisposable) {
        menuDisposable = registerContextMenu(editor, props.contextMenuConfig)
      }

      // 处理 API 自动完成
      // Handle API auto-completion
      if (props.autoCompleteConfig) {
        if (currentApiCompletion) {
          currentApiCompletion.dispose()
        }
        currentApiCompletion = registerApiCompletion(editor, props.autoCompleteConfig)
      }
    }
  })

  // 注册失焦事件
  // Register blur event
  blurDisposable = editor.onDidBlurEditorText(() => {
    if (editor) {
      emit('on-blur', editor)

      if (currentApiCompletion) {
        currentApiCompletion.dispose()
      }
    }
  })

  editor.addCommand(monaco.KeyCode.KeyF | monaco.KeyMod.CtrlCmd, () => {
  })

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

const updateEditorTheme = () => {
  if (!editor) {
    return
  }

  monaco.editor.setTheme(props.dark ? 'vs-dark' : 'vs')
}

watch(() => props.config, updateEditorOptions)
watch(() => props.modelValue, updateEditorContent)
watch(() => props.dark, updateEditorTheme)

onMounted(() => {
  initEditor()
})

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose()
  }
  menuDisposable?.dispose()
  currentSearchPanel?.dispose()
  currentApiCompletion?.dispose()
  focusDisposable?.dispose()
  blurDisposable?.dispose()
})
</script>