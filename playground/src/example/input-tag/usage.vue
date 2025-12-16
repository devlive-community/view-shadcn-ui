<template>
  <ShadcnInputTag v-model="tags" placeholder="输入标签并按回车" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['Vue', 'React', 'Angular'])
</script>
