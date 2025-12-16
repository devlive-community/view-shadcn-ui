<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <ShadcnIPInput v-model="ipValue1" />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义分隔符</h3>
      <div class="space-y-4">
        <ShadcnIPInput v-model="ipValue2" separator="." />
        <ShadcnIPInput v-model="ipValue3" separator="-" />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同尺寸</h3>
      <div class="space-y-4">
        <ShadcnIPInput v-model="ipValue4" size="small" separator="." />
        <ShadcnIPInput v-model="ipValue4" size="default" separator="." />
        <ShadcnIPInput v-model="ipValue4" size="large" separator="." />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">禁用状态</h3>
      <ShadcnIPInput v-model="ipValue5" disabled separator="." />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-4 bg-gray-900 rounded-lg">
        <ShadcnIPInput v-model="ipValue6" dark separator="." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnIPInput } from '@/ui/ip-input'

const ipValue1 = ref('')
const ipValue2 = ref('192.168.1.1')
const ipValue3 = ref('10.0.0.1')
const ipValue4 = ref('172.16.0.1')
const ipValue5 = ref('8.8.8.8')
const ipValue6 = ref('192.168.0.1')
</script>
