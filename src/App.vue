<template>
  <div class="p-32">
    <ShadcnNumber v-model="value" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
