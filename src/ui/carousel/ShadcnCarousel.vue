<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-300 ease-in-out" :style="containerStyle">
      <div v-for="(item, index) in props.items" :key="index" class="w-full flex-shrink-0">
        <slot :item="item" :index="index">
          <ShadcnImage :src="item.src" :alt="item.text" width="100%" height="100%"/>
        </slot>
      </div>
    </div>

    <template v-if="props.showArrows">
      <button class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/30 text-white"
              @click="prev">
        ←
      </button>
      <button class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/30 text-white"
              @click="next">
        →
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { CarouselEmits, CarouselProps } from './types'
import { ShadcnImage } from '@/ui/image'

const props = withDefaults(defineProps<CarouselProps>(), {
  interval: 3000,
  showArrows: true
})

defineEmits<CarouselEmits>()

const currentIndex = ref(0)
let timer: number | null = null

const containerStyle = computed(() => ({
  transform: `translateX(-${ currentIndex.value * 100 }%)`
}))

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
}

const startTimer = () => {
  if (props.interval > 0) {
    timer = window.setInterval(() => {
      next()
    }, props.interval)
  }
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>