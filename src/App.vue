<template>
  <div class="p-32">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="love">Love</ShadcnToggle>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
