<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnLayout</h3>
        <div :class="['rounded-lg border', isDark ? 'border-gray-600' : 'border-gray-200']" style="height: 600px;">
          <ShadcnLayout :dark="isDark" style="height: 100%;">
            <ShadcnLayoutHeader style="height: 64px; display: flex; align-items: center; padding: 0 24px;">
              <div :class="['text-xl font-semibold', isDark ? 'text-gray-100' : 'text-gray-900']">
                Layout Header
              </div>
            </ShadcnLayoutHeader>
            <div class="flex flex-1" style="height: calc(100% - 128px);">
              <ShadcnLayoutSider :collapsible="true" :trigger="true">
                <div class="py-4">
                  <div v-for="i in 5" :key="i" :class="['px-4 py-2 cursor-pointer', isDark ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100']">
                    菜单项 {{ i }}
                  </div>
                </div>
              </ShadcnLayoutSider>
              <ShadcnLayoutContent style="padding: 24px;">
                <div :class="['h-full rounded', isDark ? 'bg-gray-800 text-gray-100' : 'bg-gray-50']" style="padding: 24px;">
                  <h4 :class="['text-lg font-medium mb-4', isDark ? 'text-gray-100' : 'text-gray-900']">Content Area</h4>
                  <p :class="[isDark ? 'text-gray-300' : 'text-gray-600']">
                    这是主内容区域，可以放置任何内容。左侧的侧边栏可以通过点击箭头按钮进行收起和展开。
                  </p>
                </div>
              </ShadcnLayoutContent>
            </div>
            <ShadcnLayoutFooter style="height: 64px; display: flex; align-items: center; justify-content: center;">
              <div :class="[isDark ? 'text-gray-400' : 'text-gray-600']">
                Layout Footer © 2024
              </div>
            </ShadcnLayoutFooter>
          </ShadcnLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnLayout, ShadcnLayoutContent, ShadcnLayoutFooter, ShadcnLayoutHeader, ShadcnLayoutSider } from "@/ui/layout";

const isDark = ref(false)
</script>