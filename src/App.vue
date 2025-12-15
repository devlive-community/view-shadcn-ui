<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnAlert - 液态玻璃效果</h3>
        <div class="space-y-4">
          <div class="relative">
            <div :class="['h-32 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-400 to-purple-400']"></div>
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <ShadcnAlert title="液态玻璃效果提示" glass :dark="isDark" show-icon type="primary">
                这是一个使用液态玻璃效果的 Alert 组件，通过半透明背景和背景模糊创建现代化的视觉效果。
              </ShadcnAlert>
            </div>
          </div>

          <div class="relative">
            <div :class="['h-32 rounded-lg', isDark ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']"></div>
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <ShadcnAlert title="成功提示" glass :dark="isDark" show-icon type="success" closable>
                操作已成功完成！液态玻璃效果让提示框更加优雅。
              </ShadcnAlert>
            </div>
          </div>

          <div class="relative">
            <div :class="['h-32 rounded-lg', isDark ? 'bg-gradient-to-r from-yellow-900 to-orange-900' : 'bg-gradient-to-r from-yellow-400 to-orange-400']"></div>
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <ShadcnAlert title="警告提示" glass :dark="isDark" show-icon type="warning">
                请注意：液态玻璃效果在彩色背景上表现最佳。
              </ShadcnAlert>
            </div>
          </div>

          <div class="relative">
            <div :class="['h-32 rounded-lg', isDark ? 'bg-gradient-to-r from-red-900 to-pink-900' : 'bg-gradient-to-r from-red-400 to-pink-400']"></div>
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <ShadcnAlert title="错误提示" glass :dark="isDark" show-icon type="error" closable>
                发生错误！液态玻璃效果同样适用于错误提示。
              </ShadcnAlert>
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
import { ShadcnAlert } from "@/ui/alert";

const isDark = ref(false)
</script>