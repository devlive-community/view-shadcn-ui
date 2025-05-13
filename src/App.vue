<template>
  <div class="p-6">
    <h2 class="text-lg font-semibold mb-4">ShadcnTime 基础示例</h2>

    <div class="space-y-4">
      <div>
        <p class="text-sm text-gray-500 mb-1">默认格式:</p>
        <ShadcnTime/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">自定义格式 (仅时分):</p>
        <ShadcnTime format="HH:mm"/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">12小时制:</p>
        <ShadcnTime format="hh:mm:ss A"/>
      </div>

      <div>
        <p class="text-sm text-gray-500 mb-1">带日期:</p>
        <ShadcnTime format="YYYY-MM-DD HH:mm:ss"/>
      </div>

      <div v-if="lastChangeTime">
        <p class="text-sm text-gray-500 mb-1">上次时间变化:</p>
        <div class="text-sm">{{ lastChangeTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const lastChangeTime = ref('')
</script>