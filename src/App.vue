<template>
  <div class="p-32 space-y-2">
    <ShadcnTimePicker v-model="time" @change="handleTimeChange"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const time = ref('')

const handleTimeChange = (value: string) => {
  console.log('Selected time:', value)
}
</script>
