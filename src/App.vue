<template>
  <div class="p-32">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnSpace>
      <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" disabled value="D">D</ShadcnToggle>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
</script>
