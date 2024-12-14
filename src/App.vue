<template>
  <div class="p-32">
    Default
    <ShadcnLoadingBar v-model="progress" :duration="500"/>
    Error
    <ShadcnLoadingBar v-model="progress" :duration="500" status="error"/>
    Success
    <ShadcnLoadingBar v-model="progress" :duration="500" status="success"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const progress = ref(50)

setInterval(() => {
  progress.value = Math.floor(Math.random() * 100)
}, 1000)
</script>
