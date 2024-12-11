<template>
  <div class="p-32 space-y-2">
    <ShadcnText>Value: {{ value }}</ShadcnText>
    <ShadcnInputTag v-model="value"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
