<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnBackTop - 液态玻璃效果</h3>
        <div id="my-container"
             :class="['relative h-96 overflow-y-auto rounded-lg border', isDark ? 'border-gray-700 bg-gradient-to-b from-indigo-900 to-purple-900' : 'border-gray-200 bg-gradient-to-b from-indigo-400 to-purple-400']">
          <div class="p-8">
            <div v-for="n in 20" :key="n" class="mb-8 p-4 rounded" :class="isDark ? 'bg-gray-800/50' : 'bg-white/50'">
              <h2 :class="['text-xl font-bold mb-2', isDark ? 'text-gray-100' : 'text-gray-900']">Section {{ n }}</h2>
              <p :class="[isDark ? 'text-gray-300' : 'text-gray-700']">这是测试内容。向下滚动查看液态玻璃效果的返回顶部按钮。</p>
              <p :class="[isDark ? 'text-gray-400' : 'text-gray-600']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
          </div>
          <ShadcnBackTop target="#my-container" glass :dark="isDark"/>
        </div>
      </div>
      <ShadcnBackTop glass :dark="isDark"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnBackTop } from "@/ui/back-top";

const isDark = ref(false)
</script>