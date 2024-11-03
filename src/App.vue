<template>
  <ShadcnCard title="Title" description="Description" :loading="loading">
    <div class="flex items-center justify-center h-32">Content</div>
    <template #content>Content Slot</template>
    <template #footer>Footer Slot</template>
  </ShadcnCard>

  <ShadcnCard title="Title" description="Description" :loading="loading" only-content-loading>
    <div class="flex items-center justify-center h-32">Content</div>
    <template #footer>Footer Slot</template>
  </ShadcnCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 3000)
</script>
