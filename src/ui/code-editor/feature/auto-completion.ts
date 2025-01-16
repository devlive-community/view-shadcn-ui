import * as monaco from 'monaco-editor'
import { t } from '@/utils/locale'
import { CodeEditorAutoCompleteProps } from '../types.ts'
import { createApp, h } from 'vue'
import { debounce } from 'lodash'

import ShadcnIcon from '@/ui/icon'

export function registerApiCompletion(editor: monaco.editor.IStandaloneCodeEditor, config: CodeEditorAutoCompleteProps)
{
    if (!config.endpoint) {
        throw new Error(t('codeEditor.validated.endpoint'))
    }

    if (!config.transform) {
        throw new Error(t('codeEditor.validated.transform'))
    }

    config.maxSuggestions = config.maxSuggestions || 1000
    config.timeout = config.timeout || 5000

    // 创建提示框容器
    const completionContainer = document.createElement('div')
    completionContainer.className = 'fixed z-50 max-w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden'
    completionContainer.style.display = 'none'

    // 创建加载状态
    const loadingContainer = document.createElement('div')
    loadingContainer.className = 'p-2 flex items-center gap-2'

    const spinner = document.createElement('div')
    spinner.className = 'w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'

    const loadingText = document.createElement('span')
    loadingText.className = 'text-sm text-gray-600'
    loadingText.textContent = t('codeEditor.text.loading')

    loadingContainer.appendChild(spinner)
    loadingContainer.appendChild(loadingText)

    // 创建建议列表容器
    const suggestionsList = document.createElement('ul')
    suggestionsList.className = 'max-h-60 overflow-y-auto w-full'

    completionContainer.appendChild(loadingContainer)
    completionContainer.appendChild(suggestionsList)

    editor.getContainerDomNode().appendChild(completionContainer)

    // 处理建议项的选中状态
    let selectedIndex = 0

    function updateSelectedItem()
    {
        const items = suggestionsList.querySelectorAll('li')
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('bg-blue-50')
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
            }
            else {
                item.classList.remove('bg-blue-50')
            }
        })
    }

    // 保存所有提示项的清理函数
    let currentTooltipCleanups: (() => void)[] = []

    // 键盘导航处理
    editor.onKeyDown((e) => {
        if (completionContainer.style.display === 'none') {
            return
        }

        if (e.keyCode === monaco.KeyCode.DownArrow) {
            e.preventDefault()
            const items = suggestionsList.querySelectorAll('li')
            selectedIndex = (selectedIndex + 1) % items.length
            updateSelectedItem()
        }
        else if (e.keyCode === monaco.KeyCode.UpArrow) {
            e.preventDefault()
            const items = suggestionsList.querySelectorAll('li')
            selectedIndex = (selectedIndex - 1 + items.length) % items.length
            updateSelectedItem()
        }
        else if (e.keyCode === monaco.KeyCode.Enter) {
            e.preventDefault()
            const items = suggestionsList.querySelectorAll('li')
            if (items[selectedIndex]) {
                const item = items[selectedIndex] as HTMLElement
                const text = item.dataset.insertText || item.textContent || ''
                const position = editor.getPosition()
                if (position) {
                    editor.executeEdits('completion', [
                        {
                            range: new monaco.Range(
                                position.lineNumber,
                                position.column - currentWord.length,
                                position.lineNumber,
                                position.column
                            ),
                            text: text
                        }
                    ])
                }
                completionContainer.style.display = 'none'
            }
        }
        else if (e.keyCode === monaco.KeyCode.Escape) {
            completionContainer.style.display = 'none'
        }
    })

    let isTyping = false

    // 添加输入状态检查函数
    const checkInputState = debounce(() => {
        isTyping = false
    }, config.debounceTime || 500)

    // 添加输入事件监听
    editor.onKeyUp(() => {
        isTyping = true
        checkInputState()
    })

    let currentWord = ''

    // 创建防抖的请求和处理函数
    const debouncedFetch = debounce(async (
        url: string,
        options: RequestInit,
        onSuccess: (data: any) => void,
        onError: (error: any) => void
    ) => {
        try {
            const response = await fetch(url, options)
            const data = await response.json()
            onSuccess(data)
        }
        catch (error) {
            onError(error)
        }
    }, config.debounceTime || 500)

    const disposable = monaco.languages.registerCompletionItemProvider(editor.getModel()!.getLanguageId(), {
        triggerCharacters: config.trigger || ['.'],

        async provideCompletionItems(model, position)
        {
            try {
                // 如果正在输入，直接返回空建议
                if (isTyping) {
                    return { suggestions: [] }
                }

                const editorDom = editor.getDomNode()
                if (!editorDom) {
                    return { suggestions: [] }
                }

                // 显示加载状态
                loadingContainer.style.display = 'flex'
                suggestionsList.style.display = 'none'
                completionContainer.style.display = 'block'

                // 获取编辑器视口和内容的信息
                const editorRect = editorDom.getBoundingClientRect()
                const viewportColumn = position.column
                const viewportLine = position.lineNumber

                // 获取光标在视口中的坐标
                const cursorCoords = editor.getScrolledVisiblePosition({
                    lineNumber: viewportLine,
                    column: viewportColumn
                }) as any

                // 计算容器尺寸
                const containerWidth = completionContainer.offsetWidth || 300
                const containerHeight = completionContainer.offsetHeight || 200

                // 基础位置计算
                let leftPos = editorRect.left + cursorCoords.left
                let topPos = editorRect.top + cursorCoords.top + 20

                // 获取视窗尺寸
                const viewportWidth = window.innerWidth
                const viewportHeight = window.innerHeight

                // 边界检查和调整 - 水平方向
                if (leftPos + containerWidth > viewportWidth - 20) {
                    leftPos = leftPos - containerWidth
                    if (leftPos < 20) {
                        leftPos = 20
                    }
                }
                if (leftPos < 20) {
                    leftPos = 20
                }

                // 边界检查和调整 - 垂直方向
                if (topPos + containerHeight > viewportHeight - 20) {
                    topPos = editorRect.top + cursorCoords.top - containerHeight - 10
                    if (topPos < 20) {
                        topPos = 20
                    }
                }
                if (topPos < 20) {
                    topPos = 20
                }

                // 应用计算后的位置
                completionContainer.style.left = `${ leftPos }px`
                completionContainer.style.top = `${ topPos }px`

                const word = model.getWordUntilPosition(position)
                currentWord = word.word

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

                const controller = new AbortController()
                const timeoutId = setTimeout(() => controller.abort(), config.timeout)

                const options: RequestInit = {
                    method: config.method || 'POST',
                    headers: { 'Content-Type': 'application/json', ...config.headers },
                    signal: controller.signal
                }

                if (config.requestBody) {
                    options.body = JSON.stringify(config.requestBody(context))
                }

                await new Promise((resolve, reject) => {
                    debouncedFetch(
                        url,
                        options,
                        (data) => {
                            clearTimeout(timeoutId)
                            const suggestions = config.transform ? config.transform(data) : data
                            const limitedSuggestions = suggestions?.slice(0, config.maxSuggestions)

                            // 更新建议列表
                            currentTooltipCleanups.forEach(cleanup => cleanup())
                            currentTooltipCleanups = []
                            suggestionsList.innerHTML = ''
                            selectedIndex = 0

                            if (limitedSuggestions && limitedSuggestions.length > 0) {
                                limitedSuggestions.forEach((item: any, index: number) => {
                                    const { element: li, cleanup } = createSuggestionItem(item, index)
                                    currentTooltipCleanups.push(cleanup)

                                    li.addEventListener('mousedown', (event) => {
                                        event.preventDefault()
                                        event.stopPropagation()

                                        const text = item.insertText || item.label
                                        const position = editor.getPosition()
                                        if (position) {
                                            editor.executeEdits('completion', [
                                                {
                                                    range: new monaco.Range(
                                                        position.lineNumber,
                                                        position.column - currentWord.length,
                                                        position.lineNumber,
                                                        position.column
                                                    ),
                                                    text: text
                                                }
                                            ])
                                        }
                                        completionContainer.style.display = 'none'
                                    })

                                    suggestionsList.appendChild(li)
                                })
                            }

                            loadingContainer.style.display = 'none'
                            suggestionsList.style.display = 'block'
                            resolve(data)
                        },
                        (error) => {
                            clearTimeout(timeoutId)
                            if (error.name === 'AbortError') {
                                console.error('Request timeout:', config.timeout + 'ms')
                                loadingContainer.style.display = 'none'
                                suggestionsList.innerHTML = `<li class="suggestion-item px-3 py-2 text-red-500 select-none">Request timeout after ${ config.timeout }ms</li>`
                                suggestionsList.style.display = 'block'
                            }
                            else {
                                loadingContainer.style.display = 'none'
                                suggestionsList.innerHTML = `<li class="suggestion-item px-3 py-2 text-red-500 select-none">${ error.message }</li>`
                                suggestionsList.style.display = 'block'
                                currentTooltipCleanups.forEach(cleanup => cleanup())
                            }
                            reject(error)
                        }
                    )
                })

                return { suggestions: [] }
            }
            catch (error) {
                console.error('API completion error:', error)
                completionContainer.style.display = 'none'
                currentTooltipCleanups.forEach(cleanup => cleanup())
                currentTooltipCleanups = []
                return { suggestions: [] }
            }
        }
    })

    // 点击编辑器其他地方时隐藏提示框
    editor.onDidChangeCursorPosition(() => {
        completionContainer.style.display = 'none'
    })

    // 添加点击外部关闭事件
    const handleClickOutside = (event: MouseEvent) => {
        if (
            completionContainer.style.display !== 'none' &&
            !completionContainer.contains(event.target as Node)
        ) {
            completionContainer.style.display = 'none'
            currentTooltipCleanups.forEach(cleanup => cleanup())
        }
    }

    document.addEventListener('click', handleClickOutside)

    return {
        dispose: () => {
            completionContainer.remove()
            disposable.dispose()
            currentTooltipCleanups.forEach(cleanup => cleanup())
            document.removeEventListener('click', handleClickOutside)
        }
    }
}

