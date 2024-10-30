<template>
  <div class="relative inline-block"
       @mouseenter="startShowingTooltip"
       @mouseleave="hideTooltip">
    <span>
      <slot/>
    </span>

    <div v-if="isVisible"
         :class="[
           'absolute z-50 px-3 py-2 text-sm text-white bg-black rounded shadow-lg',
           'animate-in fade-in-0 zoom-in-95',
           positionClasses[position]
         ]"
         :style="{ width: `${width}px`, minWidth: `${width}px`, maxWidth: `${width}px` }">
      <template v-if="content">{{ content }}</template>
      <slot v-else name="content"/>

      <div v-if="arrow"
           :class="[
             'absolute w-2 h-2 rotate-45 bg-black',
             arrowClasses[position]
           ]"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  content?: string
  delay?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  arrow?: boolean
  width?: string | number
}>(), {
  delay: 0,
  position: 'top',
  arrow: true,
  width: 200
})

const isVisible = ref(false)
let timeoutId: NodeJS.Timeout | null = null

const positionClasses = {
  top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
  right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
  bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
  left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2'
}

const arrowClasses = {
  top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  right: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  left: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2'
}

const startShowingTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    isVisible.value = true
  }, props.delay)
}

const hideTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  isVisible.value = false
}
</script>
