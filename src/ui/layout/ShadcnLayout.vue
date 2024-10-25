<template>
  <div class="flex flex-col">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const isInLayout = ref(true)
const hasHeader = ref(false)
provide('isInLayout', isInLayout)
provide('hasHeader', hasHeader)
</script>