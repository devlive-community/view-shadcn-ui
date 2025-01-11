---
title: 标签 (Tag)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTag` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnSpace wrap>
      <ShadcnTag text="Text"/>
      <ShadcnTag>Slot</ShadcnTag>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSpace wrap>
    <ShadcnTag text="Text"/>
    <ShadcnTag>Slot</ShadcnTag>
  </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnSpace wrap>
      <ShadcnTag text="Text"/>
      <ShadcnTag text="Text" type="primary"/>
      <ShadcnTag text="Text" type="success"/>
      <ShadcnTag text="Text" type="warning"/>
      <ShadcnTag text="Text" type="error"/>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace wrap>
      <ShadcnTag text="Text"/>
      <ShadcnTag text="Text" type="primary"/>
      <ShadcnTag text="Text" type="success"/>
      <ShadcnTag text="Text" type="warning"/>
      <ShadcnTag text="Text" type="error"/>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 边框 (border)

::: raw

<CodeRunner title="边框 (border)">
    <ShadcnSpace wrap>
      <ShadcnTag text="Text" border/>
      <ShadcnTag text="Text" type="primary" border/>
      <ShadcnTag text="Text" type="success" border/>
      <ShadcnTag text="Text" type="warning" border/>
      <ShadcnTag text="Text" type="error" border/>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace wrap>
      <ShadcnTag text="Text" border/>
      <ShadcnTag text="Text" type="primary" border/>
      <ShadcnTag text="Text" type="success" border/>
      <ShadcnTag text="Text" type="warning" border/>
      <ShadcnTag text="Text" type="error" border/>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnSpace wrap>
      <ShadcnTag text="Default Tag" size="default"/>
      <ShadcnTag text="Medium Tag" size="medium"/>
      <ShadcnTag text="Large Tag Width" size="large"/>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace wrap>
      <ShadcnTag text="Default Tag" size="default"/>
      <ShadcnTag text="Medium Tag" size="medium"/>
      <ShadcnTag text="Large Tag Width" size="large"/>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 可关闭 (closeable)

::: raw

<CodeRunner title="可关闭 (closeable)">
    <ShadcnSpace wrap>
      <ShadcnTag text="Default Tag" size="default" closable @on-close="console.log('on-close')"/>
      <ShadcnTag text="Medium Tag" size="medium" closable/>
      <ShadcnTag text="Large Tag Width" size="large" closable/>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace wrap>
        <ShadcnTag text="Default Tag" size="default" closable @on-close="console.log('on-close')"/>
        <ShadcnTag text="Medium Tag" size="medium" closable/>
        <ShadcnTag text="Large Tag Width" size="large" closable/>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 颜色 (color)

::: raw

<CodeRunner title="颜色 (color)">
    <ShadcnSpace wrap>
        <ShadcnTag text="Default Tag" border color="#D35DD4"/>
        <ShadcnTag text="Medium Tag" border color="#39604B"/>
        <ShadcnTag text="Large Tag Width" border color="#301A65"/>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace wrap>
        <ShadcnTag text="Default Tag" border color="#D35DD4"/>
        <ShadcnTag text="Medium Tag" border color="#39604B"/>
        <ShadcnTag text="Large Tag Width" border color="#301A65"/>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 标签 (Tag) 属性

<ApiTable title="标签 (Tag) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['text', '显示的内容', 'string', '-', '-'],
        ['name', '标签的名称', 'string', '-', '-'],
        ['type', '组件的类型', 'enum', 'default', 'default | primary | success | warning | error'],
        ['border', '是否显示边框', 'boolean', 'false', '-'],
        ['size', '组件的尺寸', 'enum', 'default', 'default | medium | large'],
        ['closable', '是否可关闭', 'boolean', 'false', '-'],
        ['color', '标签的颜色', 'string', '-', '-'],
    ]">
</ApiTable>

## 标签 (Tag) 插槽

<ApiTable title="标签 (Tag) 插槽"
    :headers="['插槽', '描述', '回调参数']"
    :columns="[
        ['default', '组件内容', 'text'],
    ]">
</ApiTable>

## 标签 (Tag) 事件

<ApiTable title="标签 (Tag) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-close', '关闭时触发', 'event'],
    ]">
</ApiTable>