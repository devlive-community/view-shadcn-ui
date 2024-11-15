<template>
  <div class="p-32">
    <ShadcnSpace>
      <ShadcnToggle v-model="defaultValue" size="small" value="S">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L">L</ShadcnToggle>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
</script>
