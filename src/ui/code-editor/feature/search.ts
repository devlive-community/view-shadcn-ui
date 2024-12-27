import * as monaco from 'monaco-editor'
import { h, render } from 'vue'
import { t } from '@/utils/locale'
import ShadcnIcon from '@/ui/icon'
import { CodeEditorSearchProps } from '@/ui/code-editor/types.ts'

export function registerSearchPanel(editor: monaco.editor.IStandaloneCodeEditor, config: CodeEditorSearchProps)
{
    const searchPanelEl = document.createElement('div')
    searchPanelEl.className = 'fixed z-[9999] bg-white rounded-md shadow-lg border border-gray-200 transition-opacity duration-200 ease-in-out opacity-0 pointer-events-none'
    document.body.appendChild(searchPanelEl)

    // 存储所有需要清理的订阅
    // Store all subscriptions
    const disposables: monaco.IDisposable[] = []
    // 存储搜索高亮的装饰器 IDs
    // Store search highlight decorations
    let decorations: string[] = []

    const renderSearchPanel = () => {
        const container = document.createElement('div')
        container.className = 'flex flex-col min-w-[300px]'

        const searchArea = document.createElement('div')
        searchArea.className = 'flex items-center px-2 py-1.5'
        container.appendChild(searchArea)
        const replaceArea = document.createElement('div')
        replaceArea.className = 'flex items-center px-2 py-1.5 border-t border-gray-200'

        const replaceWrapper = document.createElement('div')
        replaceWrapper.className = 'flex items-center flex-1 mr-2'

        const replaceIcon = document.createElement('span')
        replaceIcon.className = 'mr-2'
        const replaceIconVNode = h(ShadcnIcon, {
            icon: 'Replace',
            size: 14,
            class: 'w-4 h-4 text-gray-400'
        })
        render(replaceIconVNode, replaceIcon)
        replaceWrapper.appendChild(replaceIcon)

        const replaceInput = document.createElement('input')
        replaceInput.type = 'text'
        replaceInput.className = 'flex-1 outline-none text-sm'
        replaceInput.placeholder = typeof t('codeEditor.text.replace') === 'string'
            ? t('codeEditor.text.replace')
            : 'Replace'
        replaceWrapper.appendChild(replaceInput)

        // 替换按钮区域
        // Replace button area
        const replaceActionWrapper = document.createElement('div')
        replaceActionWrapper.className = 'flex items-center space-x-1.5'

        const replaceButton = document.createElement('button')
        replaceButton.className = 'px-2 py-1 text-xs hover:bg-gray-100 rounded'
        replaceButton.textContent = typeof t('codeEditor.text.replace') === 'string'
            ? t('codeEditor.text.replace')
            : 'Replace'
        replaceActionWrapper.appendChild(replaceButton)

        const replaceAllButton = document.createElement('button')
        replaceAllButton.className = 'px-2 py-1 text-xs hover:bg-gray-100 rounded'
        replaceAllButton.textContent = typeof t('codeEditor.text.replaceAll') === 'string'
            ? t('codeEditor.text.replaceAll')
            : 'Replace All'
        replaceActionWrapper.appendChild(replaceAllButton)

        replaceArea.appendChild(replaceWrapper)
        replaceArea.appendChild(replaceActionWrapper)
        container.appendChild(replaceArea)

        // 搜索输入区域
        // Search input area
        const searchWrapper = document.createElement('div')
        searchWrapper.className = 'flex items-center flex-1 mr-2'

        const searchIcon = document.createElement('span')
        searchIcon.className = 'mr-2'
        const searchIconVNode = h(ShadcnIcon, {
            icon: 'Search',
            size: 14,
            class: 'w-4 h-4 text-gray-400'
        })
        render(searchIconVNode, searchIcon)
        searchWrapper.appendChild(searchIcon)

        const searchInput = document.createElement('input')
        searchInput.type = 'text'
        searchInput.className = 'flex-1 outline-none text-sm'
        searchInput.placeholder = typeof t('codeEditor.text.findInContext') === 'string'
            ? t('codeEditor.text.findInContext')
            : 'Find in file'
        searchWrapper.appendChild(searchInput)

        // 操作按钮区域
        // Operation button area
        const actionWrapper = document.createElement('div')
        actionWrapper.className = 'flex items-center space-x-1.5'

        const matchCount = document.createElement('span')
        matchCount.className = 'text-xs text-gray-500 mr-2 min-w-[50px]'
        matchCount.textContent = '0/0'
        actionWrapper.appendChild(matchCount)

        const prevButton = document.createElement('button')
        prevButton.className = 'p-1 hover:bg-gray-100 rounded'
        const prevIconVNode = h(ShadcnIcon, {
            icon: 'ArrowUp',
            size: 14,
            class: 'w-4 h-4 text-gray-600'
        })
        render(prevIconVNode, prevButton)
        actionWrapper.appendChild(prevButton)

        const nextButton = document.createElement('button')
        nextButton.className = 'p-1 hover:bg-gray-100 rounded'
        const nextIconVNode = h(ShadcnIcon, {
            icon: 'ArrowDown',
            size: 14,
            class: 'w-4 h-4 text-gray-600'
        })
        render(nextIconVNode, nextButton)
        actionWrapper.appendChild(nextButton)

        const matchWholeWordButton = document.createElement('button')
        matchWholeWordButton.className = 'p-1 hover:bg-gray-100 rounded'
        const wordIconVNode = h(ShadcnIcon, {
            icon: 'Text',
            size: 14,
            class: 'w-4 h-4 text-gray-600'
        })
        render(wordIconVNode, matchWholeWordButton)
        actionWrapper.appendChild(matchWholeWordButton)

        const caseButton = document.createElement('button')
        caseButton.className = 'p-1 hover:bg-gray-100 rounded'
        const caseIconVNode = h(ShadcnIcon, {
            icon: 'CaseLower',
            size: 14,
            class: 'w-4 h-4 text-gray-600'
        })
        render(caseIconVNode, caseButton)
        actionWrapper.appendChild(caseButton)

        const closeButton = document.createElement('button')
        closeButton.className = 'p-1 hover:bg-gray-100 rounded ml-1'
        const closeIconVNode = h(ShadcnIcon, {
            icon: 'X',
            size: 14,
            class: 'w-4 h-4 text-gray-600'
        })
        render(closeIconVNode, closeButton)
        actionWrapper.appendChild(closeButton)

        searchArea.appendChild(searchWrapper)
        searchArea.appendChild(actionWrapper)
        searchPanelEl.appendChild(container)

        // 搜索状态管理
        // Search state management
        let caseSensitive = config.caseSensitive || false
        let matchWholeWord = config.matchWholeWord || false
        let searchState = [] as any
        let currentMatchIndex = -1

        const search = () => {
            const searchText = searchInput.value.trim()
            const model = editor.getModel()
            if (!model) {
                return
            }

            // 清除现有的装饰器
            // Clear existing decorations
            if (decorations.length > 0) {
                decorations = model.deltaDecorations(decorations, [])
            }

            if (!searchText) {
                searchState = []
                currentMatchIndex = -1
                matchCount.textContent = '0/0'
                return
            }

            // 执行搜索
            // Perform search
            searchState = model.findMatches(
                searchText,
                true,
                matchWholeWord,
                caseSensitive,
                null,
                true
            )

            // 更新计数器
            // Update counter
            currentMatchIndex = searchState.length > 0 ? 0 : -1
            matchCount.textContent = searchState.length > 0
                ? `${ currentMatchIndex + 1 }/${ searchState.length }`
                : '0/0'

            // 高亮所有匹配项
            // Highlight all matches
            if (searchState.length > 0) {
                const decorationOptions = searchState.map((match, index) => ({
                    range: match.range,
                    options: {
                        className: index === currentMatchIndex ? 'bg-blue-200' : 'bg-yellow-100',
                        isWholeLine: false,
                        stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
                    }
                }))
                decorations = model.deltaDecorations([], decorationOptions)

                // 跳转到第一个匹配项
                // Jump to the first match
                const match = searchState[currentMatchIndex]
                editor.revealRangeInCenterIfOutsideViewport(match.range)
                editor.setPosition({
                    lineNumber: match.range.startLineNumber,
                    column: match.range.startColumn
                })
            }
        }

        const replace = () => {
            if (currentMatchIndex === -1 || !searchState.length) {
                return
            }

            const model = editor.getModel()
            if (!model) {
                return
            }

            const match = searchState[currentMatchIndex]
            const replaceText = replaceInput.value

            // 创建编辑操作
            // Create edit
            const edit = {
                range: match.range,
                text: replaceText
            }

            // 执行替换
            // Perform replace
            model.pushEditOperations([], [edit], () => null)

            // 重新搜索以更新匹配项
            // Re-search to update matches
            search()
        }

        const replaceAll = () => {
            if (!searchState.length) {
                return
            }

            const model = editor.getModel()
            if (!model) {
                return
            }

            const replaceText = replaceInput.value

            // 创建所有编辑操作
            // Create all edits
            const edits = searchState.map(match => ({
                range: match.range,
                text: replaceText
            }))

            // 执行所有替换
            // Perform all replaces
            model.pushEditOperations([], edits, () => null)

            // 重新搜索以更新匹配项
            // Re-search to update matches
            search()
        }

        const navigateToMatch = (direction: 'next' | 'prev') => {
            if (searchState.length === 0) {
                return
            }

            const model = editor.getModel()
            if (!model) {
                return
            }

            // 更新当前索引
            // Update current index
            if (direction === 'next') {
                currentMatchIndex = (currentMatchIndex + 1) % searchState.length
            }
            else {
                currentMatchIndex = (currentMatchIndex - 1 + searchState.length) % searchState.length
            }

            // 更新计数器
            // Update counter
            matchCount.textContent = `${ currentMatchIndex + 1 }/${ searchState.length }`

            // 更新高亮
            // Update highlight
            const decorationOptions = searchState.map((match, index) => ({
                range: match.range,
                options: {
                    className: index === currentMatchIndex ? 'bg-blue-200' : 'bg-yellow-100',
                    isWholeLine: false,
                    stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
                }
            }))
            decorations = model.deltaDecorations(decorations, decorationOptions)

            // 跳转到匹配项
            // Jump to match
            const match = searchState[currentMatchIndex]
            editor.revealRangeInCenterIfOutsideViewport(match.range)
            editor.setPosition({
                lineNumber: match.range.startLineNumber,
                column: match.range.startColumn
            })
        }

        const closeSearch = () => {
            searchPanelEl.className = searchPanelEl.className
                                                   .replace('opacity-100 pointer-events-auto', 'opacity-0 pointer-events-none')
            const model = editor.getModel()
            if (model && decorations.length > 0) {
                decorations = model.deltaDecorations(decorations, [])
            }
            editor.focus()
        }

        // 事件绑定
        // Event binding
        searchInput.addEventListener('input', () => {
            requestAnimationFrame(search)
        })
        prevButton.onclick = () => navigateToMatch('prev')
        nextButton.onclick = () => navigateToMatch('next')
        closeButton.onclick = closeSearch

        matchWholeWordButton.onclick = () => {
            matchWholeWord = !matchWholeWord
            matchWholeWordButton.className = `p-1 hover:bg-gray-100 rounded ${matchWholeWord ? 'bg-blue-100' : ''}`
            search()
        }

        caseButton.onclick = () => {
            caseSensitive = !caseSensitive
            const newIconVNode = h(ShadcnIcon, {
                icon: caseSensitive ? 'CaseUpper' : 'CaseLower',
                size: 14,
                class: 'w-4 h-4 text-gray-600'
            })
            render(newIconVNode, caseButton)
            search()
        }

        replaceButton.onclick = replace
        replaceAllButton.onclick = replaceAll

        // 快捷键支持
        // Keyboard support
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                navigateToMatch('next')
                e.preventDefault()
            }
            else if (e.key === 'Enter' && e.shiftKey) {
                navigateToMatch('prev')
                e.preventDefault()
            }
            else if (e.key === 'Escape') {
                closeSearch()
                e.preventDefault()
            }
                // 添加替换快捷键
            // Add replace shortcut
            else if (e.key === 'Enter' && e.ctrlKey) {
                replace()
                e.preventDefault()
            }
        })

        replaceInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.ctrlKey) {
                replace()
                e.preventDefault()
            }
            else if (e.key === 'Enter' && e.ctrlKey) {
                replaceAll()
                e.preventDefault()
            }
            else if (e.key === 'Escape') {
                closeSearch()
                e.preventDefault()
            }
        })

        return { searchInput, replaceInput, search }
    }

    const { searchInput, replaceInput, search } = renderSearchPanel()

    // 注册快捷键和命令
    // Register shortcut keys and commands
    disposables.push(
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF, () => {
            // 计算位置：放置在编辑器右上角
            // Calculate position: place it in the upper right corner of the editor
            const editorPos = editor.getContainerDomNode().getBoundingClientRect()
            const parentPos = editor.getContainerDomNode().offsetParent?.getBoundingClientRect()
                || { left: 0, top: 0 }

            // 计算右侧位置，预留一定边距
            // Calculate the right position, leaving a certain margin
            const rightPosition = editorPos.right - parentPos.left - searchPanelEl.offsetWidth
            searchPanelEl.style.left = `${ rightPosition }px`
            searchPanelEl.style.top = `${ editorPos.top - parentPos.top }px`

            // 显示面板
            // Show panel
            searchPanelEl.className = searchPanelEl.className
                                                   .replace('opacity-0 pointer-events-none', 'opacity-100 pointer-events-auto')

            // 聚焦输入框并选中文本
            // Focus the input box and select text
            searchInput.focus()
            searchInput.select()

            // 如果有选中文本，则用作搜索词
            // If there is selected text, use it as the search word
            const selection = editor.getSelection()
            if (selection && !selection.isEmpty()) {
                const text = editor.getModel()?.getValueInRange(selection) || ''
                searchInput.value = text
                search()
            }
        }) as any,

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyF, () => {
            // 触发搜索面板显示
            // Trigger search panel display
            editor.trigger('editor', 'actions.find', null)
            // 聚焦替换输入框
            // Focus the replacement input box
            setTimeout(() => {
                replaceInput.focus()
            }, 0)
        }) as any
    )

    // 注册点击外部关闭事件
    // Register click outside close event
    const clickHandler = (e: MouseEvent) => {
        if (!searchPanelEl.contains(e.target as Node)) {
            searchPanelEl.className = searchPanelEl.className
                                                   .replace('opacity-100 pointer-events-auto', 'opacity-0 pointer-events-none')
            const model = editor.getModel()
            if (model && decorations.length > 0) {
                decorations = model.deltaDecorations(decorations, [])
            }
        }
    }
    document.addEventListener('click', clickHandler)

    return {
        dispose: () => {
            // 清理所有订阅
            // Clear all subscriptions
            disposables.forEach(d => d.dispose())
            // 移除事件监听
            // Remove event listeners
            document.removeEventListener('click', clickHandler)
            // 移除装饰器
            // Remove decorations
            const model = editor.getModel()
            if (model && decorations.length > 0) {
                model.deltaDecorations(decorations, [])
            }
            // 移除DOM元素
            // Remove DOM elements
            if (searchPanelEl.parentNode) {
                searchPanelEl.parentNode.removeChild(searchPanelEl)
            }
        }
    }
}