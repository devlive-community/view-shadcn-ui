<template>
  <div v-if="visible"
       class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 select-none transition-opacity duration-300"
       @click.self="handleClose">
    <div class="relative w-full h-full flex items-center justify-center">
      <button class="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-500 items-center flex transition-colors duration-200"
              @click="handleClose">
        <ShadcnIcon icon="X"/>
      </button>

      <button v-if="current > 0"
              class="absolute left-4 text-white p-2 rounded-full hover:bg-gray-500 items-center flex transition-colors duration-200"
              @click="handlePrevious">
        <ShadcnIcon icon="ChevronLeft"/>
      </button>

      <button v-if="current < images.length - 1"
              class="absolute right-4 text-white p-2 rounded-full hover:bg-gray-500 items-center flex transition-colors duration-200"
              @click="handleNext">
        <ShadcnIcon icon="ChevronRight"/>
      </button>

      <div class="max-w-4xl max-h-full p-4">
        <div class="relative">
          <img v-for="(image, index) in images"
               :key="index"
               :src="image.src"
               :alt="image.alt"
               class="max-w-full max-h-[80vh] object-contain absolute top-0 left-0 transition-opacity duration-300"
               :class="[
                 index === current ? 'opacity-100 relative' : 'opacity-0'
               ]"/>
        </div>
      </div>

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {{ current + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagePreviewEmits, ImagePreviewProps } from './types'

const props = defineProps<ImagePreviewProps>()
const emit = defineEmits<ImagePreviewEmits>()

const handleClose = () => {
  emit('update:visible', false)
}

const handlePrevious = () => {
  if (props.current > 0) {
    emit('update:current', props.current - 1)
  }
}

const handleNext = () => {
  if (props.current < props.images.length - 1) {
    emit('update:current', props.current + 1)
  }
}
</script>