<template>
  <div class="relative inline-block">
    <ShadcnSpin v-model="localLoading" fixed/>

    <img class="max-w-full h-auto"
         :src="src"
         :alt="alt"
         :width="width"
         :height="height"
         :class="[ImageFit[fit]]"
         :loading="loading"
         @load="handleLoad"
         @error="handleError"/>
  </div>
</template>

<script setup lang="ts">
import { ImageEmits, ImageFit, ImageProps } from './types'
import { ref } from 'vue'

// Define props and emits
// 定义属性和事件
const props = withDefaults(defineProps<ImageProps>(), {
  width: 200,
  height: 200,
  fit: 'cover',
  loading: 'eager'
})

const emit = defineEmits<ImageEmits>()

const localLoading = ref(props.loading === 'lazy')

const handleLoad = () => {
  localLoading.value = false
  emit('on-load')
}

// Handle image load error
// 处理图片加载错误
const handleError = () => {
  localLoading.value = false
  emit('on-error')
}
</script>