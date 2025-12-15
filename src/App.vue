<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnCarousel - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div class="relative">
            <ShadcnCarousel glass :dark="isDark" :items="carouselItems" height="300px"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnCarousel } from "@/ui/carousel";

const isDark = ref(false)

const carouselItems = [
  { src: 'https://picsum.photos/800/300?random=1', text: 'Slide 1' },
  { src: 'https://picsum.photos/800/300?random=2', text: 'Slide 2' },
  { src: 'https://picsum.photos/800/300?random=3', text: 'Slide 3' }
]
</script>