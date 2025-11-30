<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold mb-4">Basic ShadcnCarousel</h3>
        <ShadcnCarousel :items="carouselItems" :dark="isDark" :height="600" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const carouselItems = [
  { src: 'https://images.pexels.com/photos/33929657/pexels-photo-33929657.jpeg', text: 'Slide 1' },
  { src: 'https://images.pexels.com/photos/31571128/pexels-photo-31571128.jpeg', text: 'Slide 2' },
  { src: 'https://images.pexels.com/photos/27153650/pexels-photo-27153650.jpeg', text: 'Slide 3' }
]
</script>