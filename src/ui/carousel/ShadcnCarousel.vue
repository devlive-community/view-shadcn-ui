<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-300 ease-in-out" :style="containerStyle">
      <div v-for="(item, index) in props.items" :key="index" class="w-full flex-shrink-0">
        <slot :item="item" :index="index">
          <ShadcnImage :src="item.src" :alt="item.text" width="100%" height="100%"/>
        </slot>
      </div>
    </div>

    <div v-if="props.showIndicators" class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      <button v-for="(_, index) in props.items"
              :key="index"
              class="w-2 h-2 rounded-full transition-colors"
              :class="[currentIndex === index ? 'bg-white' : 'bg-white/50']"
              @click="updateIndex(index)"/>
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
  showArrows: true,
  showIndicators: true
})

const emit = defineEmits<CarouselEmits>()

const currentIndex = ref(0)
let timer: number | null = null

const containerStyle = computed(() => ({
  transform: `translateX(-${ currentIndex.value * 100 }%)`
}))

const updateIndex = (index: number) => {
  currentIndex.value = index
  emit('on-change', index)
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
  emit('on-change', currentIndex.value)
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
  emit('on-change', currentIndex.value)
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