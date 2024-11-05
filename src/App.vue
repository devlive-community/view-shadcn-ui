<template>
  <div class="p-32 space-y-2">
    Value: {{ value }}
    <ShadcnNumber v-model="value"/>
    <ShadcnNumber v-model="value" disabled/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>
