<template>
  <div ref="shadowContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import hljs from 'highlight.js'

const themeMap = {
  'a11y-dark': () => import('highlight.js/styles/a11y-dark.css?inline'),
  'a11y-light': () => import('highlight.js/styles/a11y-light.css?inline'),
  'agate': () => import('highlight.js/styles/agate.css?inline'),
  'an-old-hope': () => import('highlight.js/styles/an-old-hope.css?inline'),
  'androidstudio': () => import('highlight.js/styles/androidstudio.css?inline'),
  'arduino-light': () => import('highlight.js/styles/arduino-light.css?inline'),
  'arta': () => import('highlight.js/styles/arta.css?inline'),
  'ascetic': () => import('highlight.js/styles/ascetic.css?inline'),
  'atom-one-dark': () => import('highlight.js/styles/atom-one-dark.css?inline'),
  'atom-one-light': () => import('highlight.js/styles/atom-one-light.css?inline'),
  'brown-paper': () => import('highlight.js/styles/brown-paper.css?inline'),
  'codepen-embed': () => import('highlight.js/styles/codepen-embed.css?inline'),
  'color-brewer': () => import('highlight.js/styles/color-brewer.css?inline'),
  'dark': () => import('highlight.js/styles/dark.css?inline'),
  'default': () => import('highlight.js/styles/default.css?inline'),
  'docco': () => import('highlight.js/styles/docco.css?inline'),
  'far': () => import('highlight.js/styles/far.css?inline'),
  'foundation': () => import('highlight.js/styles/foundation.css?inline'),
  'github': () => import('highlight.js/styles/github.css?inline'),
  'github-dark': () => import('highlight.js/styles/github-dark.css?inline'),
  'github-dark-dimmed': () => import('highlight.js/styles/github-dark-dimmed.css?inline'),
  'gml': () => import('highlight.js/styles/gml.css?inline'),
  'googlecode': () => import('highlight.js/styles/googlecode.css?inline'),
  'gradient-dark': () => import('highlight.js/styles/gradient-dark.css?inline'),
  'gradient-light': () => import('highlight.js/styles/gradient-light.css?inline'),
  'grayscale': () => import('highlight.js/styles/grayscale.css?inline'),
  'hybrid': () => import('highlight.js/styles/hybrid.css?inline'),
  'idea': () => import('highlight.js/styles/idea.css?inline'),
  'ir-black': () => import('highlight.js/styles/ir-black.css?inline'),
  'isbl-editor-dark': () => import('highlight.js/styles/isbl-editor-dark.css?inline'),
  'isbl-editor-light': () => import('highlight.js/styles/isbl-editor-light.css?inline'),
  'kimbie-dark': () => import('highlight.js/styles/kimbie-dark.css?inline'),
  'kimbie-light': () => import('highlight.js/styles/kimbie-light.css?inline'),
  'lightfair': () => import('highlight.js/styles/lightfair.css?inline'),
  'lioshi': () => import('highlight.js/styles/lioshi.css?inline'),
  'magula': () => import('highlight.js/styles/magula.css?inline'),
  'mono-blue': () => import('highlight.js/styles/mono-blue.css?inline'),
  'monokai': () => import('highlight.js/styles/monokai.css?inline'),
  'night-owl': () => import('highlight.js/styles/night-owl.css?inline'),
  'nnfx-dark': () => import('highlight.js/styles/nnfx-dark.css?inline'),
  'nnfx-light': () => import('highlight.js/styles/nnfx-light.css?inline'),
  'nord': () => import('highlight.js/styles/nord.css?inline'),
  'obsidian': () => import('highlight.js/styles/obsidian.css?inline'),
  'panda-syntax-dark': () => import('highlight.js/styles/panda-syntax-dark.css?inline'),
  'panda-syntax-light': () => import('highlight.js/styles/panda-syntax-light.css?inline'),
  'paraiso-dark': () => import('highlight.js/styles/paraiso-dark.css?inline'),
  'paraiso-light': () => import('highlight.js/styles/paraiso-light.css?inline'),
  'pojoaque': () => import('highlight.js/styles/pojoaque.css?inline'),
  'purebasic': () => import('highlight.js/styles/purebasic.css?inline'),
  'qtcreator-dark': () => import('highlight.js/styles/qtcreator-dark.css?inline'),
  'qtcreator-light': () => import('highlight.js/styles/qtcreator-light.css?inline'),
  'rainbow': () => import('highlight.js/styles/rainbow.css?inline'),
  'routeros': () => import('highlight.js/styles/routeros.css?inline'),
  'school-book': () => import('highlight.js/styles/school-book.css?inline'),
  'shades-of-purple': () => import('highlight.js/styles/shades-of-purple.css?inline'),
  'stackoverflow-dark': () => import('highlight.js/styles/stackoverflow-dark.css?inline'),
  'stackoverflow-light': () => import('highlight.js/styles/stackoverflow-light.css?inline'),
  'sunburst': () => import('highlight.js/styles/sunburst.css?inline'),
  'tokyo-night-dark': () => import('highlight.js/styles/tokyo-night-dark.css?inline'),
  'tokyo-night-light': () => import('highlight.js/styles/tokyo-night-light.css?inline'),
  'vs': () => import('highlight.js/styles/vs.css?inline'),
  'vs2015': () => import('highlight.js/styles/vs2015.css?inline'),
  'xcode': () => import('highlight.js/styles/xcode.css?inline'),
  'xt256': () => import('highlight.js/styles/xt256.css?inline')
}

const emit = defineEmits(['on-initialed'])

const props = withDefaults(defineProps<{
  code?: string
  language?: string
  theme?: string
}>(), {
  language: 'javascript',
  theme: 'github'
})

const shadowContainer = ref<HTMLElement | null>(null)
const shadowRoot = ref<ShadowRoot | null>(null)

// Load the theme and inline it into Shadow DOM
const loadTheme = async (theme: string) => {
  try {
    const loadThemeFn = themeMap[theme]
    if (loadThemeFn) {
      const cssModule = await loadThemeFn()
      const style = document.createElement('style')
      style.textContent = cssModule.default
      shadowRoot.value?.appendChild(style)
    }
  }
  catch (error) {
    console.error('Failed to load theme:', error)
  }
}

// Highlight the code
const highlightCode = () => {
  const codeElement = document.createElement('pre')
  const codeBlock = document.createElement('code')

  codeBlock.classList.add(`language-${ props.language }`)
  codeBlock.textContent = props.code || ''

  codeElement.appendChild(codeBlock)
  shadowRoot.value?.appendChild(codeElement)

  hljs.highlightElement(codeBlock)
}

onMounted(async () => {
  if (shadowContainer.value) {
    shadowRoot.value = shadowContainer.value.attachShadow({ mode: 'open' })
    await loadTheme(props.theme)
    highlightCode()
    emit('on-initialed')
  }
})

// Listening for code and theme changes
watch([() => props.code, () => props.theme], async ([, newTheme]) => {
  if (newTheme) {
    await loadTheme(newTheme)
  }
  highlightCode()
})
</script>
