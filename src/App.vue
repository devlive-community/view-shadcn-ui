<template>
  <div class="p-32 space-y-2">
    <ShadcnInput v-model="value" />
    <ShadcnQrCode v-model="value" :size="150" level="H"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('https://github.com/devlive-community/view-shadcn-ui')
</script>
