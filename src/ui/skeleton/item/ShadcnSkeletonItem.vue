<template>
  <div class="relative">
    <div :class="[animation ? 'animate-pulse' : '']">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"
           :style="[{width: width}]"/>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  animation?: boolean
  width?: string
}>(), {
  animation: false
})
</script>
