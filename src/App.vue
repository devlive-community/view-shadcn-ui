<template>
  <ShadcnButton @click="modal = true">Click</ShadcnButton>
  <ShadcnModal v-model="modal" title="Custom Width" :mask-closable="false" width="200" height="300">
    <div class="flex items-center justify-center h-32">Content</div>
  </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
