<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <div class="rounded-lg relative h-64 overflow-hidden bg-white/50">
          <div class="p-4 text-gray-700">
            <p class="text-sm font-medium">液态玻璃效果工具栏</p>
            <p class="text-sm mt-2">底部显示带有玻璃效果的工具栏</p>
            <p class="text-sm mt-2">点击按钮可以关闭或确认</p>
          </div>
          <ShadcnToolbarFooter glass :hide-on-scroll="false">
            <template #left>
              <span class="text-sm">液态玻璃效果工具栏</span>
            </template>
          </ShadcnToolbarFooter>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-green-900 to-teal-900">
          <div class="rounded-lg relative h-64 overflow-hidden bg-gray-800/50">
            <div class="p-4 text-gray-300">
              <p class="text-sm font-medium">液态玻璃效果工具栏（暗黑模式）</p>
              <p class="text-sm mt-2">底部显示带有玻璃效果的工具栏</p>
              <p class="text-sm mt-2">点击按钮可以关闭或确认</p>
            </div>
            <ShadcnToolbarFooter glass dark :hide-on-scroll="false">
              <template #left>
                <span class="text-sm">液态玻璃效果工具栏</span>
              </template>
            </ShadcnToolbarFooter>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnToolbarFooter } from '@/ui/footer'
</script>
