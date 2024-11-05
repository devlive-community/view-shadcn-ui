<template>
  <div class="p-32 space-y-2">
    Value: {{ value }}
    <ShadcnNumber v-model="value" size="small" type="primary"/>
    <ShadcnNumber v-model="value" size="default" type="warning"/>
    <ShadcnNumber v-model="value" size="large" type="success"/>
    <ShadcnNumber v-model="value" size="large" type="error"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>
