<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <div class="space-y-2">
        <p>
          <ShadcnHighlight
            text="Vue 3 is an awesome framework for building user interfaces"
            highlight="Vue 3"/>
        </p>
        <p>
          <ShadcnHighlight
            text="The quick brown fox jumps over the lazy dog"
            highlight="quick"/>
        </p>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">多关键词高亮</h3>
      <p>
        <ShadcnHighlight
          text="Vue 3 is an awesome framework for building user interfaces"
          :highlight="['Vue 3', 'awesome', 'framework']"/>
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">区分大小写</h3>
      <div class="space-y-2">
        <p>
          <ShadcnHighlight
            text="The quick brown fox jumps over the lazy dog"
            highlight="the"/>
          <span class="text-gray-500 text-sm ml-2">(不区分大小写)</span>
        </p>
        <p>
          <ShadcnHighlight
            text="The quick brown fox jumps over the lazy dog"
            highlight="the"
            case-sensitive/>
          <span class="text-gray-500 text-sm ml-2">(区分大小写)</span>
        </p>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">中文示例</h3>
      <div class="space-y-2">
        <p>
          <ShadcnHighlight
            text="Vue 3 组件库提供了丰富的组件和功能"
            :highlight="['Vue 3', '组件库']"/>
        </p>
        <p>
          <ShadcnHighlight
            text="这是一个支持文本高亮显示的组件示例"
            :highlight="['文本高亮', '组件']"/>
        </p>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg space-y-2">
        <p class="text-gray-300">
          <ShadcnHighlight
            text="Vue 3 is an awesome framework for building user interfaces"
            :highlight="['Vue 3', 'awesome']"
            dark/>
        </p>
        <p class="text-gray-300">
          <ShadcnHighlight
            text="暗黑模式下的文本高亮显示效果"
            :highlight="['暗黑模式', '高亮']"
            dark/>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnHighlight } from '@/ui/highlight'
</script>
