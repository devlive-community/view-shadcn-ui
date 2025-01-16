import * as monaco from 'monaco-editor'

/*
    // 示例1：简单的多端点配置
    const autoCompleteConfig: CodeEditorAutoCompleteProps = {
        endpoint: [
            'api/v1/metadata/mysql/databases',
            'api/v1/metadata/mysql/tables'
        ],
        transform: (data: any[]) => {
            return data.map(item => ({
                label: item.name,
                kind: monaco.languages.CompletionItemKind.Value,
                insertText: item.name,
                detail: item.type,
                documentation: item.description
            }))
        }
    }
 */

/*
    // 示例2：带有独立转换函数的多端点配置
    const autoCompleteConfig: CodeEditorAutoCompleteProps = {
        endpoint: [
            {
                url: 'api/v1/metadata/mysql/databases',
                transform: (data: any) => data.map(db => ({
                    label: db.name,
                    kind: monaco.languages.CompletionItemKind.Folder,
                    insertText: db.name
                }))
            },
            {
                url: 'api/v1/metadata/mysql/tables',
                headers: { 'X-Custom-Header': 'value' },
                transform: (data: any) => data.map(table => ({
                    label: table.name,
                    kind: monaco.languages.CompletionItemKind.Value,
                    insertText: table.name
                }))
            }
        ],
        transform: (allResults: any[]) => {
            return allResults
        }
    }
 */

/*
    // 示例3：混合使用字符串和配置对象
    const autoCompleteConfig: CodeEditorAutoCompleteProps = {
        endpoint: [
            'api/v1/metadata/mysql/databases',
            {
                url: 'api/v1/metadata/mysql/tables',
                method: 'GET',
                headers: { 'X-Custom-Header': 'value' }
            }
        ],
        transform: (allResults: any[]) => {
            return allResults.map(item => ({
                label: item.name,
                kind: monaco.languages.CompletionItemKind.Value,
                insertText: item.name
            }))
        },
        maxSuggestions: 50,
        timeout: 10000
    }
 */
export interface CodeEditorAutoCompleteParams
{
    modelValue: string,
    position: monaco.Position,
    word: string
}

export interface CodeEditorAutoCompleteEndpoint
{
    url: string
    headers?: any
    method?: string
    transform?: (data: any) => monaco.languages.CompletionItem[]
}

export interface CodeEditorAutoCompleteProps
{
    endpoint: string | CodeEditorAutoCompleteEndpoint | (string | CodeEditorAutoCompleteEndpoint)[] // 支持单个或多个端点
    trigger?: string[]
    headers?: any
    method?: string
    transform?: (data: any | any[]) => monaco.languages.CompletionItem[]
    requestBody?: (context: CodeEditorAutoCompleteParams) => any
    requestParams?: (context: CodeEditorAutoCompleteParams) => URLSearchParams
    maxSuggestions?: number
    timeout?: number
    debounceTime?: number // 访问服务的间隔时间（毫秒）
    cacheTime?: number // 缓存时间（毫秒）
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
    useRegex?: boolean
    showHistory?: boolean
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
    (e: 'on-focus', value: monaco.editor.IStandaloneCodeEditor): void
    (e: 'on-blur', value: monaco.editor.IStandaloneCodeEditor): void
}