<template>
  <ShadcnCodeEditor v-model="value"
                    :search-config="{
                        caseSensitive: false,
                        replace: true,
                        showHistory: true
                    }">
  </ShadcnCodeEditor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello View Shadcn UI')
</script>