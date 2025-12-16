<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <ShadcnCron v-model="cronValue" glass />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cronValue = ref('0 0 12 * * ?')
</script>
