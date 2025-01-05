<template>
  <div class="relative">
    <div class="grid"
         :style="{
           display: 'grid',
           gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
           gap: `${gap * 0.25}rem`
         }">
      <div v-for="(image, index) in images"
           :key="index"
           class="relative"
           :class="[preview && 'cursor-pointer hover:opacity-75 hover:scale-105 hover:duration-300 hover:transition-transform']"
           @click="handleImageClick(index)">
        <ShadcnImage :src="image.src"
                     :alt="image.alt"
                     :width="image.width"
                     :height="image.height"
                     :fit="image.fit"
                     :lazy="image.lazy"
                     :border="image.border">
        </ShadcnImage>
      </div>
    </div>

    <ShadcnImageViewer v-if="preview"
                       v-model:visible="previewVisible"
                       v-model:current="currentIndex"
                       :images="images">
    </ShadcnImageViewer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageGroupProps } from './types'
import ShadcnImage from './ShadcnImage.vue'
import ShadcnImageViewer from './ShadcnImageViewer.vue'

const props = withDefaults(defineProps<ImageGroupProps>(), {
  columns: 6,
  gap: 2,
  preview: false
})

const previewVisible = ref(false)
const currentIndex = ref(0)

const handleImageClick = (index: number) => {
  if (props.preview) {
    currentIndex.value = index
    previewVisible.value = true
  }
}
</script>