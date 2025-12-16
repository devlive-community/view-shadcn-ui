<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="space-y-4">
          <ShadcnIPInput v-model="ipValue1" glass separator="." />
          <ShadcnIPInput v-model="ipValue2" glass separator="-" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-900 to-pink-900">
        <div class="space-y-4">
          <ShadcnIPInput v-model="ipValue3" glass dark separator="." />
          <ShadcnIPInput v-model="ipValue4" glass dark separator="-" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同尺寸 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400">
        <div class="space-y-4">
          <ShadcnIPInput v-model="ipValue5" glass size="small" separator="." />
          <ShadcnIPInput v-model="ipValue5" glass size="default" separator="." />
          <ShadcnIPInput v-model="ipValue5" glass size="large" separator="." />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">禁用状态 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <ShadcnIPInput v-model="ipValue6" glass disabled separator="." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnIPInput } from '@/ui/ip-input'

const ipValue1 = ref('192.168.1.1')
const ipValue2 = ref('10.0.0.1')
const ipValue3 = ref('172.16.0.1')
const ipValue4 = ref('8.8.8.8')
const ipValue5 = ref('192.168.0.1')
const ipValue6 = ref('1.1.1.1')
</script>
