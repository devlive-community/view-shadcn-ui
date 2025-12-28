<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <div class="p-8 rounded-lg bg-white/50 space-y-4">
          <div class="flex gap-4 flex-wrap">
            <ShadcnButton @click="rightDrawer = true">右侧抽屉</ShadcnButton>
            <ShadcnButton @click="leftDrawer = true">左侧抽屉</ShadcnButton>
            <ShadcnButton @click="topDrawer = true">顶部抽屉</ShadcnButton>
            <ShadcnButton @click="bottomDrawer = true">底部抽屉</ShadcnButton>
          </div>

          <ShadcnDrawer v-model="rightDrawer" glass title="右侧液态玻璃抽屉" position="right" width="400px">
            <div class="space-y-4">
              <p class="text-sm text-gray-700">
                这是一个带有液态玻璃效果的右侧抽屉组件。
              </p>
              <p class="text-sm text-gray-700">
                背景具有模糊和半透明特性，同时保持良好的可读性。
              </p>
              <div class="space-y-2">
                <ShadcnProgress :model-value="75" glass status="success" show-label />
                <ShadcnProgress :model-value="45" glass status="warning" show-label />
              </div>
            </div>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <ShadcnButton @click="rightDrawer = false">关闭</ShadcnButton>
                <ShadcnButton type="primary" @click="rightDrawer = false">确定</ShadcnButton>
              </div>
            </template>
          </ShadcnDrawer>

          <ShadcnDrawer v-model="leftDrawer" glass title="左侧液态玻璃抽屉" position="left" width="400px">
            <div class="space-y-4">
              <p class="text-sm text-gray-700">左侧抽屉内容</p>
            </div>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <ShadcnButton @click="leftDrawer = false">关闭</ShadcnButton>
              </div>
            </template>
          </ShadcnDrawer>

          <ShadcnDrawer v-model="topDrawer" glass title="顶部液态玻璃抽屉" position="top" height="300px">
            <div class="space-y-4">
              <p class="text-sm text-gray-700">顶部抽屉内容</p>
            </div>
          </ShadcnDrawer>

          <ShadcnDrawer v-model="bottomDrawer" glass title="底部液态玻璃抽屉" position="bottom" height="300px">
            <div class="space-y-4">
              <p class="text-sm text-gray-700">底部抽屉内容</p>
            </div>
          </ShadcnDrawer>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-green-900 to-teal-900">
          <div class="p-8 rounded-lg bg-gray-800/50 space-y-4">
            <div class="flex gap-4 flex-wrap">
              <ShadcnButton @click="darkRightDrawer = true" dark>右侧抽屉</ShadcnButton>
              <ShadcnButton @click="darkLeftDrawer = true" dark>左侧抽屉</ShadcnButton>
              <ShadcnButton @click="darkTopDrawer = true" dark>顶部抽屉</ShadcnButton>
              <ShadcnButton @click="darkBottomDrawer = true" dark>底部抽屉</ShadcnButton>
            </div>

            <ShadcnDrawer v-model="darkRightDrawer" glass dark title="右侧液态玻璃抽屉" position="right" width="400px">
              <div class="space-y-4">
                <p class="text-sm text-gray-300">
                  这是一个带有液态玻璃效果的右侧抽屉组件（暗黑模式）。
                </p>
                <p class="text-sm text-gray-300">
                  背景具有模糊和半透明特性，同时保持良好的可读性。
                </p>
                <div class="space-y-2">
                  <ShadcnProgress :model-value="75" glass dark status="success" show-label />
                  <ShadcnProgress :model-value="45" glass dark status="warning" show-label />
                </div>
              </div>
              <template #footer>
                <div class="flex gap-2 justify-end">
                  <ShadcnButton @click="darkRightDrawer = false" dark>关闭</ShadcnButton>
                  <ShadcnButton type="primary" @click="darkRightDrawer = false" dark>确定</ShadcnButton>
                </div>
              </template>
            </ShadcnDrawer>

            <ShadcnDrawer v-model="darkLeftDrawer" glass dark title="左侧液态玻璃抽屉" position="left" width="400px">
              <div class="space-y-4">
                <p class="text-sm text-gray-300">左侧抽屉内容</p>
              </div>
              <template #footer>
                <div class="flex gap-2 justify-end">
                  <ShadcnButton @click="darkLeftDrawer = false" dark>关闭</ShadcnButton>
                </div>
              </template>
            </ShadcnDrawer>

            <ShadcnDrawer v-model="darkTopDrawer" glass dark title="顶部液态玻璃抽屉" position="top" height="300px">
              <div class="space-y-4">
                <p class="text-sm text-gray-300">顶部抽屉内容</p>
              </div>
            </ShadcnDrawer>

            <ShadcnDrawer v-model="darkBottomDrawer" glass dark title="底部液态玻璃抽屉" position="bottom" height="300px">
              <div class="space-y-4">
                <p class="text-sm text-gray-300">底部抽屉内容</p>
              </div>
            </ShadcnDrawer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnDrawer } from '@/ui/drawer'
import { ShadcnButton } from '@/ui/button'
import { ShadcnProgress } from '@/ui/progress'

const rightDrawer = ref(false)
const leftDrawer = ref(false)
const topDrawer = ref(false)
const bottomDrawer = ref(false)

const darkRightDrawer = ref(false)
const darkLeftDrawer = ref(false)
const darkTopDrawer = ref(false)
const darkBottomDrawer = ref(false)
</script>
