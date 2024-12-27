import * as monaco from 'monaco-editor'

export interface CodeEditorAutoCompleteParams
{
    modelValue: string,
    position: monaco.Position,
    word: string
}

export interface CodeEditorAutoCompleteProps
{
    endpoint: string
    trigger?: string[]
    headers?: any
    method?: string
    transform?: (data: any) => monaco.languages.CompletionItem[]
    requestBody?: (context: CodeEditorAutoCompleteParams) => any;
    requestParams?: (context: CodeEditorAutoCompleteParams) => URLSearchParams;
    maxSuggestions?: number
    timeout?: number
}

export interface CodeEditorContextMenuItem
{
    label: string
    icon?: string
    action: (params: {
        editor: monaco.editor.IStandaloneCodeEditor
        selection: monaco.Selection | null
    }) => void
}

export interface CodeEditorContextMenuProps
{
    showDefaultItems?: boolean
    items?: CodeEditorContextMenuItem[]
}

export interface CodeEditorSearchProps
{
    caseSensitive?: boolean
    replace?: boolean
    matchWholeWord?: boolean
}

export interface CodeEditorProps
{
    modelValue: string
    height?: number
    config?: any // see monaco.editor.IStandaloneEditorConstructionOptions
    disableValidation?: boolean
    autoCompleteConfig?: CodeEditorAutoCompleteProps
    contextMenuConfig?: CodeEditorContextMenuProps
    searchConfig?: CodeEditorSearchProps
}

export type CodeEditorEmits = {
    (e: 'update:modelValue', value?: string): void
    (e: 'on-change', value?: string): void
    (e: 'on-created', value: monaco.editor.IStandaloneCodeEditor): void
}