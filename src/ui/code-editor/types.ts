import * as monaco from 'monaco-editor'

export interface CodeEditorAutoCompleteProps
{
    endpoint: string
    trigger?: string[]
    transform?: (data: any) => monaco.languages.CompletionItem[]
}

export interface CodeEditorProps
{
    modelValue: string
    height?: number
    config?: any // see monaco.editor.IStandaloneEditorConstructionOptions
    disableValidation?: boolean
    autoCompleteConfig?: CodeEditorAutoCompleteProps
}

export type CodeEditorEmits = {
    (e: 'update:modelValue', value?: string): void
    (e: 'on-change', value?: string): void
    (e: 'on-created', value: monaco.editor.IStandaloneCodeEditor): void
}