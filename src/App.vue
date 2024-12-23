<template>
  <div class="space-y-4 p-12">
    <div>Selected value: {{ value }}</div>
    <ShadcnCron v-model="value" @on-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('0 1-2 0-1 * * ?')

const onChange = (value: string) => {
  console.log('Selected date:', value)
}
</script>