<template>
  <div v-if="visible"
       class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 select-none"
       @click.self="handleClose">
    <div class="relative w-full h-full flex items-center justify-center">
      <button class="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-700 items-center flex"
              @click="handleClose">
        <ShadcnIcon icon="X"/>
      </button>

      <button v-if="current > 0"
              class="absolute left-4 text-white p-2 rounded-full hover:bg-gray-700 items-center flex"
              @click="handlePrevious">
        <ShadcnIcon icon="ChevronLeft"/>
      </button>

      <button v-if="current < images.length - 1"
              class="absolute right-4 text-white p-2 rounded-full hover:bg-gray-700 items-center flex"
              @click="handleNext">
        <ShadcnIcon icon="ChevronRight"/>
      </button>

      <div class="max-w-4xl max-h-full p-4">
        <ShadcnImage :src="images[current].src"
                     :alt="images[current].alt"
                     :width="images[current].width"
                     :height="images[current].height"
                     :fit="images[current].fit"
                     :lazy="images[current].lazy"
                     :border="images[current].border">
        </ShadcnImage>
      </div>

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {{ current + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagePreviewEmits, ImagePreviewProps } from './types'
import ShadcnImage from './ShadcnImage.vue'

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