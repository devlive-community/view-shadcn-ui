<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <ShadcnInputTag v-model="tags" glass placeholder="输入标签并按回车" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['Vue', 'React', 'Angular'])
</script>
