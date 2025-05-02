<template>
  <div class="w-full bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
    <!-- Header -->
    <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <h3 class="text-base font-medium text-gray-900 dark:text-gray-100">{{ t('notification.text.title') }}</h3>
      <div class="flex gap-2">
        <ShadcnButton @click="handleReadAll">{{ t('notification.text.markAllAsRead') }}</ShadcnButton>
        <ShadcnButton type="error" @click="handleClearAll">{{ t('notification.text.clearAll') }}</ShadcnButton>
      </div>
    </div>

    <!-- Content -->
    <div class="overflow-y-auto">
      <slot>
        <!-- 默认内容，当没有提供插槽内容时显示 -->
        <!-- Default content, displayed when no slot content is provided -->
        <slot name="empty">
          <ShadcnNotificationEmpty/>
        </slot>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotificationEmits } from './types'
import ShadcnNotificationEmpty from './ShadcnNotificationEmpty.vue'
import { t } from '@/utils/locale'

defineProps<{}>()

const emit = defineEmits<NotificationEmits>()

// Handle item click
// 处理项目点击
const handleItemClick = (item: any) => {
  emit('on-item-click', item)
}

// Handle item action
// 处理项目操作
const handleItemAction = (item: any) => {
  emit('on-item-action', item)
}

// Handle read all
// 处理全部已读
const handleReadAll = () => {
  emit('on-read-all')
}

// Handle clear all
// 处理清空全部
const handleClearAll = () => {
  emit('on-clear-all')
}

// 向父组件暴露 handleItemClick 和 handleItemAction 方法，以便子组件可以调用
// Expose handleItemClick and handleItemAction methods to parent component,
// so child components can call them
defineExpose({
  handleItemClick,
  handleItemAction
})
</script>