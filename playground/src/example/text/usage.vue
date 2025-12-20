<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <div class="space-y-2">
        <div>
          <ShadcnText colorType="default">Default</ShadcnText>
        </div>
        <div>
          <ShadcnText colorType="primary">Primary</ShadcnText>
        </div>
        <div>
          <ShadcnText colorType="success">Success</ShadcnText>
        </div>
        <div>
          <ShadcnText colorType="warning">Warning</ShadcnText>
        </div>
        <div>
          <ShadcnText colorType="error">Error</ShadcnText>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">文本样式</h3>
      <div class="space-y-2">
        <div>
          <ShadcnText strong>加粗文本</ShadcnText>
        </div>
        <div>
          <ShadcnText italic>斜体文本</ShadcnText>
        </div>
        <div>
          <ShadcnText underline>下划线文本</ShadcnText>
        </div>
        <div>
          <ShadcnText deleted>删除线文本</ShadcnText>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">文本类型</h3>
      <div class="space-y-2">
        <div>
          <ShadcnText type="h1">H1 标题</ShadcnText>
        </div>
        <div>
          <ShadcnText type="h3">H3 标题</ShadcnText>
        </div>
        <div>
          <ShadcnText type="h5">H5 标题</ShadcnText>
        </div>
        <div>
          <ShadcnText type="p">段落文本</ShadcnText>
        </div>
        <div>
          <ShadcnText type="small">小号文本</ShadcnText>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义颜色</h3>
      <div class="space-y-2">
        <div>
          <ShadcnText color="#18A058">#18A058</ShadcnText>
        </div>
        <div>
          <ShadcnText color="#F59E0B">#F59E0B</ShadcnText>
        </div>
        <div>
          <ShadcnText color="#EF4444">#EF4444</ShadcnText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnText } from '@/ui/text'
</script>
