<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnContextMenu - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
            <ShadcnContextMenu v-model="contextMenuOpen" glass :dark="isDark">
              <template #trigger>
                <div :class="['p-8 text-center rounded-md border-2 border-dashed cursor-pointer', isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300']">
                  右键点击此区域
                </div>
              </template>
              <ShadcnContextMenuItem>菜单项 1</ShadcnContextMenuItem>
              <ShadcnContextMenuItem>菜单项 2</ShadcnContextMenuItem>
              <ShadcnContextMenuSub label="子菜单">
                <ShadcnContextMenuItem>子菜单项 1</ShadcnContextMenuItem>
                <ShadcnContextMenuItem>子菜单项 2</ShadcnContextMenuItem>
              </ShadcnContextMenuSub>
              <ShadcnContextMenuItem>菜单项 3</ShadcnContextMenuItem>
            </ShadcnContextMenu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnContextMenu, ShadcnContextMenuItem, ShadcnContextMenuSub } from "@/ui/contextmenu";

const isDark = ref(false)
const contextMenuOpen = ref(false)
</script>