<template>
  <div class="flex flex-col h-screen">
    <div class="flex-1 overflow-y-auto">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const isInLayout = ref(true)
provide('isInLayout', isInLayout)
</script>
