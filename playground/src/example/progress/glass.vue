<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="p-8 rounded-lg bg-white/50 space-y-6">
          <div class="space-y-4">
            <div>
              <p class="text-sm mb-2 text-gray-700">基础液态玻璃进度条</p>
              <ShadcnProgress v-model="progress" glass />
            </div>
            <div>
              <p class="text-sm mb-2 text-gray-700">带标签</p>
              <ShadcnProgress v-model="progress" glass show-label />
            </div>
            <div>
              <p class="text-sm mb-2 text-gray-700">大尺寸</p>
              <ShadcnProgress v-model="progress" glass size="large" show-label />
            </div>
            <div>
              <p class="text-sm mb-2 text-gray-700">不同状态</p>
              <div class="space-y-3">
                <ShadcnProgress :model-value="75" glass status="success" show-label />
                <ShadcnProgress :model-value="45" glass status="warning" show-label />
                <ShadcnProgress :model-value="30" glass status="error" show-label />
                <ShadcnProgress :model-value="90" glass status="info" show-label />
              </div>
            </div>
            <div class="flex gap-2 mt-4">
              <ShadcnButton @click="decreaseProgress">减少</ShadcnButton>
              <ShadcnButton type="primary" @click="increaseProgress">增加</ShadcnButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-purple-900 to-pink-900">
          <div class="p-8 rounded-lg bg-gray-800/50 space-y-6">
            <div class="space-y-4">
              <div>
                <p class="text-sm mb-2 text-gray-300">基础液态玻璃进度条</p>
                <ShadcnProgress v-model="progress" glass dark />
              </div>
              <div>
                <p class="text-sm mb-2 text-gray-300">带标签</p>
                <ShadcnProgress v-model="progress" glass dark show-label />
              </div>
              <div>
                <p class="text-sm mb-2 text-gray-300">大尺寸</p>
                <ShadcnProgress v-model="progress" glass dark size="large" show-label />
              </div>
              <div>
                <p class="text-sm mb-2 text-gray-300">不同状态</p>
                <div class="space-y-3">
                  <ShadcnProgress :model-value="75" glass dark status="success" show-label />
                  <ShadcnProgress :model-value="45" glass dark status="warning" show-label />
                  <ShadcnProgress :model-value="30" glass dark status="error" show-label />
                  <ShadcnProgress :model-value="90" glass dark status="info" show-label />
                </div>
              </div>
              <div class="flex gap-2 mt-4">
                <ShadcnButton @click="decreaseProgress" dark>减少</ShadcnButton>
                <ShadcnButton type="primary" @click="increaseProgress" dark>增加</ShadcnButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnProgress } from '@/ui/progress'
import { ShadcnButton } from '@/ui/button'

const progress = ref(60)

const increaseProgress = () => {
  progress.value = Math.min(progress.value + 10, 100)
}

const decreaseProgress = () => {
  progress.value = Math.max(progress.value - 10, 0)
}
</script>
