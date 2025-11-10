<template>
  <div :class="[isDark ? 'bg-gray-900' : 'bg-white']">
    <div class="fixed top-0 left-0 right-0 p-4 z-10" :class="[isDark ? 'bg-gray-800' : 'bg-gray-100']">
      <button @click="isDark = !isDark"
              class="px-4 py-2 rounded bg-blue-500 text-white">
        切换暗黑模式
      </button>
    </div>

    <div class="pt-20 px-8 space-y-4">
      <div v-for="i in 50" :key="i"
           :class="['p-4 rounded', isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-900']">
        第 {{ i }} 段内容 - 向下滚动查看 BackTop 按钮
      </div>
    </div>

    <ShadcnBackTop :dark="isDark"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
</script>