---
title: 布局 (Layout)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnLayout` 组件的一些特性和用法。

Layout 组件提供了经典的页面布局，包含 Header、Content、Footer 和 Sider 组件，支持自动识别侧边栏并调整布局方向。

## 基础用法

<CodeRunner title="基础用法">
    <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-sky-600 text-white h-32 flex items-center px-4">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-sky-600 text-white h-32 flex items-center px-4">Content</ShadcnLayoutContent>
    <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 带侧边栏的布局

Layout 会自动检测子组件中是否包含 Sider，如果包含则使用横向布局，否则使用纵向布局。

<CodeRunner title="带侧边栏的布局">
    <ShadcnLayout>
        <ShadcnLayoutSider class="bg-sky-400 text-white min-h-[120px] flex items-center justify-center" :collapsible="false">Sider</ShadcnLayoutSider>
        <ShadcnLayout>
            <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-sky-600 text-white min-h-[120px] flex items-center px-4">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
        </ShadcnLayout>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutSider :collapsible="false">Sider</ShadcnLayoutSider>
    <ShadcnLayout>
        <ShadcnLayoutHeader>Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent>Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter>Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 多种布局组合

通过嵌套 Layout 组件，可以实现各种复杂的布局结构。

<CodeRunner title="多种布局组合">
    <div class="space-y-6">
        <div>
            <div class="text-sm font-semibold mb-2 text-gray-700">Header + (Sider + Content) + Footer</div>
            <ShadcnLayout>
                <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
                <ShadcnLayout>
                    <ShadcnLayoutSider class="bg-sky-400 text-white min-h-[120px] flex items-center justify-center" :collapsible="false">Sider</ShadcnLayoutSider>
                    <ShadcnLayoutContent class="bg-sky-600 text-white flex items-center px-4">Content</ShadcnLayoutContent>
                </ShadcnLayout>
                <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
            </ShadcnLayout>
        </div>
        <div>
            <div class="text-sm font-semibold mb-2 text-gray-700">Header + (Content + Sider) + Footer</div>
            <ShadcnLayout>
                <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
                <ShadcnLayout>
                    <ShadcnLayoutContent class="bg-sky-600 text-white flex items-center px-4">Content</ShadcnLayoutContent>
                    <ShadcnLayoutSider class="bg-sky-400 text-white min-h-[120px] flex items-center justify-center" :collapsible="false">Sider</ShadcnLayoutSider>
                </ShadcnLayout>
                <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
            </ShadcnLayout>
        </div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
<!-- Header + (Sider + Content) + Footer -->
<ShadcnLayout>
    <ShadcnLayoutHeader>Header</ShadcnLayoutHeader>
    <ShadcnLayout>
        <ShadcnLayoutSider :collapsible="false">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent>Content</ShadcnLayoutContent>
    </ShadcnLayout>
    <ShadcnLayoutFooter>Footer</ShadcnLayoutFooter>
</ShadcnLayout>

<!-- Header + (Content + Sider) + Footer -->
<ShadcnLayout>
    <ShadcnLayoutHeader>Header</ShadcnLayoutHeader>
    <ShadcnLayout>
        <ShadcnLayoutContent>Content</ShadcnLayoutContent>
        <ShadcnLayoutSider :collapsible="false">Sider</ShadcnLayoutSider>
    </ShadcnLayout>
    <ShadcnLayoutFooter>Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## 可折叠侧边栏

Sider 支持折叠功能，可以通过内置触发器或自定义触发器来控制折叠状态。

<CodeRunner title="可折叠侧边栏（内置触发器）">
    <ShadcnLayout>
        <ShadcnLayoutSider
            class="bg-sky-400 text-white min-h-[160px]"
            :collapsible="true"
            :trigger="true"
            @on-collapse="(collapsed) => console.log('collapsed:', collapsed)">
            <div class="flex items-center justify-center h-full">
                <span>Sider Content</span>
            </div>
        </ShadcnLayoutSider>
        <ShadcnLayout>
            <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-sky-600 text-white flex items-center px-4">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
        </ShadcnLayout>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutSider
        :collapsible="true"
        :trigger="true"
        @on-collapse="handleCollapse">
        <div>Sider Content</div>
    </ShadcnLayoutSider>
    <ShadcnLayout>
        <ShadcnLayoutHeader>Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent>Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter>Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</ShadcnLayout>
</template>

<script setup lang="ts">
const handleCollapse = (collapsed: boolean) => {
    console.log('collapsed:', collapsed);
};
</script>
```

:::

## 自定义折叠内容

通过插槽可以自定义折叠状态下的内容。

<CodeRunner title="自定义折叠内容">
    <ShadcnLayout>
        <ShadcnLayoutSider
            class="bg-sky-400 text-white min-h-[160px]"
            :collapsible="true"
            :trigger="true">
            <template #default>
                <div class="flex items-center justify-center h-full">完整内容</div>
            </template>
            <template #collapsed>
                <div class="flex items-center justify-center h-full">折</div>
            </template>
        </ShadcnLayoutSider>
        <ShadcnLayout>
            <ShadcnLayoutHeader class="bg-sky-300 text-white h-12 flex items-center px-4">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-sky-600 text-white flex items-center px-4">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-sky-300 text-white h-16 flex items-center px-4">Footer</ShadcnLayoutFooter>
        </ShadcnLayout>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutSider :collapsible="true" :trigger="true">
        <template #default>
            <div>完整内容</div>
        </template>
        <template #collapsed>
            <div>折</div>
        </template>
    </ShadcnLayoutSider>
    <ShadcnLayout>
        <ShadcnLayoutHeader>Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent>Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter>Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## Sider Props

<ApiTable title="Sider Props"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['width', '侧边栏宽度', 'string', '\'200\''],
        ['collapsedWidth', '折叠时侧边栏宽度', 'string', '\'80\''],
        ['collapsible', '是否可折叠', 'boolean', 'true'],
        ['defaultCollapsed', '默认折叠状态', 'boolean', 'false'],
        ['trigger', '是否显示内置触发器', 'boolean', 'false'],
    ]">
</ApiTable>

## Sider Events

<ApiTable title="Sider Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-collapse', '折叠状态改变时触发', 'collapsed: boolean'],
    ]">
</ApiTable>

## Sider Slots

<ApiTable title="Sider Slots"
    :headers="['插槽', '描述']"
    :columns="[
        ['default', '展开状态下的内容'],
        ['collapsed', '折叠状态下的内容'],
        ['trigger', '自定义触发器，参数：{ collapsed: boolean, toggle: () => void }'],
    ]">
</ApiTable>

## Sider Methods

<ApiTable title="Sider Methods"
    :headers="['方法', '描述', '参数']"
    :columns="[
        ['collapse', '折叠侧边栏', '-'],
        ['expand', '展开侧边栏', '-'],
        ['toggle', '切换折叠状态', '-'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>