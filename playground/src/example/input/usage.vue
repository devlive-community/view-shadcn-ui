<template>
  <ShadcnInput v-model="value" placeholder="Input" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
