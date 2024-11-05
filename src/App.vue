<template>
  <div class="p-32">
    Value: {{ value }}
    <ShadcnNumber v-model="value"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>
