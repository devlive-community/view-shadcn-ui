<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">IP地址输入组件示例</h2>

    <div class="mb-6">
      <p class="mb-2">基本用法：</p>
      <ShadcnIPInput v-model="ipAddress" @on-change="handleChange"/>
      <p class="mt-2">当前IP地址: {{ ipAddress }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const ipAddress = ref('192.168.1.1')

const handleChange = (value: string) => {
  console.log('IP地址已变更:', value)
}
</script>