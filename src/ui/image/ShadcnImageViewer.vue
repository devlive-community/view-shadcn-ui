<template>
  <div v-if="visible"
       class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 select-none transition-opacity duration-300"
       @click.self="handleClose">
    <div class="relative w-full h-full flex items-center justify-center" @click.stop>
      <button class="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-500 items-center flex transition-colors duration-200 z-20"
              @click.stop="handleClose">
        <ShadcnIcon icon="X"/>
      </button>

      <button v-if="current > 0"
              class="absolute left-4 text-white p-2 rounded-full hover:bg-gray-500 items-center flex transition-colors duration-200 z-20"
              @click.stop="handlePrevious">
        <ShadcnIcon icon="ChevronLeft"/>
      </button>

      <button v-if="current < images.length - 1"
              class="absolute right-4 text-white p-2 rounded-full hover:bg-gray-500 items-center flex transition-colors duration-200 z-20"
              @click.stop="handleNext">
        <ShadcnIcon icon="ChevronRight"/>
      </button>

      <div class="max-w-4xl max-h-full p-4" @click.stop>
        <div class="relative" @click.stop>
          <img v-for="(image, index) in images"
               class="max-w-full max-h-[80vh] object-contain absolute top-0 left-0 cursor-grab active:cursor-grabbing"
               :key="index"
               :src="image.src"
               :alt="image.alt"
               :class="[ index === current ? 'opacity-100 relative' : 'opacity-0' ]"
               :style="{
                 transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
               }"
               @mousedown.stop.prevent="handleDragStart"
               @touchstart.stop.prevent="handleDragStart"
               @mousemove.stop.prevent="handleDrag"
               @touchmove.stop.prevent="handleDrag"
               @mouseup.stop.prevent="handleDragEnd"
               @touchend.stop.prevent="handleDragEnd"
               @click.stop/>
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white flex flex-col space-y-4 items-center z-20" @click.stop>
        <div>
          <span>{{ current + 1 }} / {{ images.length }}</span>
        </div>

        <div class="flex items-center space-x-10 bg-black/30 py-1 px-4 rounded border border-gray-600">
          <ShadcnHoverCard :content="zoom">
            <button class="text-white p-2 rounded-full flex items-center hover:scale-150 hover:duration-300 hover:transition-transform"
                    @click.stop="handleZoomIn">
              <ShadcnIcon icon="ZoomIn"/>
            </button>
          </ShadcnHoverCard>

          <ShadcnHoverCard :content="zoom">
            <button class="text-white p-2 rounded-full items-center flex hover:scale-150 hover:duration-300 hover:transition-transform"
                    @click.stop="handleZoomOut">
              <ShadcnIcon icon="ZoomOut"/>
            </button>
          </ShadcnHoverCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagePreviewEmits, ImagePreviewProps } from './types'
import { onUnmounted, ref } from 'vue'

const props = defineProps<ImagePreviewProps>()
const emit = defineEmits<ImagePreviewEmits>()

const zoom = ref(1)
const position = ref({ x: 0, y: 0 })
const dragStart = ref({ x: 0, y: 0 })
const isDragging = ref(false)

const handleClose = () => {
  emit('update:visible', false)
  resetView()
}

const resetView = () => {
  zoom.value = 1
  position.value = { x: 0, y: 0 }
}

const handlePrevious = () => {
  if (props.current > 0) {
    emit('update:current', props.current - 1)
    resetView()
  }
}

const handleNext = () => {
  if (props.current < props.images.length - 1) {
    emit('update:current', props.current + 1)
    resetView()
  }
}

const handleZoomIn = () => {
  zoom.value = Math.round(Math.min(zoom.value + 0.1, 3) * 100) / 100
}

const handleZoomOut = () => {
  zoom.value = Math.round(Math.max(zoom.value - 0.1, 0.5) * 100) / 100
  if (zoom.value === 1) {
    resetView()
  }
}

const handleDragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  const point = 'touches' in e ? e.touches[0] : e
  dragStart.value = {
    x: point.clientX - position.value.x,
    y: point.clientY - position.value.y
  }

  if ('touches' in e) {
    document.addEventListener('touchmove', handleDrag, { passive: false })
    document.addEventListener('touchend', handleDragEnd)
    document.addEventListener('touchcancel', handleDragEnd)
  }
  else {
    document.addEventListener('mousemove', handleDrag)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('mouseleave', handleDragEnd)
  }
}

const handleDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) {
    return
  }
  e.preventDefault()
  e.stopPropagation()

  const point = 'touches' in e ? e.touches[0] : e
  position.value = {
    x: point.clientX - dragStart.value.x,
    y: point.clientY - dragStart.value.y
  }
}

const handleDragEnd = (e?: MouseEvent | TouchEvent) => {
  if (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  isDragging.value = false
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', handleDragEnd)
  document.removeEventListener('mouseleave', handleDragEnd)
  document.removeEventListener('touchmove', handleDrag)
  document.removeEventListener('touchend', handleDragEnd)
  document.removeEventListener('touchcancel', handleDragEnd)
}

onUnmounted(() => {
  handleDragEnd()
})
</script>