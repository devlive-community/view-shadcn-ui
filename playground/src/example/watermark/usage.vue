<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <ShadcnWatermark>
        <div class="bg-gray-100 rounded-lg p-8" style="min-height: 24rem;">
          <p class="text-gray-600">这是一个带默认水印的内容区域</p>
        </div>
      </ShadcnWatermark>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义文本</h3>
      <ShadcnWatermark :content="['保密文档', 'Confidential']">
        <div class="bg-blue-50 rounded-lg p-8" style="min-height: 24rem;">
          <h4 class="text-xl font-bold mb-4">机密文档</h4>
          <p class="text-gray-700">此文档包含敏感信息，请妥善保管</p>
        </div>
      </ShadcnWatermark>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义样式</h3>
      <ShadcnWatermark
        :content="['Custom Watermark']"
        :fontSize="16"
        :rotate="-15"
        :gapX="200"
        :gapY="150"
        fontColor="rgba(255, 0, 0, 0.2)">
        <div class="bg-yellow-50 rounded-lg p-8" style="min-height: 24rem;">
          <p class="text-gray-700">自定义字体大小、间距、颜色和旋转角度</p>
        </div>
      </ShadcnWatermark>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="bg-gray-900 rounded-lg p-6">
        <ShadcnWatermark :content="['Dark Mode']" dark>
          <div class="bg-gray-800 rounded-lg p-8" style="min-height: 24rem;">
            <p class="text-gray-300">暗黑模式下的水印</p>
          </div>
        </ShadcnWatermark>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">全屏水印</h3>
      <ShadcnButton @click="showFullscreen = !showFullscreen">
        {{ showFullscreen ? '关闭' : '开启' }}全屏水印
      </ShadcnButton>
      <ShadcnWatermark
        v-if="showFullscreen"
        :content="['全屏水印', 'Fullscreen']"
        fullscreen/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnWatermark } from '@/ui/watermark'
import { ShadcnButton } from '@/ui/button'

const showFullscreen = ref(false)
</script>
