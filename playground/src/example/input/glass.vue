<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <ShadcnInput v-model="inputValue" glass placeholder="请输入内容" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
</script>
