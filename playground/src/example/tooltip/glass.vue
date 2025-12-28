<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400">
        <div class="p-8 rounded-lg space-y-6 bg-white/50">
          <div>
            <h4 class="text-base font-semibold mb-3 text-gray-800">不同位置</h4>
            <div class="flex gap-4 items-center flex-wrap">
              <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="top">
                <ShadcnButton>上方提示</ShadcnButton>
              </ShadcnTooltip>
              <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="bottom">
                <ShadcnButton>下方提示</ShadcnButton>
              </ShadcnTooltip>
              <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="left">
                <ShadcnButton>左侧提示</ShadcnButton>
              </ShadcnTooltip>
              <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="right">
                <ShadcnButton>右侧提示</ShadcnButton>
              </ShadcnTooltip>
            </div>
          </div>
          <div>
            <h4 class="text-base font-semibold mb-3 text-gray-800">带箭头</h4>
            <div class="flex gap-4 items-center">
              <ShadcnTooltip glass content="带箭头的液态玻璃效果提示框" arrow>
                <ShadcnButton>带箭头提示</ShadcnButton>
              </ShadcnTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-cyan-900 to-blue-900">
          <div class="p-8 rounded-lg space-y-6 bg-gray-800/50">
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-200">不同位置</h4>
              <div class="flex gap-4 items-center flex-wrap">
                <ShadcnTooltip glass dark content="这是液态玻璃效果的提示框" position="top">
                  <ShadcnButton dark>上方提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass dark content="这是液态玻璃效果的提示框" position="bottom">
                  <ShadcnButton dark>下方提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass dark content="这是液态玻璃效果的提示框" position="left">
                  <ShadcnButton dark>左侧提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass dark content="这是液态玻璃效果的提示框" position="right">
                  <ShadcnButton dark>右侧提示</ShadcnButton>
                </ShadcnTooltip>
              </div>
            </div>
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-200">带箭头</h4>
              <div class="flex gap-4 items-center">
                <ShadcnTooltip glass dark content="带箭头的液态玻璃效果提示框" arrow>
                  <ShadcnButton dark>带箭头提示</ShadcnButton>
                </ShadcnTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnButton } from '@/ui/button'
import { ShadcnTooltip } from '@/ui/tooltip'
</script>
