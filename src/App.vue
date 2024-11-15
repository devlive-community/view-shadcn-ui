<template>
  <div class="p-32 space-y-2">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" multiple>
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
      <ShadcnToggle value="3">O3</ShadcnToggle>
      <ShadcnToggle value="4">O4</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
</script>
