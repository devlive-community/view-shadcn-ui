<template>
  <div class="p-32">
    Value: {{ progress }}
    <ShadcnLoadingBar v-model="progress" :duration="500"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const progress = ref(50)

setInterval(() => {
  progress.value = Math.floor(Math.random() * 100)
}, 1000)
</script>
