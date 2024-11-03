<template>
  <ShadcnException>
    <template #actions>
      <div class="w-56">
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
      </div>
    </template>
  </ShadcnException>
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
