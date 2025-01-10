---
title: Shadcn Avatar
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnAvatar component.

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

## Alt Text

<CodeRunner title="Alt Text">
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

## Square

<CodeRunner title="Square">
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

## Props

<ApiTable title="Avatar Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['src', 'Image URL', 'String', '-', '-'],
        ['alt', 'Alternative text', 'String', '-', '-'],
        ['size', 'Size', 'String', 'default', 'large | default | small'],
        ['square', 'Square', 'Boolean', 'false', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Avatar Group Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['items', 'The items of the avatar group', 'array<{src: string, name: string}>', '-', '-'],
        ['size', 'The size of the avatar group', 'string', 'default', 'large | default | small'],
        ['square', 'Whether the avatar group is square', 'boolean', 'false', '-'],
        ['max', 'The maximum number of avatars to display', 'number | stringgit', '-', '-'],
    ]">
</ApiTable>

## Events

<ApiTable title="Avatar Events"
    :headers="['Event', 'Description']"
    :columns="[
        ['on-success', 'Called when the image is successfully loaded'],
        ['on-failed', 'Called when the image fails to load'],
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
