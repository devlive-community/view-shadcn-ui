<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">通知中心示例</h2>

    <div class="mb-4">
      <ShadcnButton @click="addRandomNotification">添加随机通知</ShadcnButton>
    </div>

    <ShadcnNotification trigger
                        @on-item-click="handleNotificationClick"
                        @on-read-all="handleReadAll"
                        @on-clear-all="handleClearAll">
      <ShadcnNotificationItem v-for="(item, index) in notifications"
                              :key="index"
                              :item="item"
                              @on-click="handleNotificationClick">
      </ShadcnNotificationItem>
    </ShadcnNotification>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Mock notifications
// 模拟通知
const notifications = ref<any[]>([
  {
    id: '1',
    title: '系统通知',
    description: '您的账户已成功激活',
    type: 'success',
    time: '10分钟前',
    read: false
  },
  {
    id: '2',
    title: '安全提醒',
    description: '检测到您的账户在新设备上登录',
    type: 'warning',
    time: '1小时前',
    read: false
  },
  {
    id: '3',
    title: '系统维护',
    description: '系统将于今晚22:00-23:00进行例行维护',
    type: 'info',
    time: '3小时前',
    read: true
  }
])

// Handle notification click
// 处理通知点击
const handleNotificationClick = (item: any) => {
  console.log('Notification clicked:', item)

  // Mark as read
  // 标记为已读
  const index = notifications.value.findIndex(n => n.id === item.id)
  if (index !== -1) {
    notifications.value[index].read = true
    // Create a new array to trigger reactivity
    // 创建一个新数组以触发响应式
    notifications.value = [...notifications.value]
  }
}

// Handle read all
// 处理全部已读
const handleReadAll = () => {
  notifications.value = notifications.value.map(item => ({
    ...item,
    read: true
  }))
}

// Handle clear all
// 处理清空全部
const handleClearAll = () => {
  notifications.value = []
}

// Generate unique ID
// 生成唯一ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// Add random notification
// 添加随机通知
const addRandomNotification = () => {
  const types = ['info', 'warning', 'success', 'error', 'default'] as const
  const randomType = types[Math.floor(Math.random() * types.length)]

  const titles = {
    info: '信息通知',
    warning: '警告信息',
    success: '操作成功',
    error: '错误提醒',
    default: '系统消息'
  }

  const descriptions = {
    info: '这是一条重要的系统信息',
    warning: '请注意，您的操作可能存在风险',
    success: '您的操作已成功完成',
    error: '操作失败，请重试',
    default: '感谢您使用我们的系统'
  }

  const newNotification: any = {
    id: generateId(),
    title: titles[randomType],
    description: descriptions[randomType],
    type: randomType,
    time: '刚刚',
    read: false,
    action: Math.random() > 0.5 ? { text: '了解更多' } : undefined
  }

  notifications.value = [newNotification, ...notifications.value]
}
</script>