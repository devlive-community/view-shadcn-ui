<template>
  <div :class="['min-h-screen pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <div class="p-6">
      <ShadcnButton @click="isDark = !isDark" :dark="isDark">
        切换暗黑模式
      </ShadcnButton>

      <div class="space-y-6 my-6">
        <div>
          <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnToolbarFooter - 液态玻璃效果</h3>
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']">
            <div :class="['rounded-lg relative h-48', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
              <div :class="['p-4', isDark ? 'text-gray-300' : 'text-gray-700']">
                <p class="text-sm">滚动页面查看工具栏页脚的液态玻璃效果</p>
                <p class="text-sm mt-2">点击页面底部的按钮与工具栏交互</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ShadcnToolbarFooter
      v-model="showToolbar"
      glass
      :dark="isDark"
      :hide-on-scroll="false"
    >
      <template #left>
        <span :class="['text-sm', isDark ? 'text-gray-300' : 'text-gray-700']">液态玻璃效果工具栏</span>
      </template>
    </ShadcnToolbarFooter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnToolbarFooter } from "@/ui/footer";

const isDark = ref(false)
const showToolbar = ref(true)
</script>