<template>
  <div class="p-32">
    Value: {{ value }}
    <ShadcnSpace wrap>
      <ShadcnNumber v-model="value" size="small"/>
      <ShadcnNumber v-model="value" size="default"/>
      <ShadcnNumber v-model="value" size="large" @on-blur="console.log($event)"/>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>
