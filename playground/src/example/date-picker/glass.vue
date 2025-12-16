<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <ShadcnDatePicker v-model="dateValue" glass />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref('')
</script>
