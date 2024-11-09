<template>
  <div class="p-32 space-y-2">
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
    <ShadcnSelect v-model="defaultSelect" :border="false" :options="defaultSelectOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
  { label: 'Vue', value: 'Vue' },
  { label: 'Nuxt', value: 'Nuxt' },
  { label: 'Svelte', value: 'Svelte' }
]
</script>
