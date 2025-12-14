---
title: 工具栏页脚 (Toolbar Footer)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnToolbarFooter` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnToolbarFooter :dark="darkMode">
      <template #left>Basic</template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnToolbarFooter>
      <template #left>Basic</template>
    </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## 自动隐藏 (auto-hide)

::: raw

<CodeRunner title="自动隐藏 (auto-hide)">
    <ShadcnToolbarFooter auto-hide :dark="darkMode">
        <template #left>Auto Hide</template> 
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnToolbarFooter auto-hide>
    <template #left>Auto Hide</template>
  </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## 自动隐藏延迟 (auto-hide-delay)

::: raw

<CodeRunner title="自动隐藏延迟 (auto-hide-delay)">
    <ShadcnToolbarFooter auto-hide auto-hide-delay="2000" :dark="darkMode">
        <template #left>Auto Hide Delay</template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnToolbarFooter auto-hide auto-hide-delay="2000">
    <template #left>Auto Hide Delay</template>
  </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## 全宽 (full-width)

::: raw

<CodeRunner title="全宽 (full-width)">
    <ShadcnToolbarFooter v-model="defaultValue" full-width :dark="darkMode">
      <template #left>Full Width</template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnToolbarFooter full-width>
    <template #left>Full Width</template>
  </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## 工具栏页脚 (Toolbar Footer) 属性

<ApiTable title="工具栏页脚 (Toolbar Footer) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['autoHide', '是否自动隐藏', 'boolean', 'false'],
        ['autoHideDelay', '自动隐藏延迟', 'number', '3000'],
        ['hideOnScroll', '是否在滚动时隐藏', 'boolean', 'true'],
        ['scrollStopDelay', '滚动停止延迟', 'number', '600'],
        ['fullWidth', '是否全宽', 'boolean', 'false'],
    ]">
</ApiTable>

## 工具栏页脚 (Toolbar Footer) 事件

<ApiTable title="工具栏页脚 (Toolbar Footer) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-cancel', '当关闭时触发', 'boolean'],
        ['on-ok', '当确认时触发', 'boolean'],
    ]">
</ApiTable>