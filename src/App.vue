<template>
  <div v-for="n in 20" :key="n" class="p-4">
    <h2 class="text-xl font-bold mb-2">Section {{ n }}</h2>
    <p>This is test content。</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <ShadcnBackTop target="#scrollContainer"/>
</template>

<script setup lang="ts">
</script>
