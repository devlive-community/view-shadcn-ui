<template>
  <div class="w-44 bg-white rounded-lg p-2">
    <div class="space-y-2">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const activeKey = ref<string | null>(null)

provide('menuContext', {
  activeKey,
  setActiveKey: (key: string) => {
    activeKey.value = key
  }
})
</script>
