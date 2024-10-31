<template>
  <div class="inline-block">
    <template v-for="(part, _index) in highlightedParts" :key="_index">
      <span :class="[
                    part.isMatch ? 'bg-yellow-200 dark:bg-yellow-800 rounded px-1 mx-0.5' : undefined
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
}

interface HighlightPart
{
  text: string
  isMatch: boolean
}

const props = withDefaults(defineProps<Props>(), {})

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

      const text = part.text
      const searchText = highlight
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
