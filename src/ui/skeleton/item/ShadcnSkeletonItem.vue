<template>
  <div class="relative">
    <div :class="[animation ? 'animate-pulse' : '']">
      <div class="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  animation?: boolean
}>(), {
  animation: false
})
</script>
