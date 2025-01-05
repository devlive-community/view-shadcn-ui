<template>
  <div class="relative inline-block">
    <img :src="src"
         :alt="alt"
         :width="width"
         :height="height"
         class="max-w-full h-auto"
         :class="[ImageFit[fit]]"
         @load="emit('on-load')"
         @error="handleError"/>
  </div>
</template>

<script setup lang="ts">
import { ImageEmits, ImageFit, ImageProps } from './types'

// Define props and emits
// 定义属性和事件
withDefaults(defineProps<ImageProps>(), {
  width: 200,
  height: 200,
  fit: 'cover'
})

const emit = defineEmits<ImageEmits>()

// Handle image load error
// 处理图片加载错误
const handleError = () => {
  emit('on-error')
}
</script>