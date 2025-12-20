<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnGradientText - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
          <div :class="['p-8 rounded-lg', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <div class="space-y-4">
              <div>
                <h4 :class="['text-base font-semibold mb-2', isDark ? 'text-gray-200' : 'text-gray-800']">基础渐变文本</h4>
                <div class="space-y-2">
                  <ShadcnGradientText from="#FF6B6B" to="#4ECDC4" :deg="90" background glass :dark="isDark">
                    渐变文本效果
                  </ShadcnGradientText>
                  <br/>
                  <ShadcnGradientText from="#FFD93D" to="#FF6B9D" :deg="45" background glass :dark="isDark">
                    彩虹渐变文本
                  </ShadcnGradientText>
                </div>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-2', isDark ? 'text-gray-200' : 'text-gray-800']">多色渐变</h4>
                <div class="space-y-2">
                  <ShadcnGradientText options="90deg, #667eea 0%, #764ba2 50%, #f093fb 100%" background glass :dark="isDark">
                    三色渐变文本
                  </ShadcnGradientText>
                  <br/>
                  <ShadcnGradientText options="135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%" background glass :dark="isDark">
                    五色渐变文本
                  </ShadcnGradientText>
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
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnGradientText } from "@/ui/text";

const isDark = ref(false)
</script>