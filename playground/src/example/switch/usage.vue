<template>
  <div class="flex flex-col gap-4">
    <ShadcnSwitch v-model="switchValue1" />
    <ShadcnSwitch v-model="switchValue2" type="success" />
    <ShadcnSwitch v-model="switchValue3" type="warning" />
    <ShadcnSwitch v-model="switchValue4" type="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const switchValue1 = ref(true)
const switchValue2 = ref(false)
const switchValue3 = ref(true)
const switchValue4 = ref(false)
</script>
