<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">IP地址输入组件示例</h2>

    <div class="mb-6 space-y-3">
      <ShadcnIPInput v-model="ipAddress" size="small"/>
      <ShadcnIPInput v-model="ipAddress" size="default"/>
      <ShadcnIPInput v-model="ipAddress" size="large"/>
      <p class="mt-2">当前IP地址: {{ ipAddress }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const ipAddress = ref('192.168.1.1')
</script>