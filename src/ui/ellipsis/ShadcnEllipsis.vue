<template>
  <div ref="ellipsisContent"
       :class="cn('max-w-full',
                  isMultiLine ? 'overflow-hidden' : 'whitespace-nowrap overflow-ellipsis',
                  length ? 'whitespace-normal' : 'overflow-hidden',
                  dark ? 'text-gray-200' : 'text-gray-900')"
       :style="isMultiLine ? { '-webkit-line-clamp': line, '-webkit-box-orient': 'vertical', display: '-webkit-box' } : {}">
    <ShadcnTooltip v-if="tooltip" :content="text" :dark="dark">
      <template v-if="text">{{ displayedText }}</template>
      <slot v-else/>
    </ShadcnTooltip>
    <template v-else>
      <span v-if="text">{{ displayedText }}</span>
      <slot v-else/>
    </template>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { ShadcnTooltip } from '@/ui/tooltip'
import { toNumber } from 'lodash'
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  line?: number | string
  tooltip?: boolean
  length?: number | string
  dark?: boolean
}>(), {
  line: 1,
  dark: false
})

const isMultiLine = computed(() => toNumber(props.line) > 1)
const displayedText = ref(props.text)

const getDisplayedText = (text: string | undefined, length: number | string | undefined) => {
  if (!text) {
    return ''
  }
  const lengthAsNumber = toNumber(length)
  if (lengthAsNumber && text.length > lengthAsNumber) {
    return text.slice(0, lengthAsNumber) + '...'
  }
  return text
}

const ellipsisContent = ref<HTMLElement | null>(null)

const applyEllipsis = () => {
  const content = ellipsisContent.value
  if (content && !supportsLineClamp()) {
    const lineHeight = parseInt(getComputedStyle(content).lineHeight, 10)
    const maxHeight = lineHeight * toNumber(props.line)

    if (content.scrollHeight > maxHeight) {
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
  displayedText.value = getDisplayedText(props.text, props.length)

  if (!supportsLineClamp()) {
    applyEllipsis()
  }
})
</script>
