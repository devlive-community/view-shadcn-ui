<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-orange-400 to-red-400">
        <div class="flex gap-4 flex-wrap">
          <ShadcnIcon icon="Home" :size="40" background glass/>
          <ShadcnIcon icon="Settings" :size="40" background glass/>
          <ShadcnIcon icon="User" :size="40" background glass/>
          <ShadcnIcon icon="Bell" :size="40" background glass/>
          <ShadcnIcon icon="Mail" :size="40" background glass/>
          <ShadcnIcon icon="Heart" :size="40" background glass/>
          <ShadcnIcon icon="Star" :size="40" background glass/>
          <ShadcnIcon icon="Search" :size="40" background glass/>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-orange-900 to-red-900">
        <div class="flex gap-4 flex-wrap">
          <ShadcnIcon icon="Home" :size="40" background glass dark/>
          <ShadcnIcon icon="Settings" :size="40" background glass dark/>
          <ShadcnIcon icon="User" :size="40" background glass dark/>
          <ShadcnIcon icon="Bell" :size="40" background glass dark/>
          <ShadcnIcon icon="Mail" :size="40" background glass dark/>
          <ShadcnIcon icon="Heart" :size="40" background glass dark/>
          <ShadcnIcon icon="Star" :size="40" background glass dark/>
          <ShadcnIcon icon="Search" :size="40" background glass dark/>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同尺寸 - 液态玻璃</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400">
        <div class="flex gap-4 items-end">
          <ShadcnIcon icon="Star" :size="32" background glass/>
          <ShadcnIcon icon="Star" :size="40" background glass/>
          <ShadcnIcon icon="Star" :size="48" background glass/>
          <ShadcnIcon icon="Star" :size="56" background glass/>
          <ShadcnIcon icon="Star" :size="64" background glass/>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">常用图标集合</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="grid grid-cols-8 gap-4">
          <ShadcnIcon icon="Home" :size="40" background glass/>
          <ShadcnIcon icon="User" :size="40" background glass/>
          <ShadcnIcon icon="Settings" :size="40" background glass/>
          <ShadcnIcon icon="Bell" :size="40" background glass/>
          <ShadcnIcon icon="Mail" :size="40" background glass/>
          <ShadcnIcon icon="Calendar" :size="40" background glass/>
          <ShadcnIcon icon="Heart" :size="40" background glass/>
          <ShadcnIcon icon="Star" :size="40" background glass/>
          <ShadcnIcon icon="Search" :size="40" background glass/>
          <ShadcnIcon icon="Download" :size="40" background glass/>
          <ShadcnIcon icon="Upload" :size="40" background glass/>
          <ShadcnIcon icon="Trash" :size="40" background glass/>
          <ShadcnIcon icon="Edit" :size="40" background glass/>
          <ShadcnIcon icon="Plus" :size="40" background glass/>
          <ShadcnIcon icon="Minus" :size="40" background glass/>
          <ShadcnIcon icon="Check" :size="40" background glass/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnIcon } from '@/ui/icon'
</script>
