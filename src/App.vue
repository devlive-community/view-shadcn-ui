<template>
  <div class="p-32 space-y-2">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" multiple>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="1">
        <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg">
      </ShadcnToggle>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="2">
        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg">
      </ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
</script>
