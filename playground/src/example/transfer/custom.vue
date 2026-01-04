<template>
  <div class="space-y-6">
    <div>
      <p class="text-sm mb-2 font-semibold">自定义渲染</p>
      <ShadcnTransfer
        v-model="selected"
        :data="data">
        <template #item="{ item }">
          <div class="flex items-center gap-2">
            <ShadcnIcon :icon="item.icon" class="w-4 h-4" />
            <span>{{ item.label }}</span>
          </div>
        </template>
      </ShadcnTransfer>
    </div>

    <div>
      <p class="text-sm mb-2 font-semibold">禁用状态</p>
      <ShadcnTransfer
        v-model="selected2"
        :data="data2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([1])
const data = ref([
  { key: 1, label: '首页', icon: 'Home' },
  { key: 2, label: '用户', icon: 'User' },
  { key: 3, label: '设置', icon: 'Settings' },
  { key: 4, label: '文件', icon: 'File' },
])

const selected2 = ref([2])
const data2 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2 (禁用)', disabled: true },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4 (禁用)', disabled: true },
])
</script>
