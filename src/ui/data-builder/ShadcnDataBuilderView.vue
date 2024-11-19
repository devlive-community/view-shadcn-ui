<template>
  <div class="relative bg-white shadow-md" :style="containerStyle">
    <!-- Static components -->
    <div v-for="item in items"
         class="absolute bg-white border-2 border-gray-200 flex items-center justify-center"
         :key="item.id"
         :style="getComponentStyle(item)">
      <slot :name="item.type" :component="item" :configure="item.configure">
        <ShadcnDataBuilderRenderer :type="item.type" :configure="item.configure"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { calcSize } from '@/utils/common'
import ShadcnDataBuilderRenderer from './ShadcnDataBuilderRenderer.vue'
import type { ShadcnDataBuilderViewProps } from './types'

const props = withDefaults(defineProps<ShadcnDataBuilderViewProps>(), {
  width: 1920,
  height: 1080,
  items: () => [],
  canvasStyle: () => ({})
})

const containerStyle = computed(() => {
  const { backgroundColor, backgroundImage, opacity } = props.canvasStyle || {}
  return {
    width: calcSize(props.width),
    height: calcSize(props.height),
    backgroundColor: backgroundColor || '#ffffff',
    backgroundImage: backgroundImage ? `url(${ backgroundImage })` : 'none',
    opacity: opacity ?? 1
  }
})

// Component style calculation remains the same
const getComponentStyle = (component) => {
  const baseStyle = {
    left: calcSize(component.x),
    top: calcSize(component.y),
    width: calcSize(component.width),
    height: calcSize(component.height),
    zIndex: component.zIndex || 1
  }

  if (component.configure) {
    const styleGroup = component.configure.find(group => group.key === 'style')
    if (styleGroup?.items) {
      const extractedStyles = styleGroup.items.reduce((styles, item) => {
        if (item.value !== undefined) {
          const styleKey = item.key || item.label.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
              index === 0 ? letter.toLowerCase() : letter.toUpperCase()
          ).replace(/\s+/g, '')

          let value = item.value
          if (item.formatter && typeof item.formatter === 'function') {
            try {
              value = item.formatter(item.value)
            }
            catch (e) {
              console.error('Formatter function error:', e)
            }
          }
          styles[styleKey] = value
        }
        return styles
      }, {})

      return { ...baseStyle, ...extractedStyles }
    }
  }

  return baseStyle
}
</script>
