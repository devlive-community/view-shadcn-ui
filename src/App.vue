<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnSlider - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
            <div class="flex flex-col gap-6">
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">基础滑块</h4>
                <ShadcnSlider v-model="sliderValue1" glass :dark="isDark"/>
              </div>
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">显示数值</h4>
                <ShadcnSlider v-model="sliderValue2" glass :dark="isDark" show-tip/>
              </div>
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">显示步进标记</h4>
                <ShadcnSlider v-model="sliderValue3" glass :dark="isDark" show-step :step="10"/>
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
import { ShadcnSlider } from "@/ui/slider";

const isDark = ref(false)
const sliderValue1 = ref(50)
const sliderValue2 = ref(75)
const sliderValue3 = ref(30)
</script>