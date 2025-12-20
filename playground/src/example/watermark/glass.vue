<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400">
        <ShadcnWatermark
          :content="['液态玻璃水印', 'Glass Effect']"
          glass
          :fontSize="12"
          :gapX="150"
          :gapY="150">
          <div class="bg-white/50 rounded-lg p-8 text-center" style="min-height: 24rem;">
            <h4 class="text-2xl font-bold mb-4 text-gray-800">带水印的内容区域</h4>
            <p class="text-gray-600">这是一个带有液态玻璃效果的水印示例</p>
            <p class="text-gray-600">水印会在整个内容区域重复显示</p>
            <p class="text-gray-600 mt-4">背景具有模糊和饱和度增强的玻璃效果</p>
          </div>
        </ShadcnWatermark>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-cyan-900 to-blue-900">
        <ShadcnWatermark
          :content="['液态玻璃水印', 'Glass Effect']"
          glass
          dark
          :fontSize="12"
          :gapX="150"
          :gapY="150">
          <div class="bg-gray-800/50 rounded-lg p-8 text-center" style="min-height: 24rem;">
            <h4 class="text-2xl font-bold mb-4 text-gray-100">暗黑模式水印</h4>
            <p class="text-gray-300">暗黑模式下的液态玻璃水印效果</p>
            <p class="text-gray-300">水印颜色自动适配暗黑主题</p>
            <p class="text-gray-300 mt-4">提供更好的视觉对比度</p>
          </div>
        </ShadcnWatermark>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">多行文本水印</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <ShadcnWatermark
          :content="['Company Name', 'Internal Use Only', '2024']"
          glass
          :fontSize="10"
          :gapX="180"
          :gapY="180">
          <div class="bg-white/50 rounded-lg p-8" style="min-height: 24rem;">
            <h4 class="text-xl font-bold mb-4 text-gray-800">内部文档</h4>
            <p class="text-gray-700 mb-2">此文档仅供内部使用</p>
            <p class="text-gray-700 mb-2">包含公司机密信息</p>
            <p class="text-gray-700">请勿外传</p>
          </div>
        </ShadcnWatermark>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义间距和角度</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <ShadcnWatermark
          :content="['Custom Style']"
          glass
          :fontSize="14"
          :rotate="-30"
          :gapX="250"
          :gapY="200">
          <div class="bg-white/50 rounded-lg p-8" style="min-height: 24rem;">
            <h4 class="text-xl font-bold mb-4 text-gray-800">自定义水印样式</h4>
            <p class="text-gray-700">更大的间距和不同的旋转角度</p>
            <p class="text-gray-700">可以根据需求调整水印的视觉效果</p>
          </div>
        </ShadcnWatermark>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">全屏玻璃水印</h3>
      <ShadcnButton @click="showFullscreenGlass = !showFullscreenGlass">
        {{ showFullscreenGlass ? '关闭' : '开启' }}全屏玻璃水印
      </ShadcnButton>
      <ShadcnWatermark
        v-if="showFullscreenGlass"
        :content="['全屏液态玻璃', 'Fullscreen Glass']"
        glass
        fullscreen
        :fontSize="14"
        :gapX="200"
        :gapY="200"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnWatermark } from '@/ui/watermark'
import { ShadcnButton } from '@/ui/button'

const showFullscreenGlass = ref(false)
</script>
