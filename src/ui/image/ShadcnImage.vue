<template>
  <div class="relative inline-block">
    <img :src="src"
         :alt="alt"
         class="max-w-full w-full h-full"
         @load="emit('on-load')"
         @error="handleError"/>
  </div>
</template>

<script setup lang="ts">
import type { ImageEmits, ImageProps } from './types'

// Define props and emits
// 定义属性和事件
withDefaults(defineProps<ImageProps>(), {})

const emit = defineEmits<ImageEmits>()

// Handle image load error
// 处理图片加载错误
const handleError = () => {
  emit('on-error')
}
</script>