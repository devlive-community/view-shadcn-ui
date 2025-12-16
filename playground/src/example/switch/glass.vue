<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
    <div class="flex flex-col gap-4">
      <ShadcnSwitch v-model="switchValue1" glass />
      <ShadcnSwitch v-model="switchValue2" glass type="success" />
      <ShadcnSwitch v-model="switchValue3" glass type="warning" />
      <ShadcnSwitch v-model="switchValue4" glass type="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const switchValue1 = ref(true)
const switchValue2 = ref(false)
const switchValue3 = ref(true)
const switchValue4 = ref(false)
</script>
