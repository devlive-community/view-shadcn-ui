<template>
  <div class="relative inline-block"
       :class="[
         border && 'border border-dashed rounded-md',
         border && (dark ? 'border-gray-600' : 'border-gray-200')
       ]"
       :style="{ width: `${calcSize(width)}`, height: `${calcSize(height)}` }">
    <ShadcnSpin v-model="localLoading" :dark="dark" fixed/>

    <img class="w-full h-full"
         v-show="!showFallback"
         :src="src"
         :alt="alt"
         :width="width"
         :height="height"
         :class="[
             ImageFit[fit],
             border && 'rounded-md'
         ]"
         :loading="loading"
         @load="handleLoad"
         @error="handleError"/>

    <div v-if="showFallback" class="absolute inset-0 flex items-center justify-center">
      <slot name="fallback">
        <Icon :class="dark ? 'text-gray-600' : 'text-gray-300'" icon="ImageOff"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImageEmits, ImageFit, ImageProps } from './types'
import { ref } from 'vue'
import { calcSize } from '@/utils/common.ts'

// Define props and emits
// 定义属性和事件
const props = withDefaults(defineProps<ImageProps>(), {
  width: 200,
  height: 200,
  fit: 'cover',
  lazy: false,
  border: false,
  dark: false
})

const emit = defineEmits<ImageEmits>()

const loading = props.lazy ? 'lazy' : 'eager'
const localLoading = ref(props.lazy)
const showFallback = ref(false)

const handleLoad = () => {
  localLoading.value = false
  emit('on-load')
}

// Handle image load error
// 处理图片加载错误
const handleError = () => {
  localLoading.value = false
  showFallback.value = true
  emit('on-error')
}
</script>