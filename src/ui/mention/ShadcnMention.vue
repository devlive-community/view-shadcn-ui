<template>
  <div class="relative w-full">
    <div class="w-full p-2 border rounded-md">
      <div ref="editorRef"
           contenteditable="true"
           :placeholder="placeholder"
           class="outline-none empty:before:content-[attr(placeholder)] empty:before:text-gray-400"
           @input="handleInput"/>
    </div>

    <div v-if="showSuggestions"
         class="absolute z-50 w-full max-h-[200px] mt-1 overflow-auto bg-white border rounded-md shadow-lg">
      <div v-for="(item, index) in filteredSuggestions"
           :key="item.id"
           class="p-2 hover:bg-gray-100 cursor-pointer"
           :class="{ 'bg-gray-100': selectedIndex === index }"
           @click="selectSuggestion(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { MentionEmits, MentionProps } from './types'

const props = withDefaults(defineProps<MentionProps>(), {
  placeholder: 'Type @ to mention someone'
})

const emit = defineEmits<MentionEmits>()

const editorRef = ref<HTMLElement>()
const showSuggestions = ref(false)
const searchQuery = ref('')
const selectedIndex = ref(0)
const currentMentionRange = ref<Range | null>(null)

const filteredSuggestions = computed(() => {
  if (!searchQuery.value) {
    return props.suggestions
  }
  return props.suggestions.filter(item =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const handleInput = () => {
  if (!editorRef.value) {
    return
  }

  const text = editorRef.value.textContent || ''
  emit('on-change', text)

  const selection = window.getSelection()
  if (!selection || !selection.rangeCount) {
    return
  }

  const range = selection.getRangeAt(0)
  const currentNode = range.startContainer

  if (currentNode.nodeType === Node.TEXT_NODE) {
    const textContent = currentNode.textContent || ''
    const cursorPosition = range.startOffset

    const lastAtSymbol = textContent.lastIndexOf('@', cursorPosition)
    if (lastAtSymbol !== -1) {
      const searchText = textContent.slice(lastAtSymbol + 1, cursorPosition)
      searchQuery.value = searchText
      currentMentionRange.value = range
      showSuggestions.value = true
      emit('on-search', searchText)
    }
    else {
      showSuggestions.value = false
    }
  }
}

const selectSuggestion = (item: { id: string | number; name: string }) => {
  if (!currentMentionRange.value || !editorRef.value) {
    return
  }

  const mentionNode = document.createElement('span')
  mentionNode.contentEditable = 'false'
  mentionNode.className = 'inline-block bg-blue-100 rounded px-1 mx-1'
  mentionNode.textContent = `@${ item.name }`

  const textContent = currentMentionRange.value.startContainer.textContent || ''
  const startOffset = textContent.lastIndexOf('@', currentMentionRange.value.startOffset)
  if (startOffset !== -1) {
    currentMentionRange.value.setStart(currentMentionRange.value.startContainer, startOffset)
  }

  currentMentionRange.value.deleteContents()
  currentMentionRange.value.insertNode(mentionNode)

  const selection = window.getSelection()
  if (selection) {
    const range = document.createRange()
    range.setStartAfter(mentionNode)
    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  // Reset state
  showSuggestions.value = false
  searchQuery.value = ''
  emit('on-select', item)
}

onMounted(() => {
  if (editorRef.value) {
    editorRef.value.contentEditable = 'true'
  }
})
</script>