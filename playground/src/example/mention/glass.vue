<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="space-y-4">
          <ShadcnMention glass :items="items" placeholder="输入 @ 提及..." />
          <ShadcnMention glass :items="items" trigger="#" placeholder="输入 # 提及..." />
          <ShadcnMention glass :items="items" type="success" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-900 to-purple-900">
        <div class="space-y-4">
          <ShadcnMention glass dark :items="items" placeholder="输入 @ 提及..." />
          <ShadcnMention glass dark :items="items" trigger="#" placeholder="输入 # 提及..." />
          <ShadcnMention glass dark :items="items" type="warning" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同类型 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
        <div class="space-y-4">
          <ShadcnMention glass :items="items" type="primary" />
          <ShadcnMention glass :items="items" type="success" />
          <ShadcnMention glass :items="items" type="warning" />
          <ShadcnMention glass :items="items" type="error" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同尺寸 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400">
        <div class="space-y-4">
          <ShadcnMention glass :items="items" size="small" />
          <ShadcnMention glass :items="items" size="default" />
          <ShadcnMention glass :items="items" size="large" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnMention } from '@/ui/mention'

const items = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' },
  { id: 6, name: 'Frank' },
  { id: 7, name: 'Grace' },
  { id: 8, name: 'Henry' }
])
</script>
