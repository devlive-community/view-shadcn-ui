---
title: 布局 (Layout)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnLayout` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnLayout :dark="darkMode">
        <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 侧边栏 (sider)

<CodeRunner title="侧边栏 (sider)">
    <ShadcnLayout :dark="darkMode">
        <ShadcnLayoutWrapper>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
            <ShadcnLayoutMain>
                <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
                <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
                <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
            </ShadcnLayoutMain>
        </ShadcnLayoutWrapper>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnLayout>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
            <ShadcnLayoutMain>
                <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
                <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
                <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
            </ShadcnLayoutMain>
        </ShadcnLayoutWrapper>
    </ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 布局示例 (layout)

<CodeRunner title="布局示例 (layout)">
    <div class="my-4 ml-2">Header + Content + Footer</div>
    <ShadcnLayout :dark="darkMode">
      <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
    <div class="my-4">Sider + (Header + Content + Footer)</div>
    <ShadcnLayout :dark="darkMode">
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
    <div class="my-4">(Header + Content + Footer) + Sider</div>
    <ShadcnLayout :dark="darkMode">
      <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
    <div class="my-4">Header + (Sider + Content) + Footer</div>
    <ShadcnLayout :dark="darkMode">
      <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
    <div class="my-4">Header + (Content + Sider) + Footer</div>
    <ShadcnLayout :dark="darkMode">
      <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<div>Header + Content + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
<div>Sider + (Header + Content + Footer)</div>
<ShadcnLayout>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
            <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
    </ShadcnLayoutWrapper>
</ShadcnLayout>
<div>(Header + Content + Footer) + Sider</div>
<ShadcnLayout>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
            <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
    </ShadcnLayoutWrapper>
</ShadcnLayout>
<div>Header + (Sider + Content) + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
    </ShadcnLayoutWrapper>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
<div>Header + (Content + Sider) + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        </ShadcnLayoutWrapper>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 自定义触发器 (trigger)

<CodeRunner title="自定义触发器 (trigger)">
    <ShadcnLayout :dark="darkMode">
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="bg-blue-100" collapsible :defaultCollapsed="false" trigger>
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <ShadcnIcon icon="Home"/>
              <span>Home</span>
            </div>
          </div>
          <template #collapsed>
            <div class="space-y-4">
              <div class="flex items-center space-x-2">
                <ShadcnIcon icon="Home"/>
              </div>
            </div>
          </template>
        </ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnLayout>
    <ShadcnLayoutWrapper>
      <ShadcnLayoutSider class="bg-blue-100" collapsible :defaultCollapsed="false" trigger>
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <ShadcnIcon icon="Home"/>
            <span>Home</span>
          </div>
        </div>

        <template #collapsed>
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <ShadcnIcon icon="Home"/>
            </div>
          </div>
        </template>
      </ShadcnLayoutSider>
      <ShadcnLayoutMain>
        <ShadcnLayoutHeader class="bg-blue-100 h-16">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-blue-500 flex-1">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-blue-400 h-24">Footer</ShadcnLayoutFooter>
      </ShadcnLayoutMain>
    </ShadcnLayoutWrapper>
  </ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 布局 (Layout) 属性

<ApiTable title="布局 (Layout) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['width', '布局侧边器的宽度', 'number | string', '200'],
        ['collapsedWidth', '折叠时侧边栏的宽度', 'number | string', '80'],
        ['collapsible', '布局侧边器是否可折叠', 'boolean', 'false'],
        ['defaultCollapsed', '布局侧边栏的默认状态', 'boolean', 'false'],
        ['trigger', '布局侧边栏的触发器', 'boolean', 'false'],
    ]">
</ApiTable>

## 布局 (Layout) 事件

<ApiTable title="布局 (Layout) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-collapse', '当吃侧边栏折叠时发出', '-'],
    ]">
</ApiTable>

## 布局 (Layout) 插槽

<ApiTable title="布局 (Layout) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['trigger', '自定义触发器'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>