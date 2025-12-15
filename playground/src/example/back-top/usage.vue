<template>
  <div class="p-8">
    <div v-for="n in 20" :key="n" class="mb-8 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-bold mb-2">Section {{ n }}</h2>
      <p>This is test content。</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <ShadcnBackTop />
  </div>
</template>

<script setup lang="ts">
</script>
