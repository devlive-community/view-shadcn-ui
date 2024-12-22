<template>
  <div class="space-y-4 p-12">
    <div>Selected color: {{ selectedColor }}</div>
    <ShadcnColorPicker v-model="selectedColor" color="#000000" @change="onColorChange"/>
    <ShadcnColorPicker v-model="selectedColor" disabled/>
    <ShadcnColorPicker v-model="selectedColor" readonly/>
    <ShadcnColorPicker v-model="selectedColor" :preset-colors="['#ff0000', '#00ff00', '#0000ff']"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedColor = ref('#000000')
const onColorChange = (color: string) => {
  console.log('Selected color:', color)
}
</script>