<template>
  <div :class="['min-h-screen px-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark"
                  class="mt-10 px-4 py-2 rounded bg-blue-500 text-white">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold mb-4">Basic ShadcnBadges</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBadge :text="5" type="primary" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Messages</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="99" type="success" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Notifications</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="3" type="warning" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Warnings</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="1" type="error" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Errors</ShadcnButton>
          </ShadcnBadge>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Max Count</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBadge :text="100" :max="99" type="primary" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Messages</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="1000" :max="999" type="success" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Popular</ShadcnButton>
          </ShadcnBadge>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Dot ShadcnBadge</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBadge :dot="true" type="error" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">New Updates</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :dot="true" type="success" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Online</ShadcnButton>
          </ShadcnBadge>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Custom Text</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBadge text="New" type="primary" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Product</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge type="warning" :dark="isDark">
            <template #text>Hot</template>
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Trending</ShadcnButton>
          </ShadcnBadge>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Different Types</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBadge :text="2" type="default" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Default</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="5" type="success" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Info</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="8" type="danger" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Danger</ShadcnButton>
          </ShadcnBadge>

          <ShadcnBadge :text="3" type="text" :dark="isDark">
            <ShadcnButton class="px-4 py-2 bg-gray-200 rounded">Text</ShadcnButton>
          </ShadcnBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
</script>