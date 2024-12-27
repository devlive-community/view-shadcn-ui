import * as monaco from 'monaco-editor'
import { h, render } from 'vue'
import { t } from '@/utils/locale'
import ShadcnIcon from '@/ui/icon'

export function registerSearchPanel(editor: monaco.editor.IStandaloneCodeEditor)
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
        container.className = 'flex items-center px-2 py-1.5 min-w-[300px]'

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
        searchInput.placeholder = typeof t('codeEditor.search.findInFile') === 'string'
            ? t('codeEditor.search.findInFile')
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

        const closeButton = document.createElement('button')
        closeButton.className = 'p-1 hover:bg-gray-100 rounded ml-1'
        const closeIconVNode = h(ShadcnIcon, {
            icon: 'X',
            class: 'w-4 h-4 text-gray-600'
        })
        render(closeIconVNode, closeButton)
        actionWrapper.appendChild(closeButton)

        container.appendChild(searchWrapper)
        container.appendChild(actionWrapper)
        searchPanelEl.appendChild(container)

        // 搜索状态管理
        // Search state management
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
                false,
                true,
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
        })

        return { searchInput, search }
    }

    const { searchInput, search } = renderSearchPanel()

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