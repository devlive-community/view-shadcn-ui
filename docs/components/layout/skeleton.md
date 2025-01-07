---
title: Shadcn Skeleton
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnSkeleton component.

## 用法

<CodeRunner title="用法">
    <ShadcnSkeleton />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeleton />
</template>

<script setup lang="ts">
</script>
```

:::

## Animation

<CodeRunner title="Animation">
    <ShadcnSkeleton animation />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeleton animation />
</template>

<script setup lang="ts">
</script>
```

:::

## Paragraph

<CodeRunner title="Title">
    <ShadcnSkeleton :paragraph=" { rows: 5, width: [100, 200, '300px', '50%', '62%'] }"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeleton :paragraph=" { rows: 5, width: [100, 200, '300px', '50%', '62%'] }"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Item Type

<CodeRunner title="Item Type">
    <ShadcnSpace>
        <ShadcnSkeletonItem animation type="circle"/>
        <ShadcnSkeletonItem animation type="square"/>
        <ShadcnSkeletonItem animation type="image"/>
    </ShadcnSpace>
    <br />
    <ShadcnSkeletonItem animation type="rect"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeletonItem animation type="circle"/>
    <ShadcnSkeletonItem animation type="square"/>
    <ShadcnSkeletonItem animation type="rect"/>
    <ShadcnSkeletonItem animation type="image"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Item Size

<CodeRunner title="Item Size">
    <ShadcnSpace>
        <ShadcnSkeletonItem animation type="image" size="small"/>
        <ShadcnSkeletonItem animation type="image" size="default"/>
        <ShadcnSkeletonItem animation type="image" size="large"/>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeletonItem animation type="image" size="small"/>
    <ShadcnSkeletonItem animation type="image" size="default"/>
    <ShadcnSkeletonItem animation type="image" size="large"/>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Skeleton Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['rows', 'The rows of the skeleton', 'Number | String', '4', '-', '-'],
        ['cols', 'The columns of the skeleton', 'Number | String', '1', '-', '-'],
        ['animation', 'Whether to use animation', 'Boolean', 'false', '-', '-'],
        ['paragraph', 'The paragraph of the skeleton', '{ rows: 5, width: \[100, 200, 300px, 50%, 62%\] }', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Skeleton Item Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['animation', 'Whether to use animation', 'Boolean', 'false', '-', '-'],
        ['width', 'The width of the skeleton item', 'Number | String', '-', '-', '-'],
        ['type', 'The type of the skeleton item', 'Enum', 'rect', '-', 'circle | square | rect | image'],
        ['size', 'The size of the skeleton item', 'Enum', 'default', '-', 'small | default | large'],
    ]">
</ApiTable>

<br />

<ApiTable title="Skeleton Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['template', 'Skeleton template slot'],
    ]">
</ApiTable>
