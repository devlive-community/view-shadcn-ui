<template>
  <div class="inline-block">
    <template v-for="(part, _index) in highlightedParts" :key="_index">
      <span :class="[
                    part.isMatch && glass && 'backdrop-blur-xl backdrop-saturate-150',
                    part.isMatch && glass && 'shadow-lg shadow-black/5',
                    part.isMatch && glass && (dark ? 'bg-yellow-500/40 border border-yellow-400/60 text-gray-100' : 'bg-yellow-400/50 border border-yellow-500/70 text-gray-800'),
                    part.isMatch && !glass && (dark ? 'bg-yellow-700 text-gray-100' : 'bg-yellow-200'),
                    part.isMatch && 'rounded px-1 mx-0.5'
            ]">
        {{ part.text }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props
{
  text: string
  highlight: string | string[]
  caseSensitive?: boolean
  dark?: boolean
  glass?: boolean
}

interface HighlightPart
{
  text: string
  isMatch: boolean
}

const props = withDefaults(defineProps<Props>(), {
  caseSensitive: false,
  dark: false,
  glass: false
})

const highlights = computed(() => {
  return Array.isArray(props.highlight) ? props.highlight : [props.highlight]
})

const highlightedParts = computed(() => {
  let result: HighlightPart[] = [{ text: props.text, isMatch: false }]

  highlights.value.forEach(highlight => {
    if (!highlight) {
      return
    }

    const parts: HighlightPart[] = []
    result.forEach(part => {
      if (part.isMatch) {
        parts.push(part)
        return
      }

      const text = !props.caseSensitive ? part.text : part.text.toLowerCase()
      const searchText = !props.caseSensitive ? highlight : highlight.toLowerCase()
      let lastIndex = 0
      let index = text.indexOf(searchText)

      while (index !== -1) {
        // Add non-matching part before
        if (index > lastIndex) {
          parts.push({
            text: part.text.slice(lastIndex, index),
            isMatch: false
          })
        }

        // Add matching part
        parts.push({
          text: part.text.slice(index, index + searchText.length),
          isMatch: true
        })

        lastIndex = index + searchText.length
        index = text.indexOf(searchText, lastIndex)
      }

      // Add remaining non-matching part
      if (lastIndex < part.text.length) {
        parts.push({
          text: part.text.slice(lastIndex),
          isMatch: false
        })
      }
    })

    result = parts
  })

  return result
})
</script>
