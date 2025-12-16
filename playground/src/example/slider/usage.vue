<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <ShadcnSlider v-model="value1" />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">显示数值</h3>
      <ShadcnSlider v-model="value2" show-tip />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义范围</h3>
      <div class="space-y-4">
        <ShadcnSlider v-model="value3" :min="0" :max="200" show-tip />
        <ShadcnSlider v-model="value4" :min="10" :max="50" show-tip />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">步进间隔</h3>
      <div class="space-y-4">
        <ShadcnSlider v-model="value5" :step="10" show-step show-tip />
        <ShadcnSlider v-model="value6" :step="5" show-step show-tip />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同类型</h3>
      <div class="space-y-4">
        <ShadcnSlider v-model="value7" type="primary" show-tip />
        <ShadcnSlider v-model="value7" type="success" show-tip />
        <ShadcnSlider v-model="value7" type="warning" show-tip />
        <ShadcnSlider v-model="value7" type="error" show-tip />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">禁用状态</h3>
      <ShadcnSlider v-model="value8" disabled show-tip />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-4 bg-gray-900 rounded-lg">
        <ShadcnSlider v-model="value9" dark show-tip />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnSlider } from '@/ui/slider'

const value1 = ref(50)
const value2 = ref(60)
const value3 = ref(100)
const value4 = ref(30)
const value5 = ref(50)
const value6 = ref(25)
const value7 = ref(70)
const value8 = ref(40)
const value9 = ref(65)
</script>
