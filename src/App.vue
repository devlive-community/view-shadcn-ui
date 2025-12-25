<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnDivider - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-teal-900 to-cyan-900' : 'bg-gradient-to-r from-teal-400 to-cyan-400']">
          <div :class="['p-8 rounded-lg', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <div class="space-y-6">
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">基础分割线</h4>
                <ShadcnDivider glass :dark="isDark"/>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">带文字分割线</h4>
                <ShadcnDivider text="文本内容" glass :dark="isDark"/>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">不同位置</h4>
                <div class="space-y-3">
                  <ShadcnDivider text="左侧文本" orientation="left" glass :dark="isDark"/>
                  <ShadcnDivider text="居中文本" orientation="center" glass :dark="isDark"/>
                  <ShadcnDivider text="右侧文本" orientation="right" glass :dark="isDark"/>
                </div>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">虚线样式</h4>
                <ShadcnDivider text="虚线分割" dashed glass :dark="isDark"/>
              </div>
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
import { ShadcnDivider } from "@/ui/divider";

const isDark = ref(false)
</script>