// 创建 tooltip
function createTooltip(text: string)
{
    const tooltip = document.createElement('div')
    tooltip.className = 'hidden fixed z-[60] p-2 bg-gray-800 text-white text-sm rounded shadow-lg max-w-xs whitespace-normal'
    tooltip.textContent = text
    return tooltip
}

// 创建图标元素
function createIconElement(iconName: string = 'Command')
{
    const iconContainer = document.createElement('div')
    iconContainer.className = 'flex-shrink-0 -mt-1 w-4 h-4 text-gray-400'

    const app = createApp({
        render()
        {
            return h(ShadcnIcon, {
                icon: iconName,
                size: 14,
                class: 'w-4 h-4 text-gray-400'
            })
        }
    })

    app.mount(iconContainer)

    return {
        element: iconContainer,
        cleanup: () => app.unmount()
    }
}

// 创建建议项
function createSuggestionItem(item: any, index: number)
{
    const li = document.createElement('li')
    li.className = 'group relative px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2'
    if (index === 0) {
        li.classList.add('bg-blue-50')
    }

    // 创建图标
    const { element: iconElement, cleanup: cleanupIcon } = createIconElement(item.icon || 'Command')

    // 创建内容容器
    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'flex-1 min-w-0'

    // 创建文本内容
    const content = document.createElement('span')
    content.className = 'block truncate text-sm text-gray-700'
    content.textContent = item.label

    // 创建 tooltip
    const tooltip = createTooltip(item.label)
    document.body.appendChild(tooltip)
    tooltip.className += ' transition-opacity duration-200 opacity-0'

    // 组装
    contentWrapper.appendChild(content)
    li.appendChild(iconElement)
    li.appendChild(contentWrapper)

    // 存储插入文本
    li.dataset.insertText = item.insertText || item.label

    // 处理鼠标事件来定位 tooltip
    li.addEventListener('mouseenter', () => {
        const liRect = li.getBoundingClientRect()
        tooltip.style.display = 'block'
        tooltip.style.opacity = '1'

        // 计算 tooltip 位置
        // Calculate tooltip position
        const tooltipRect = tooltip.getBoundingClientRect()
        const rightSpace = window.innerWidth - (liRect.right + tooltipRect.width)

        if (rightSpace > 20) {
            // 显示在右侧
            // Show on right
            tooltip.style.left = `${ liRect.right + 8 }px`
            tooltip.style.top = `${ liRect.top + (liRect.height - tooltipRect.height) / 2 }px`
        }
        else {
            // 显示在左侧
            // Show on left
            tooltip.style.left = `${ liRect.left - tooltipRect.width - 8 }px`
            tooltip.style.top = `${ liRect.top + (liRect.height - tooltipRect.height) / 2 }px`
        }
    })

    li.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0'
        tooltip.style.display = 'none'
    })

    // 返回元素和清理函数
    // Return element and cleanup function
    return {
        element: li,
        cleanup: () => {
            tooltip.remove()
            cleanupIcon()
        }
    }
}