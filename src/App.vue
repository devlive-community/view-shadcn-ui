<template>
  <div class="p-32 space-y-2">
    <p>Default Value: {{ selected }}</p>
    <ShadcnToggleGroup v-model="selected" size="small">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="selected" size="default">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="selected" size="large">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(null)
</script>
