<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnDrawer</h3>
        <div :class="['p-4 rounded-lg border', isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white']">
          <ShadcnButton @click="showDrawer = true" :dark="isDark">打开抽屉</ShadcnButton>
          <ShadcnDrawer v-model="showDrawer" title="抽屉标题" :dark="isDark">
            <p>这是抽屉内容区域</p>
            <p>支持暗黑模式</p>
            <template #footer>
              <div class="flex justify-end gap-2">
                <ShadcnButton @click="showDrawer = false" :dark="isDark">关闭</ShadcnButton>
              </div>
            </template>
          </ShadcnDrawer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnDrawer } from "@/ui/drawer";

const isDark = ref(false)
const showDrawer = ref(false)
</script>