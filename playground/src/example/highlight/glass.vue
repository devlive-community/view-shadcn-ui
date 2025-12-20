<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400">
        <div class="p-8 rounded-lg bg-white/50 space-y-4">
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-800">单关键词高亮</h4>
            <p class="text-gray-700">
              <ShadcnHighlight
                text="这是一个支持液态玻璃效果的文本高亮组件示例"
                highlight="液态玻璃"
                glass/>
            </p>
          </div>
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-800">多关键词高亮</h4>
            <p class="text-gray-700">
              <ShadcnHighlight
                text="Vue 3 组件库支持暗黑模式和液态玻璃效果"
                :highlight="['Vue 3', '暗黑模式', '液态玻璃']"
                glass/>
            </p>
          </div>
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-800">英文示例</h4>
            <p class="text-gray-700">
              <ShadcnHighlight
                text="Vue 3 is an awesome framework with glass effect support"
                :highlight="['Vue 3', 'awesome', 'glass effect']"
                glass/>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-amber-900 to-orange-900">
        <div class="p-8 rounded-lg bg-gray-800/50 space-y-4">
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-200">单关键词高亮</h4>
            <p class="text-gray-300">
              <ShadcnHighlight
                text="这是一个支持液态玻璃效果的文本高亮组件示例"
                highlight="液态玻璃"
                glass
                dark/>
            </p>
          </div>
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-200">多关键词高亮</h4>
            <p class="text-gray-300">
              <ShadcnHighlight
                text="Vue 3 组件库支持暗黑模式和液态玻璃效果"
                :highlight="['Vue 3', '暗黑模式', '液态玻璃']"
                glass
                dark/>
            </p>
          </div>
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-200">英文示例</h4>
            <p class="text-gray-300">
              <ShadcnHighlight
                text="Vue 3 is an awesome framework with glass effect support"
                :highlight="['Vue 3', 'awesome', 'glass effect']"
                glass
                dark/>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">搜索高亮示例</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400">
        <div class="p-8 rounded-lg bg-white/50 space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2 text-gray-800">搜索关键词：</label>
            <input
              v-model="searchKeyword"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="输入要搜索的关键词">
          </div>
          <div v-if="searchKeyword">
            <h4 class="text-base font-semibold mb-2 text-gray-800">搜索结果：</h4>
            <div class="space-y-2">
              <p class="text-gray-700">
                <ShadcnHighlight
                  text="Vue 3 是一个用于构建用户界面的渐进式框架"
                  :highlight="searchKeyword"
                  glass/>
              </p>
              <p class="text-gray-700">
                <ShadcnHighlight
                  text="组件库提供了丰富的 UI 组件和工具"
                  :highlight="searchKeyword"
                  glass/>
              </p>
              <p class="text-gray-700">
                <ShadcnHighlight
                  text="支持液态玻璃效果让界面更加现代化"
                  :highlight="searchKeyword"
                  glass/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">长文本高亮</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <div class="p-8 rounded-lg bg-white/50">
          <p class="text-gray-700 leading-relaxed">
            <ShadcnHighlight
              text="Vue 3 是一个用于构建用户界面的渐进式 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。Vue 3 带来了许多新特性和性能改进，包括 Composition API、更好的 TypeScript 支持、以及更快的运行时性能。"
              :highlight="['Vue 3', 'JavaScript', 'TypeScript', 'Composition API']"
              glass/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnHighlight } from '@/ui/highlight'

const searchKeyword = ref('')
</script>
