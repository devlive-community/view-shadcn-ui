<template>
  <ShadcnCodeEditor v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello View Shadcn UI')
</script>