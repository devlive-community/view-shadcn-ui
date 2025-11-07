import * as monaco from 'monaco-editor'
import { Selection } from 'monaco-editor'
import { t } from '@/utils/locale'
import { CodeEditorContextMenuItem, CodeEditorContextMenuProps } from '../types.ts'
import Icon from '@/ui/icon'
import { h, render } from 'vue'

export function registerContextMenu(
    editor: monaco.editor.IStandaloneCodeEditor,
    contextMenuProps?: CodeEditorContextMenuProps
)
{
    const contextMenuEl = document.createElement('div')
    contextMenuEl.className = 'fixed z-50 min-w-[100px] bg-white rounded-lg shadow-lg border border-gray-200 transition-opacity duration-200 ease-in-out opacity-0 pointer-events-none'
    document.body.appendChild(contextMenuEl)

    const disposable = editor.onContextMenu((e) => {
        e.event.preventDefault()
        e.event.stopPropagation()

        const selection = editor.getSelection()
        contextMenuEl.style.left = `${ e.event.browserEvent.clientX }px`
        contextMenuEl.style.top = `${ e.event.browserEvent.clientY }px`

        contextMenuEl.className = contextMenuEl.className.replace('opacity-0 pointer-events-none', 'opacity-100 pointer-events-auto')

        const menuItems = [] as any
        if (contextMenuProps?.showDefaultItems !== false) {
            menuItems.push(...getDefaultMenuItems(editor, selection))
        }
        if (contextMenuProps?.items) {
            menuItems.push(...contextMenuProps.items)
        }
        renderMenuItems(contextMenuEl, menuItems, editor, selection as monaco.Selection)
    })

    document.addEventListener('click', (e) => {
        if (!contextMenuEl.contains(e.target as Node)) {
            contextMenuEl.className = contextMenuEl.className
                                                   .replace('opacity-100 pointer-events-auto', 'opacity-0 pointer-events-none')
        }
    })

    return {
        dispose: () => {
            disposable.dispose()
            document.body.removeChild(contextMenuEl)
        }
    }
}

function getDefaultMenuItems(editor: monaco.editor.IStandaloneCodeEditor, selection: Selection | null)
{
    return [
        {
            label: t('codeEditor.text.copy'),
            icon: 'Copy',
            action: () => {
                if (selection && !selection.isEmpty()) {
                    const text = editor.getModel()?.getValueInRange(selection) || ''
                    navigator.clipboard.writeText(text)
                }
            }
        },
        {
            label: t('codeEditor.text.paste'),
            icon: 'Clipboard',
            action: async () => {
                const text = await navigator.clipboard.readText()
                editor.executeEdits('paste', [{
                    range: selection || new monaco.Range(0, 0, 0, 0),
                    text: text,
                    forceMoveMarkers: true
                }])
            }
        },
        {
            label: t('codeEditor.text.cut'),
            icon: 'Scissors',
            action: () => {
                if (selection && !selection.isEmpty()) {
                    const text = editor.getModel()?.getValueInRange(selection) || ''
                    navigator.clipboard.writeText(text)
                    editor.executeEdits('cut', [{
                        range: selection,
                        text: '',
                        forceMoveMarkers: true
                    }])
                }
            }
        }
    ]
}

function renderMenuItems(
    container: HTMLElement,
    items: Array<CodeEditorContextMenuItem>,
    editor: monaco.editor.IStandaloneCodeEditor,
    selection: Selection | null
)
{
    container.innerHTML = ''
    const ul = document.createElement('ul')
    ul.className = 'py-2'

    items.forEach(item => {
        const li = document.createElement('li')
        li.className = 'px-4 py-2 space-x-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm flex items-center justify-start'

        if (item.icon) {
            const iconContainer = document.createElement('span')
            iconContainer.className = 'inline-flex items-center justify-center w-5'
            const iconVNode = h(Icon, {
                icon: item.icon,
                class: 'w-4 h-4 flex-shrink-0'
            })
            render(iconVNode, iconContainer)
            li.appendChild(iconContainer)
        }
        else {
            const placeholder = document.createElement('span')
            placeholder.className = 'w-5'
            li.appendChild(placeholder)
        }

        const textSpan = document.createElement('span')
        textSpan.className = 'flex-1'
        textSpan.textContent = item.label
        li.appendChild(textSpan)

        li.onclick = (e) => {
            e.stopPropagation()
            item.action({ editor, selection })
            container.className = container.className.replace('opacity-100 pointer-events-auto', 'opacity-0 pointer-events-none')
        }

        ul.appendChild(li)
    })

    ul.className = 'py-2 w-full'
    container.appendChild(ul)
}