<template>
  <div class="p-32 space-y-2">
    <ShadcnText>Value: {{ value }}</ShadcnText>
    <ShadcnMap v-model="value"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([
  { key: 'name', value: 'John' },
  { key: 'age', value: '30' }
])
</script>
