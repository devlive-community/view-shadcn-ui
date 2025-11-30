<template>
  <div :class="['min-h-screen px-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark"
                  class="mt-10 px-4 py-2 rounded bg-blue-500 text-white">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold mb-4">Basic ShadcnBreadcrumb</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBreadcrumb :dark="isDark">
            <ShadcnBreadcrumbItem href="/">Home</ShadcnBreadcrumbItem>
            <ShadcnBreadcrumbItem href="/products">Products</ShadcnBreadcrumbItem>
            <ShadcnBreadcrumbItem>Current Page</ShadcnBreadcrumbItem>
          </ShadcnBreadcrumb>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Custom Separator</h3>
        <div class="flex gap-6 flex-wrap">
          <ShadcnBreadcrumb separator=">" :dark="isDark">
            <ShadcnBreadcrumbItem href="/">Home</ShadcnBreadcrumbItem>
            <ShadcnBreadcrumbItem href="/docs">Docs</ShadcnBreadcrumbItem>
            <ShadcnBreadcrumbItem>Guide</ShadcnBreadcrumbItem>
          </ShadcnBreadcrumb>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
</script>