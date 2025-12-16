<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <div class="flex flex-col gap-4">
      <ShadcnRate v-model="rateValue1" glass />
      <ShadcnRate v-model="rateValue2" glass type="success" show-text />
      <ShadcnRate v-model="rateValue3" glass type="warning" allow-half />
      <ShadcnRate v-model="rateValue4" glass type="error" show-text allow-half />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rateValue1 = ref(3)
const rateValue2 = ref(4)
const rateValue3 = ref(3.5)
const rateValue4 = ref(4.5)
</script>
