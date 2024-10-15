<template>
  <pre>
    <code ref="codeRef" :class="`language-${language}`">{{ code }}</code>
  </pre>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import hljs from 'highlight.js'

const emit = defineEmits(['on-initialed'])

const props = withDefaults(defineProps<{
  code?: string
  language?: string
}>(), {
  language: 'javascript'
})

const codeRef = ref<HTMLElement | null>(null)

const highlightCode = () => {
  if (codeRef.value) {
    hljs.highlightElement(codeRef.value)
  }
}

onMounted(() => {
  highlightCode()
  emit('on-initialed')
})

watch(() => props.code, () => {
  highlightCode()
})
</script>
