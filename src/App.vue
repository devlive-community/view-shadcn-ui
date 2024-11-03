<template>
  <ShadcnInput v-model="input" placeholder="Input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref(null)
</script>
