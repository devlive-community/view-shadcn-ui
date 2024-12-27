import * as monaco from 'monaco-editor'
import { t } from '@/utils/locale'
import { CodeEditorAutoCompleteProps } from '../types.ts'

export function registerApiCompletion(editor: monaco.editor.IStandaloneCodeEditor, config: CodeEditorAutoCompleteProps)
{
    const loadingToast = document.createElement('div')
    loadingToast.className = 'fixed flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg'

    const spinner = document.createElement('div')
    spinner.className = 'w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'

    const text = document.createElement('span')
    text.className = 'text-sm font-medium'
    text.textContent = t('codeEditor.text.loading')

    loadingToast.appendChild(spinner)
    loadingToast.appendChild(text)

    editor.getContainerDomNode().appendChild(loadingToast)
    loadingToast.style.display = 'none'
    loadingToast.style.zIndex = '100'

    const disposable = monaco.languages.registerCompletionItemProvider(editor.getModel()!.getLanguageId(), {
        triggerCharacters: config.trigger || ['.'],

        async provideCompletionItems(model, position)
        {
            const word = model.getWordUntilPosition(position)
            const range = {
                startLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endLineNumber: position.lineNumber,
                endColumn: word.endColumn
            }

            try {
                const coords = editor.getScrolledVisiblePosition(position)
                const editorDom = editor.getDomNode()
                if (coords && editorDom) {
                    loadingToast.style.display = 'flex'
                    loadingToast.style.top = `${ editorDom.offsetTop + coords.top - 5 }px`
                    loadingToast.style.left = `${ editorDom.offsetLeft + coords.left + 5 }px`
                }

                const context = {
                    modelValue: model.getValue(),
                    position: position,
                    word: word.word
                }

                let url = config.endpoint
                if (config.requestParams) {
                    const params = new URLSearchParams(config.requestParams(context))
                    url = `${ url }${ url.includes('?') ? '&' : '?' }${ params.toString() }`
                }

                const options: RequestInit = {
                    method: config.method || 'POST',
                    headers: { 'Content-Type': 'application/json', ...config.headers }
                }

                if (config.requestBody) {
                    options.body = JSON.stringify(config.requestBody(context))
                }

                const response = await fetch(url, options)
                const data = await response.json()

                return {
                    suggestions: config.transform
                        ? config.transform(data)
                        : data.map((item: any) => ({
                            label: item.label,
                            kind: monaco.languages.CompletionItemKind.Text,
                            insertText: item.insertText || item.label,
                            range
                        }))
                }
            }
            catch (error) {
                console.error('API completion error:', error)
                return { suggestions: [] }
            }
            finally {
                loadingToast.style.display = 'none'
            }
        }
    })

    return {
        dispose: () => {
            loadingToast.remove()
            disposable.dispose()
        }
    }
}