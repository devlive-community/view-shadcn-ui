<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    Default Value : {{defaultValue}}
    <ShadcnButton @click="defaultValue = !defaultValue">Open</ShadcnButton>
    <ShadcnDrawer v-model="defaultValue" title="Default Drawer">
    </ShadcnDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
