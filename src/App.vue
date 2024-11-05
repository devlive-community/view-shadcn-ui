<template>
  <div class="p-32 space-y-2">
    Value: {{ value }}
    <ShadcnNumber v-model="value" min="5" max="10" placeholder="Enter Number"/>
    <ShadcnNumber v-model="value" placeholder="Enter Number"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>
