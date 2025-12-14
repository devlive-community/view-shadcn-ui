---
title: 全局页脚 (Global Footer)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnGlobalFooter` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnGlobalFooter :links="links" :socials="socials" :dark="darkMode"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnGlobalFooter :links="links" :socials="socials"/>
</template>

<script setup lang="ts">
const links = [
  {
    title: 'Link Group',
    links: [
      { label: 'Router link', href: '/features' },
      { label: 'External link', href: '/pricing', external: true },
      { label: 'External target link', href: '/docs', external: true, target: '_blank' }
    ]
  },
  {
    title: 'Link Group 2',
    links: [
      { label: 'Link icon', href: '/about', icon: 'User' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support', href: '/support' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' }
    ]
  }
]
const socials = [
  { icon: 'Github', href: 'https://github.com/devlive-community', label: 'GitHub' }
]
</script>
```

:::

## 全局页脚 (Global Footer) 属性

<ApiTable title="全局页脚 (Global Footer) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['company', '公司名称', 'string', 'Devlive Community'],
        ['description', '描述', 'string', 'The Devlive Software Foundation is a community of developers who are passionate about creating innovative software solutions.'],
        ['links', '链接组，3列', 'array', '\[\]'],
        ['socials', '社交链接', 'array', '\[\]'],
    ]">
</ApiTable>

## 全局页脚 (Global Footer) 插槽

<ApiTable title="全局页脚 (Global Footer) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['logo', 'Logo 图标'],
        ['copyright', '版权信息'],
    ]">
</ApiTable>

<script setup lang="ts">
const links = [
  {
    title: 'Link Group',
    links: [
      { label: 'Router link', href: '/features' },
      { label: 'External link', href: '/pricing', external: true },
      { label: 'External target link', href: '/docs', external: true, target: '_blank' }
    ]
  },
  {
    title: 'Link Group 2',
    links: [
      { label: 'Link icon', href: '/about', icon: 'User' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support', href: '/support' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' }
    ]
  }
]
const socials = [
  { icon: 'Github', href: 'https://github.com/devlive-community', label: 'GitHub' }
]

import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>