<template>
  <div class="p-32 space-y-2">
    Value: {{ value }}
    <ShadcnNumber v-model="value" clearable placeholder="Enter Number"/>
    <ShadcnNumber v-model="value" placeholder="Enter Number">
      <template #add>
        <div class="text-gray-300 w-4 h-4 m-1 flex items-center justify-center">A</div>
      </template>
      <template #minus>
        <div class="text-gray-300 w-4 h-4 m-1 flex items-center justify-center">M</div>
      </template>
    </ShadcnNumber>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>
