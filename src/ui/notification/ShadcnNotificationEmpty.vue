<template>
  <div class="flex flex-col items-center justify-center p-6 text-center">
    <div class="text-4xl mb-2 text-gray-300 dark:text-gray-600">
      <svg class="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            stroke-linecap="round" stroke-linejoin="round"
            stroke-width="1"/>
      </svg>
    </div>
    <p class="text-base text-gray-500 dark:text-gray-400">{{ message }}</p>
  </div>
</template>

<script lang="ts" setup>
import { t } from '@/utils/locale'

// Define props for the empty state component
// 为空状态组件定义属性
defineProps({
  message: {
    type: String,
    default: String(t('notification.text.noData'))
  }
})
</script>