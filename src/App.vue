<template>
  <div class="p-32 space-y-7 space-x-4">
    <div class="p-2 flex flex-col space-y-4 min-h-60 space-x-6 overflow-x-auto">
      <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" loading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref(null)
const defaultSelectOptions = [
  { label: 'Vue', value: 'Vue' },
  { label: 'Nuxt', value: 'Nuxt', disabled: true },
  { label: 'Svelte', value: 'Svelte' }
]
</script>