<template>
  <div class="relative h-96 overflow-y-auto rounded-lg border bg-gradient-to-b from-indigo-400 to-purple-400">
    <div class="p-8">
      <div v-for="n in 20" :key="n" class="mb-8 p-4 rounded bg-white/50">
        <h2 class="text-xl font-bold mb-2 text-gray-900">Section {{ n }}</h2>
        <p class="text-gray-700">这是测试内容。向下滚动查看液态玻璃效果的返回顶部按钮。</p>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <ShadcnBackTop glass />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
