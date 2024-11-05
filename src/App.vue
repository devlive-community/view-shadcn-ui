<template>
  <div class="p-32 space-y-2">
    Value: {{ value }}
    <ShadcnNumber v-model="value" placeholder="Enter Number"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>
