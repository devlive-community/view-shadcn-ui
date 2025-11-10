<template>
  <div :class="['p-8', isDark ? 'bg-gray-900' : 'bg-gray-50']">
    <button @click="isDark = !isDark"
            class="mb-6 px-4 py-2 rounded bg-blue-500 text-white">
      切换暗黑模式
    </button>

    <div class="flex gap-8 items-center">
      <ShadcnTooltip content="顶部提示" position="top" :dark="isDark" arrow>
        <button class="px-4 py-2 bg-blue-500 text-white rounded">顶部</button>
      </ShadcnTooltip>

      <ShadcnTooltip content="底部提示" position="bottom" :dark="isDark" arrow>
        <button class="px-4 py-2 bg-green-500 text-white rounded">底部</button>
      </ShadcnTooltip>

      <ShadcnTooltip content="左侧提示" position="left" :dark="isDark" arrow>
        <button class="px-4 py-2 bg-yellow-500 text-white rounded">左侧</button>
      </ShadcnTooltip>

      <ShadcnTooltip content="右侧提示" position="right" :dark="isDark" arrow>
        <button class="px-4 py-2 bg-red-500 text-white rounded">右侧</button>
      </ShadcnTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
</script>