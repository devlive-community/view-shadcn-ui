<template>
  <div v-if="$slots.default" class="relative w-full h-full">
    <div class="relative z-10">
      <slot/>
    </div>
    <WatermarkLayer/>
  </div>
  <WatermarkLayer v-else-if="fullscreen"/>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, onMounted, onUnmounted } from 'vue'

interface Props
{
  // Watermark text content
  content: string | string[]
  // Width
  width?: number
  // Height
  height?: number
  // Horizontal gap between watermarks
  gapX?: number
  // Vertical gap between watermarks
  gapY?: number
  // Rotation angle
  rotate?: number
  // Font size
  fontSize?: number
  // Font color
  fontColor?: string
  // Font family
  fontFamily?: string
  // Opacity
  opacity?: number
  // Number of anti-tamper layers
  antiTamperLayers?: number
  // Font weight
  fontWeight?: number | string
  // z-index
  zIndex?: number
  // Enable fullscreen mode
  fullscreen?: boolean
  // Dark mode
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  content: 'Devlive Community',
  width: 120,
  height: 64,
  gapX: 100,
  gapY: 100,
  rotate: -22,
  fontSize: 8,
  fontFamily: 'sans-serif',
  opacity: 1,
  antiTamperLayers: 2,
  fontWeight: 400,
  zIndex: 9,
  fullscreen: false,
  dark: false
})

const finalFontColor = computed(() => {
  if (props.fontColor) {
    return props.fontColor
  }
  return props.dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'
})

// Calculate SVG content
const svgContent = computed(() => {
  const contents = Array.isArray(props.content) ? props.content : [props.content]
  const texts = contents.map((text, index) => {
    const y = props.height / 2 + (index - (contents.length - 1) / 2) * props.fontSize * 1.5
    return `<text x="50%"
              y="${y}"
              dy=".5em"
              text-anchor="middle"
              fill="${finalFontColor.value}"
              style="font-size: ${props.fontSize}px; font-family: ${props.fontFamily}; font-weight: ${props.fontWeight}"
            >${text}</text>`
  }).join('')

  return `
    <svg viewBox="0 0 ${props.width} ${props.height}" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(${props.rotate}, ${props.width / 2}, ${props.height / 2})">
        ${texts}
      </g>
    </svg>
  `
})

// Watermark Layer Component
const WatermarkLayer = defineComponent({
  setup()
  {
    return () => h('div', {
      class: ['pointer-events-none select-none', props.fullscreen ? 'fixed' : 'absolute', 'inset-0'],
      style: { opacity: props.opacity, zIndex: props.zIndex },
      'aria-hidden': true
    }, [
      // Base Layer
      h('div', {
        class: 'absolute inset-0',
        style: {
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(svgContent.value)}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: `${props.gapX + props.width}px ${props.gapY + props.height}px`
        }
      }),
      // Anti-Tamper Layers
      ...[...Array(props.antiTamperLayers)].map((_, index) =>
          h('div', {
            key: index,
            class: 'absolute inset-0',
            style: {
              backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(svgContent.value)}')`,
              backgroundRepeat: 'repeat',
              backgroundSize: `${props.gapX + props.width}px ${props.gapY + props.height}px`,
              transform: `translate(${index * 0.1}px, ${index * 0.1}px)`
            }
          })
      )
    ])
  }
})

// Listens for changes in content to prevent watermarks from being tampered with
let observer: MutationObserver | null = null

onMounted(() => {
  // Create a MutationObserver to monitor DOM changes
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' || mutation.type === 'attributes') {
        // If a modified watermark layer is detected, a re-render is forced
        mutation.target.dispatchEvent(new Event('watermark-changed'))
      }
    })
  })

  // Observe the changes in the watermark container
  const watermarkContainer = document.querySelector('.watermark-container')
  if (watermarkContainer) {
    observer.observe(watermarkContainer, {
      attributes: true,
      childList: true,
      subtree: true
    })
  }
})

// Clean up observer when component is unmounted
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
