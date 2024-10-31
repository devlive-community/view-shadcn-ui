<template>
  <div class="relative w-full h-full">
    <!-- Original Content -->
    <div class="relative z-10">
      <slot/>
    </div>

    <!-- Watermark Layer -->
    <div class="absolute inset-0 pointer-events-none select-none z-0" :style="{ opacity: opacity }"
         aria-hidden="true">
      <!-- Watermark Grid Container -->
      <div class="absolute inset-0"
           :style="{
              backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(svgContent)}')`,
              backgroundRepeat: 'repeat',
              backgroundSize: `${gapX + width}px ${gapY + height}px`
           }"/>

      <!-- Anti-Tamper Layer: Create multiple identical layers to prevent easy removal -->
      <template v-for="index in antiTamperLayers" :key="index">
        <div class="absolute inset-0"
             :style="{
                backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(svgContent)}')`,
                backgroundRepeat: 'repeat',
                backgroundSize: `${gapX + width}px ${gapY + height}px`,
                transform: `translate(${index * 0.1}px, ${index * 0.1}px)`
            }"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'

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
}

const props = withDefaults(defineProps<Props>(), {
  content: 'Devlive Community',
  width: 120,
  height: 64,
  gapX: 100,
  gapY: 100,
  rotate: -22,
  fontSize: 8,
  fontColor: 'rgba(0, 0, 0, 0.15)',
  fontFamily: 'sans-serif',
  opacity: 1,
  antiTamperLayers: 2,
  fontWeight: 400,
  zIndex: 9
})

// Calculate SVG content
const svgContent = computed(() => {
  const contents = Array.isArray(props.content) ? props.content : [props.content]
  const texts = contents.map((text, index) => {
    const y = props.height / 2 + (index - (contents.length - 1) / 2) * props.fontSize * 1.5
    return `<text x="50%"
              y="${ y }"
              dy=".5em"
              text-anchor="middle"
              fill="${ props.fontColor }"
              style="font-size: ${ props.fontSize }px; font-family: ${ props.fontFamily }; font-weight: ${ props.fontWeight }"
            >${ text }</text>`
  }).join('')

  return `
    <svg viewBox="0 0 ${ props.width } ${ props.height }" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(${ props.rotate }, ${ props.width / 2 }, ${ props.height / 2 })">
        ${ texts }
      </g>
    </svg>
  `
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
