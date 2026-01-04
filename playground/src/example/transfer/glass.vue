<template>
  <div class="p-6 rounded-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 space-y-6">
    <div>
      <p class="text-sm mb-2 font-semibold text-white">液态玻璃效果</p>
      <ShadcnTransfer
        v-model="selected1"
        :data="data1"
        :glass="true" />
    </div>

    <div>
      <p class="text-sm mb-2 font-semibold text-white">液态玻璃效果 + 不同类型</p>
      <div class="space-y-4">
        <div>
          <p class="text-xs mb-1 text-white">Success Type</p>
          <ShadcnTransfer
            v-model="selected2"
            :data="data2"
            :glass="true"
            type="success" />
        </div>
        <div>
          <p class="text-xs mb-1 text-white">Warning Type</p>
          <ShadcnTransfer
            v-model="selected3"
            :data="data3"
            :glass="true"
            type="warning" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected1 = ref([2])
const data1 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4' },
])

const selected2 = ref([1])
const data2 = ref([
  { key: 1, label: 'Item 1' },
  { key: 2, label: 'Item 2' },
  { key: 3, label: 'Item 3' },
])

const selected3 = ref([1])
const data3 = ref([
  { key: 1, label: 'Option 1' },
  { key: 2, label: 'Option 2' },
  { key: 3, label: 'Option 3' },
])
</script>
