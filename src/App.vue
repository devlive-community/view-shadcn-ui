<template>
  <div class="flex h-screen bg-gray-100 w-screen">
    <ShadcnDataBuilderEditor :show-ruler="false" :items="panels"/>
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
