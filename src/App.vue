<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnTooltip - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-cyan-900 to-blue-900' : 'bg-gradient-to-r from-cyan-400 to-blue-400']">
          <div :class="['p-8 rounded-lg space-y-6', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <div class="flex gap-4 items-center flex-wrap">
              <ShadcnTooltip glass :dark="isDark" content="这是液态玻璃效果的提示框" position="top">
                <ShadcnButton :dark="isDark">上方提示</ShadcnButton>
              </ShadcnTooltip>
              <ShadcnTooltip glass :dark="isDark" content="这是液态玻璃效果的提示框" position="bottom">
                <ShadcnButton :dark="isDark">下方提示</ShadcnButton>
              </ShadcnTooltip>
              <ShadcnTooltip glass :dark="isDark" content="这是液态玻璃效果的提示框" position="left">
                <ShadcnButton :dark="isDark">左侧提示</ShadcnButton>
              </ShadcnTooltip>
              <ShadcnTooltip glass :dark="isDark" content="这是液态玻璃效果的提示框" position="right">
                <ShadcnButton :dark="isDark">右侧提示</ShadcnButton>
              </ShadcnTooltip>
            </div>
            <div class="flex gap-4 items-center">
              <ShadcnTooltip glass :dark="isDark" content="带箭头的液态玻璃效果提示框" arrow>
                <ShadcnButton :dark="isDark">带箭头提示</ShadcnButton>
              </ShadcnTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnTooltip } from "@/ui/tooltip";

const isDark = ref(false)
</script>