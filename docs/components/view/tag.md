---
title: Shadcn Tag
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnTag component.

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

## Border

::: raw

<CodeRunner title="Border">
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

## Color

::: raw

<CodeRunner title="Color">
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

## Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['text', 'The content of the tag', 'string', '-', '-', '-'],
        ['name', 'The name of the tag, clicked when closable', 'string', '-', '-', '-'],
        ['type', 'The type of the tag', 'enum', 'default', '-', 'default | primary | success | warning | error'],
        ['border', 'The border of the tag', 'boolean', 'false', '-', '-'],
        ['size', 'The size of the tag', 'enum', 'default', '-', 'default | medium | large'],
        ['closable', 'Whether the tag can be closed', 'boolean', 'false', '-', '-'],
        ['color', 'The color of the tag, auto calculate border color', 'string', '-', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Name', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'The content of the tag', 'text'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-close', 'Triggered when the tag is closed', 'event'],
    ]">
</ApiTable>
