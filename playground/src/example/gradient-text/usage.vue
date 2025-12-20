<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <div class="space-y-2">
        <div>
          <ShadcnGradientText>This is a gradient text</ShadcnGradientText>
        </div>
        <div>
          <ShadcnGradientText from="red" to="blue" :deg="200">This is a gradient text</ShadcnGradientText>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">双色渐变</h3>
      <div class="space-y-2">
        <div>
          <ShadcnGradientText from="#FF6B6B" to="#4ECDC4" :deg="90">红色到青色渐变</ShadcnGradientText>
        </div>
        <div>
          <ShadcnGradientText from="#FFD93D" to="#FF6B9D" :deg="45">金色到粉色渐变</ShadcnGradientText>
        </div>
        <div>
          <ShadcnGradientText from="#667eea" to="#764ba2" :deg="135">紫罗兰渐变</ShadcnGradientText>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">多色渐变 (options)</h3>
      <div class="space-y-2">
        <div>
          <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%">红蓝分界渐变</ShadcnGradientText>
        </div>
        <div>
          <ShadcnGradientText options="90deg, #667eea 0%, #764ba2 50%, #f093fb 100%">三色渐变文本</ShadcnGradientText>
        </div>
        <div>
          <ShadcnGradientText options="135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%">五色渐变文本</ShadcnGradientText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnGradientText } from '@/ui/text'
</script>
