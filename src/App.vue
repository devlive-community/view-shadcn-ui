<template>
  <div class="flex h-screen bg-gray-100 w-screen">
    <ShadcnDataBuilderEditor :items="panels" :width="500" :height="500"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const panels = ref([
  {
    group: 'Basic Components',
    children: [
      {type: 'text', label: '文本'},
      {type: 'image', label: '图片'},
      {type: 'chart', label: '图表'},
    ]
  }
])
</script>
