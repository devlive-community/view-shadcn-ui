<template>
  <div class="relative w-full overflow-hidden"
       :style="{ height: `${calcSize(height)}` }">
    <div class="flex transition-transform duration-300 ease-in-out"
         :class="[props.direction === 'vertical' ? 'h-full flex-col' : '']"
         :style="containerStyle">
      <div v-for="(item, index) in props.items"
           :key="index"
           class="flex-shrink-0"
           :class="[props.direction === 'vertical' ? 'w-full h-full' : 'w-full']">
        <slot :item="item" :index="index">
          <ShadcnImage :src="item.src" :alt="item.text" width="100%" height="100%"/>
        </slot>
      </div>
    </div>

    <div v-if="props.showIndicators"
         class="absolute flex gap-2"
         :class="[props.direction === 'vertical' ? 'right-4 top-0 bottom-0 flex-col items-center justify-center' : 'bottom-4 left-0 right-0 justify-center']">
      <button v-for="(_, index) in props.items"
              :key="index"
              :class="['w-2 h-2 rounded-full transition-all',
                       props.glass && currentIndex === index && 'backdrop-blur-xl backdrop-saturate-150',
                       props.glass && currentIndex === index && 'border border-white/20',
                       props.glass && currentIndex === index && 'shadow-lg shadow-black/5',
                       props.glass && currentIndex === index ? (props.dark ? 'bg-white/30' : 'bg-white/80') : (currentIndex === index ? (props.dark ? 'bg-gray-200' : 'bg-gray-700') : (props.dark ? 'bg-gray-200/50' : 'bg-gray-700/50'))
              ]"
              @click="updateIndex(index)"/>
    </div>

    <template v-if="props.showArrows">
      <button :class="['absolute flex items-center justify-center rounded-full w-10 h-10 transition-all',
                       props.glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                       props.glass ? 'border border-white/20' : '',
                       props.glass ? 'shadow-lg shadow-black/5' : '',
                       props.glass ? (props.dark ? 'bg-white/10 hover:bg-white/15 text-gray-100' : 'bg-white/60 hover:bg-white/70 text-gray-900') : (props.dark ? 'hover:bg-gray-700/50 text-gray-200' : 'hover:bg-gray-200/30 text-gray-700'),
                       props.direction === 'vertical' ? 'left-1/2 top-4 -translate-x-1/2 rotate-90' : 'left-4 top-1/2 -translate-y-1/2']"
              @click="prev">
        <slot name="prev">
          ←
        </slot>
      </button>
      <button :class="['absolute flex items-center justify-center rounded-full w-10 h-10 transition-all',
                       props.glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                       props.glass ? 'border border-white/20' : '',
                       props.glass ? 'shadow-lg shadow-black/5' : '',
                       props.glass ? (props.dark ? 'bg-white/10 hover:bg-white/15 text-gray-100' : 'bg-white/60 hover:bg-white/70 text-gray-900') : (props.dark ? 'hover:bg-gray-700/50 text-gray-200' : 'hover:bg-gray-200/30 text-gray-700'),
                       props.direction === 'vertical' ? 'left-1/2 bottom-4 -translate-x-1/2 rotate-90' : 'right-4 top-1/2 -translate-y-1/2']"
              @click="next">
        <slot name="next">
          →
        </slot>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { CarouselEmits, CarouselProps } from './types'
import { ShadcnImage } from '@/ui/image'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<CarouselProps>(), {
  interval: 3000,
  showArrows: true,
  showIndicators: true,
  direction: 'horizontal',
  autoPlay: true,
  height: 300,
  dark: false,
  glass: false
})

const emit = defineEmits<CarouselEmits>()

const currentIndex = ref(0)
let timer: number | null = null

const containerStyle = computed(() => {
  const translate = currentIndex.value * 100
  return props.direction === 'vertical'
      ? { transform: `translateY(-${translate}%)`, height: `${props.items.length * 100}%` }
      : { transform: `translateX(-${translate}%)` }
})

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
  if (props.autoPlay) {
    startTimer()
  }
})

onUnmounted(() => {
  stopTimer()
})
</script>