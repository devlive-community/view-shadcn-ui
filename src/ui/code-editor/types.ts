import * as monaco from 'monaco-editor'

export interface CodeEditorProps
{
    modelValue: string
    height?: number
    config?: any // see monaco.editor.IStandaloneEditorConstructionOptions
}

export type CodeEditorEmits = {
    (e: 'update:modelValue', value?: string): void
    (e: 'on-change', value?: string): void
    (e: 'on-created', value: monaco.editor.IStandaloneCodeEditor): void
}