---
title: 头像 (Avatar)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnAvatar` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 替换文本 (alt)

<CodeRunner title="替换文本 (alt)">
    <ShadcnAvatar src="" alt="UI" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAvatar src="" alt="UI" />
</template>

<script setup lang="ts">
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="large" />
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="default" />
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="small" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="large" />
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="default" />
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="small" />
</template>

<script setup lang="ts">
</script>
```

:::

## 方形 (square)

<CodeRunner title="方形 (square)">
    <ShadcnAvatar src="" square />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAvatar src="" square />
</template>

<script setup lang="ts">
</script>
```

:::

## 组 (group)

::: raw

<CodeRunner title="组 (group)">
    <ShadcnAvatarGroup :items="items" />
    <ShadcnAvatarGroup :items="items" size="small"/>
    <ShadcnAvatarGroup :items="items" size="large"/>
    <ShadcnAvatarGroup :items="items" square/>
    <ShadcnAvatarGroup :items="items" max="2"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnAvatarGroup :items="items" />
    <ShadcnAvatarGroup :items="items" size="small"/>
    <ShadcnAvatarGroup :items="items" size="large"/>
    <ShadcnAvatarGroup :items="items" square/>
    <ShadcnAvatarGroup :items="items" max="2"/>
</template>

<script setup lang="ts">
const items = [
    { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 1' },
    { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 2' },
    { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 3' },
    { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 4' },
    { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 5' }
]
</script>
```

:::

## 头像 (Avatar) 属性

<ApiTable title="头像 (Avatar) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['src', '图片路径', 'string', '-', '-'],
        ['alt', '替换文本', 'string', '-', '-'],
        ['size', '尺寸', 'string', 'default', 'large | default | small'],
        ['square', '是否为方形', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 头像组 (Avatar Group) 属性

<ApiTable title="头像组 (Avatar Group) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['items', '头像组的项目', 'array<{src: string, name: string}>', '-', '-'],
        ['size', '头像组的尺寸', 'string', 'default', 'large | default | small'],
        ['square', '是否为方形', 'boolean', 'false', '-'],
        ['max', '最大显示个数', 'number | string', '-', '-'],
    ]">
</ApiTable>

## 头像 (Avatar) 事件

<ApiTable title="头像 (Avatar) 事件"
    :headers="['事件', '描述']"
    :columns="[
        ['on-success', '成功加载图像时调用'],
        ['on-failed', '当图像加载失败时调用'],
    ]">
</ApiTable>

<script setup lang="ts">
const items = [
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 1' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 2' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 3' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 4' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 5' }
]
</script>