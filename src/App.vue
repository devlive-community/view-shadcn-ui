<template>
  <div class="p-32 space-y-7">
    {{value}}
    <ShadcnToggleGroup v-model="value" size="default">
      <ShadcnToggle value="1">O000000000001</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('1')
</script>