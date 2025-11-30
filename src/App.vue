<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnContextMenu</h3>
        <ShadcnContextMenu v-model="contextMenuVisible" :dark="isDark">
          <template #trigger>
            <div :class="['border-2 border-dashed rounded-lg p-8 text-center cursor-pointer',
                          isDark ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-500'
            ]">
              右键点击这里
            </div>
          </template>
          <ShadcnContextMenuItem @on-click="handleMenuClick('复制')">复制</ShadcnContextMenuItem>
          <ShadcnContextMenuItem @on-click="handleMenuClick('粘贴')">粘贴</ShadcnContextMenuItem>
          <ShadcnContextMenuSub label="更多选项">
            <ShadcnContextMenuItem @on-click="handleMenuClick('选项1')">选项1</ShadcnContextMenuItem>
            <ShadcnContextMenuItem @on-click="handleMenuClick('选项2')">选项2</ShadcnContextMenuItem>
          </ShadcnContextMenuSub>
        </ShadcnContextMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnContextMenu, ShadcnContextMenuItem, ShadcnContextMenuSub } from "@/ui/contextmenu";

const isDark = ref(false)
const contextMenuVisible = ref(false)

const handleMenuClick = (action: string) => {
  console.log('点击了:', action)
}
</script>