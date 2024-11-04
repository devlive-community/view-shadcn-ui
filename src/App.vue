<template>
  <ShadcnButton @click="modal = true">Click</ShadcnButton>
  <ShadcnModal v-model="modal" title="Modal Title" description="This is a modal description" @on-close="console.log('on-close')">
    <div class="flex items-center justify-center h-32">Content</div>
  </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>