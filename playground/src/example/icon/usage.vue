<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法</h3>
      <div class="flex gap-4 flex-wrap">
        <ShadcnIcon icon="Home"/>
        <ShadcnIcon icon="Settings"/>
        <ShadcnIcon icon="User"/>
        <ShadcnIcon icon="Bell"/>
        <ShadcnIcon icon="Mail"/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">不同尺寸</h3>
      <div class="flex gap-4 items-end">
        <ShadcnIcon icon="Star" :size="16"/>
        <ShadcnIcon icon="Star" :size="20"/>
        <ShadcnIcon icon="Star" :size="24"/>
        <ShadcnIcon icon="Star" :size="32"/>
        <ShadcnIcon icon="Star" :size="40"/>
        <ShadcnIcon icon="Star" :size="48"/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">自定义颜色</h3>
      <div class="flex gap-4">
        <ShadcnIcon icon="Heart" color="red" :size="32"/>
        <ShadcnIcon icon="Heart" color="blue" :size="32"/>
        <ShadcnIcon icon="Heart" color="green" :size="32"/>
        <ShadcnIcon icon="Heart" color="orange" :size="32"/>
        <ShadcnIcon icon="Heart" color="purple" :size="32"/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">带背景</h3>
      <div class="flex gap-4">
        <ShadcnIcon icon="Home" :size="40" background/>
        <ShadcnIcon icon="Settings" :size="40" background/>
        <ShadcnIcon icon="User" :size="40" background/>
        <ShadcnIcon icon="Bell" :size="40" background/>
        <ShadcnIcon icon="Mail" :size="40" background/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="flex gap-4">
          <ShadcnIcon icon="Home" :size="32" dark/>
          <ShadcnIcon icon="Settings" :size="32" dark/>
          <ShadcnIcon icon="User" :size="32" dark/>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式 - 带背景</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="flex gap-4">
          <ShadcnIcon icon="Home" :size="40" background dark/>
          <ShadcnIcon icon="Settings" :size="40" background dark/>
          <ShadcnIcon icon="User" :size="40" background dark/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnIcon } from '@/ui/icon'
</script>
