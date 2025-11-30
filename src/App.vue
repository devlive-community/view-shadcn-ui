<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnColorPicker</h3>
        <ShadcnColorPicker v-model="colorValue" :dark="isDark"/>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnNumber</h3>
        <div class="space-y-4">
          <ShadcnNumber v-model="numberValue" :dark="isDark" placeholder="请输入数字"/>
          <ShadcnNumber v-model="numberValue2" :dark="isDark" placeholder="带清除按钮" clearable/>
          <ShadcnNumber v-model="numberValue3" :dark="isDark" placeholder="限制范围" :min="0" :max="100"/>
        </div>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnSlider</h3>
        <div class="space-y-4">
          <ShadcnSlider v-model="sliderValue" :dark="isDark" showTip/>
          <ShadcnSlider v-model="sliderValue2" :dark="isDark" showTip showStep :step="10"/>
          <ShadcnSlider v-model="sliderValue3" :dark="isDark" showTip :min="0" :max="200"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnSlider } from "@/ui/slider";

const isDark = ref(false)

const colorValue = ref('#3b82f6')

const numberValue = ref(0)
const numberValue2 = ref(10)
const numberValue3 = ref(50)

const sliderValue = ref(50)
const sliderValue2 = ref(30)
const sliderValue3 = ref(100)
</script>