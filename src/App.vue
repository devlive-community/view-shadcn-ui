<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 mt-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnMessage - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-400 to-purple-400']">
          <div :class="['p-8 rounded-lg space-y-4', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <ShadcnButton @click="showMessage" :dark="isDark">显示液态玻璃消息</ShadcnButton>
            <ShadcnMessage v-if="messageVisible" glass :dark="isDark" type="success" content="液态玻璃效果消息" show-icon :duration="0" closable />
          </div>
        </div>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnDrawer - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']">
          <div :class="['p-8 rounded-lg space-y-4', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <ShadcnButton @click="showDrawer = true" :dark="isDark">打开液态玻璃抽屉</ShadcnButton>
            <ShadcnDrawer v-model="showDrawer" glass :dark="isDark" title="液态玻璃效果抽屉" width="400px">
              <div class="space-y-4">
                <p>这是一个带有液态玻璃效果的抽屉组件。</p>
                <p>背景具有模糊和半透明特性，同时保持良好的可读性。</p>
                <div class="space-y-2">
                  <ShadcnProgress :model-value="75" glass :dark="isDark" status="success" show-label/>
                  <ShadcnProgress :model-value="45" glass :dark="isDark" status="warning" show-label/>
                </div>
              </div>
              <template #footer>
                <div class="flex gap-2 justify-end">
                  <ShadcnButton @click="showDrawer = false" glass :dark="isDark">关闭</ShadcnButton>
                  <ShadcnButton type="primary" @click="showDrawer = false" glass :dark="isDark">确定</ShadcnButton>
                </div>
              </template>
            </ShadcnDrawer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnProgress } from "@/ui/progress";
import { ShadcnDrawer } from "@/ui/drawer";
import { ShadcnMessage } from "@/ui/message";

const isDark = ref(false)
const showDrawer = ref(false)
const messageVisible = ref(false)

const showMessage = () => {
  messageVisible.value = true
}
</script>