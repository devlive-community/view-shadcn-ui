<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    <ShadcnSpace>
      <ShadcnButton @click="widthValue = !widthValue">Width</ShadcnButton>
      <ShadcnButton @click="heightValue = !heightValue">Height</ShadcnButton>
    </ShadcnSpace>
    <ShadcnDrawer v-model="widthValue" title="Width"/>
    <ShadcnDrawer v-model="heightValue" title="Height" position="bottom" height="400"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const widthValue = ref(false)
const heightValue = ref(false)
</script>
