---
title: 通知中心 (Notification)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnNotification` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法" codeKey="notification-usage">
        <ShadcnNotification trigger @on-read-all="handleReadAll" @on-clear-all="handleClearAll" :dark="darkMode">
          <ShadcnNotificationItem v-for="(item, index) in notifications"
                                  :key="index"
                                  :item="item"
                                  @on-click="handleNotificationClick" :dark="darkMode">
          </ShadcnNotificationItem>
        </ShadcnNotification>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnNotification @on-item-click="handleNotificationClick"
                      @on-read-all="handleReadAll"
                      @on-clear-all="handleClearAll" :dark="darkMode">
    <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
  </ShadcnNotification>
</template>
```

:::

## 触发器 (trigger)

::: raw

<CodeRunner title="触发器" codeKey="notification-trigger">
    <ShadcnNotification trigger :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
    </ShadcnNotification>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnNotification trigger :dark="darkMode">
    <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
  </ShadcnNotification>
</template>
```

:::

## 宽度 (width)

::: raw

<CodeRunner title="宽度" codeKey="notification-width">
    <ShadcnNotification trigger width="20%" :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
    </ShadcnNotification>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnNotification trigger width="50%" :dark="darkMode">
    <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
  </ShadcnNotification>
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度" codeKey="notification-height">
    <ShadcnNotification trigger height="200px" :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
    </ShadcnNotification>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnNotification trigger height="200px" :dark="darkMode">
    <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
  </ShadcnNotification>
</template>
```

:::

## 位置 (position)

::: raw

<CodeRunner title="位置" warning="位置顺序为左中右" codeKey="notification-position">
    <ShadcnNotification position="left" height="200px" :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
    </ShadcnNotification>
    <ShadcnNotification position="center" height="200px" :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
    </ShadcnNotification>
    <ShadcnNotification position="right" height="200px" :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
    </ShadcnNotification>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnNotification position="center" height="200px" :dark="darkMode">
    <ShadcnNotificationItem v-for="(item, index) in notifications" :key="index" :item="item" @on-click="handleNotificationClick" :dark="darkMode" />
  </ShadcnNotification>
</template>
```

:::

## 加载数据 (loadData)

::: raw

<CodeRunner title="加载数据" codeKey="notification-load-data">
    <ShadcnNotification trigger
                        width="20%"
                        height="200px"
                        position="right"
                        :loadData="loadMoreNotifications"
                        @on-item-click="handleNotificationClick"
                        @on-read-all="handleReadAll"
                        @on-clear-all="handleClearAll"
                        @on-load-data="handleLoadMoreEvent" :dark="darkMode">
      <ShadcnNotificationItem v-for="(item, index) in notifications"
                              :key="index"
                              :item="item"
                              @on-click="handleNotificationClick" :dark="darkMode">
      </ShadcnNotificationItem>
    </ShadcnNotification>
</CodeRunner>

:::

## 通知中心 (Notification) 属性

<ApiTable title="通知中心 (Notification) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['trigger', '是否显示触发器', '布尔值', 'true'],
        ['width', '通知中心的宽度', 'number | string', '30%'],
        ['height', '通知中心的高度', 'number | string', 'auto'],
        ['position', '通知中心的位置', 'left | right | center', 'right'],
        ['loadData', '异步加载数据', 'function', '-']
    ]">
</ApiTable>

<br/>

<ApiTable title="通知中心子项 (Notification Item) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['id', '子项唯一标记', '字符串|数字', '-'],
        ['title', '子项标题', '字符串', '-'],
        ['description', '子项描述', '字符串', '-'],
        ['icon', '子项图标', '字符串', '-'],
        ['time', '子项时间', '字符串', '-'],
        ['read', '子项是否已读', '布尔值', 'false'],
    ]">
</ApiTable>

## 通知中心 (Notification) 事件

<ApiTable title="通知中心 (Notification) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-clear-all', '点击清空全部', '-'],
        ['on-read-all', '点击全部已读', '-'],
        ['on-load-data', '加载数据时触发', 'function']
    ]">
</ApiTable>

## 通知中心(Notification) 插槽

<ApiTable title="通知中心(Notification) 插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['trigger', '触发器的插槽'],
        ['actions', '操作按钮的插槽'],
        ['empty', '空数据的插槽']
    ]">
</ApiTable>

<br />

<ApiTable title="通知中心子项 (Notification Item) 插槽"
    :headers="['插槽', '描述', '回调参数']"
    :columns="[
        ['icon', '通知图标的插槽', 'item: any'],
        ['title', '通知标题的插槽', 'item: any'],
        ['time', '通知时间的插槽', 'item: any'],
        ['description', '通知描述内容的插槽', 'item: any'],
        ['actions', '通知操作按钮的插槽', 'item: any']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = 5
const hasMoreData = ref(true)
const loading = ref(false)

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