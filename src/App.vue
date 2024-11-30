<template>
  <div class="p-32">
    <ShadcnUpload  action="//jsonplaceholder.typicode.com/posts/" @on-change="handleFileChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])

const handleFileChange = (newFiles) => {
  console.log('Files changed:', newFiles)
}
</script>
