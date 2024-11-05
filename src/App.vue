<template>
  <div class="p-32 space-y-2">
    Value: {{ value }}
    <ShadcnNumber v-model="value" clearable placeholder="Enter Number"/>
    <ShadcnNumber v-model="value" clearable placeholder="Enter Number">
      <template #clear>
        <div class="h-4 w-4 p-2 flex items-center justify-center bg-gray-200 rounded-full text-sm text-gray-400 hover:bg-gray-300 hover:text-muted-foreground">X</div>
      </template>
    </ShadcnNumber>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>
