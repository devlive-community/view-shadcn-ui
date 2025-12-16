<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="space-y-6">
          <ShadcnSlider v-model="value1" glass />
          <ShadcnSlider v-model="value2" glass show-tip />
          <ShadcnSlider v-model="value3" glass show-step :step="10" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-900 to-purple-900">
        <div class="space-y-6">
          <ShadcnSlider v-model="value4" glass dark />
          <ShadcnSlider v-model="value5" glass dark show-tip />
          <ShadcnSlider v-model="value6" glass dark show-step :step="10" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同范围</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400">
        <div class="space-y-6">
          <ShadcnSlider v-model="value7" glass :min="0" :max="200" show-tip />
          <ShadcnSlider v-model="value8" glass :min="10" :max="50" show-tip />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">禁用状态 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <div class="space-y-6">
          <ShadcnSlider v-model="value9" glass disabled show-tip />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnSlider } from '@/ui/slider'

const value1 = ref(50)
const value2 = ref(75)
const value3 = ref(30)
const value4 = ref(60)
const value5 = ref(80)
const value6 = ref(40)
const value7 = ref(100)
const value8 = ref(25)
const value9 = ref(65)
</script>
