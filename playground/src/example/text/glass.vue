<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="p-8 rounded-lg bg-white/50">
          <div class="space-y-4">
            <div>
              <h4 class="text-base font-semibold mb-2 text-gray-800">标题样式</h4>
              <div class="space-y-2">
                <ShadcnText type="h3" background glass>这是一个H3标题</ShadcnText>
                <br/>
                <ShadcnText type="h5" background glass>这是一个H5标题</ShadcnText>
              </div>
            </div>
            <div>
              <h4 class="text-base font-semibold mb-2 text-gray-800">文本样式</h4>
              <div class="space-y-2">
                <ShadcnText background glass strong>加粗文本</ShadcnText>
                <br/>
                <ShadcnText background glass italic>斜体文本</ShadcnText>
                <br/>
                <ShadcnText background glass underline>下划线文本</ShadcnText>
              </div>
            </div>
            <div>
              <h4 class="text-base font-semibold mb-2 text-gray-800">颜色类型</h4>
              <div class="space-y-2">
                <ShadcnText background glass colorType="primary">主要颜色</ShadcnText>
                <br/>
                <ShadcnText background glass colorType="success">成功颜色</ShadcnText>
                <br/>
                <ShadcnText background glass colorType="warning">警告颜色</ShadcnText>
                <br/>
                <ShadcnText background glass colorType="error">错误颜色</ShadcnText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-purple-900 to-pink-900">
          <div class="p-8 rounded-lg bg-gray-800/50">
            <div class="space-y-4">
              <div>
                <h4 class="text-base font-semibold mb-2 text-gray-200">标题样式</h4>
                <div class="space-y-2">
                  <ShadcnText type="h3" background glass dark>这是一个H3标题</ShadcnText>
                  <br/>
                  <ShadcnText type="h5" background glass dark>这是一个H5标题</ShadcnText>
                </div>
              </div>
              <div>
                <h4 class="text-base font-semibold mb-2 text-gray-200">文本样式</h4>
                <div class="space-y-2">
                  <ShadcnText background glass dark strong>加粗文本</ShadcnText>
                  <br/>
                  <ShadcnText background glass dark italic>斜体文本</ShadcnText>
                  <br/>
                  <ShadcnText background glass dark underline>下划线文本</ShadcnText>
                </div>
              </div>
              <div>
                <h4 class="text-base font-semibold mb-2 text-gray-200">颜色类型</h4>
                <div class="space-y-2">
                  <ShadcnText background glass dark colorType="primary">主要颜色</ShadcnText>
                  <br/>
                  <ShadcnText background glass dark colorType="success">成功颜色</ShadcnText>
                  <br/>
                  <ShadcnText background glass dark colorType="warning">警告颜色</ShadcnText>
                  <br/>
                  <ShadcnText background glass dark colorType="error">错误颜色</ShadcnText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnText } from '@/ui/text'
</script>
