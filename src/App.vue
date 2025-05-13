<template>
  <ShadcnMenu direction="horizontal">
    <ShadcnMenuItem name="home">
      <template #icon>
        <ShadcnIcon icon="Home"/>
      </template>
      Home
    </ShadcnMenuItem>
    <ShadcnMenuSub name="profileSub">
      <template #title>Profile</template>
      <template #icon>
        <ShadcnIcon icon="User"/>
      </template>
      <ShadcnMenuGroup name="settingGroup">
        <template #title>Settings</template>
        <ShadcnMenuItem name="username">Change Username</ShadcnMenuItem>
        <ShadcnMenuItem name="password">Change Password</ShadcnMenuItem>
      </ShadcnMenuGroup>
    </ShadcnMenuSub>
    <ShadcnMenuItem name="email">Change Email</ShadcnMenuItem>
    <ShadcnMenuItem name="logout">
      <template #icon>
        <ShadcnIcon icon="LogOut"/>
      </template>
      Logout
    </ShadcnMenuItem>
    <ShadcnNotification trigger
                        width="20%"
                        height="200px"
                        position="right"
                        :loadData="loadMoreNotifications"
                        @on-item-click="handleNotificationClick"
                        @on-read-all="handleReadAll"
                        @on-clear-all="handleClearAll"
                        @on-load-data="handleLoadMoreEvent">
      <ShadcnNotificationItem v-for="(item, index) in notifications"
                              :key="index"
                              :item="item"
                              @on-click="handleNotificationClick">
      </ShadcnNotificationItem>
    </ShadcnNotification>
  </ShadcnMenu>
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
const currentPage = ref(1)
const pageSize = 5
const hasMoreData = ref(true)
const loading = ref(false)

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

const generateNotifications = (page: number, size: number) => {
  const results: any[] = []
  const startId = (page - 1) * size + 1

  // 如果超过3页，返回空数据表示没有更多
  if (page > 3 && hasMoreData.value) {
    hasMoreData.value = false
    console.log(`已加载全部数据，没有更多了`)
    return results
  }

  for (let i = 0; i < size; i++) {
    if (!hasMoreData.value && page > 1) {
      break
    }

    const id = startId + i
    results.push({
      id,
      title: `通知 ${ id }`,
      content: `这是通知内容示例，页码: ${ page }, ID: ${ id }`,
      time: new Date().toLocaleString(),
      read: false
    })
  }

  return results
}

const loadMoreNotifications = (callback: (items: any[]) => void) => {
  if (loading.value || !hasMoreData.value) {
    callback([])
    return
  }

  loading.value = true
  console.log(`开始加载第 ${ currentPage.value } 页数据`)

  // 模拟异步加载
  setTimeout(() => {
    const newData = generateNotifications(currentPage.value, pageSize)

    // 添加到现有列表
    notifications.value = [...notifications.value, ...newData]

    // 更新页码
    currentPage.value++

    // 回调函数接收新加载的项目
    callback(newData)

    loading.value = false
    console.log(`成功加载 ${ newData.length } 条新通知`)
  }, 1000)
}

const handleLoadMoreEvent = () => {
  console.log('触发 on-load-data 事件')
}
</script>