<template>
  <div ref="ellipsisContent"
       :class="cn('overflow-hidden max-w-full',
                  isMultiLine ? 'multi-line' : 'single-line')"
       :style="isMultiLine ? { '-webkit-line-clamp': line } : {}">
    <span v-if="text">{{ displayedText }}</span>
    <slot v-else/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { toNumber } from 'lodash'
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  line?: number | string
}>(), {
  line: 1
})

const isMultiLine = computed(() => toNumber(props.line) > 1)
const displayedText = ref(props.text)

const ellipsisContent = ref<HTMLElement | null>(null)

const applyEllipsis = () => {
  const content = ellipsisContent.value
  if (content && !supportsLineClamp()) {
    // If the browser does not support line-clamp manual truncation
    const lineHeight = parseInt(getComputedStyle(content).lineHeight, 10)
    const maxHeight = lineHeight * toNumber(props.line)
    if (content.scrollHeight > maxHeight) {
      // Manually capture text and add ellipses
      let text = props.text || ''
      while (content.scrollHeight > maxHeight && text.length > 0) {
        text = text.slice(0, -1)
        displayedText.value = text + '...'
      }
    }
  }
}

// Check if the browser supports line-clamp
const supportsLineClamp = () => {
  return 'webkitLineClamp' in document.body.style || 'lineClamp' in document.body.style
}

onMounted(() => {
  if (!supportsLineClamp()) {
    applyEllipsis()
  }
})
</script>

<style>
.single-line {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@supports not (-webkit-line-clamp: 1) {
  /* For browsers that do not support line-clamp, use a single line ellipsis */
  .multi-line {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
