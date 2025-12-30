<template>
  <div class="space-y-4 flex flex-col items-center">
    <ShadcnPagination v-model="currentPage" :total="100" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
</script>
