<template>
  <div class="flex flex-col gap-4">
    <ShadcnRate v-model="rateValue1" />
    <ShadcnRate v-model="rateValue2" type="success" show-text />
    <ShadcnRate v-model="rateValue3" type="warning" allow-half />
    <ShadcnRate v-model="rateValue4" type="error" show-text allow-half />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rateValue1 = ref(3)
const rateValue2 = ref(4)
const rateValue3 = ref(3.5)
const rateValue4 = ref(4.5)
</script>
