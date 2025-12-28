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

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果 (glass)">
    <div :class="['p-8 rounded-lg', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <div :class="['rounded-lg overflow-hidden', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
            <ShadcnGlobalFooter
                glass
                :dark="darkMode"
                company="Your Company"
                description="为开发者提供优质的组件库和工具"
                :links="glassLinks"
                :socials="glassSocials"
            />
        </div>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <div class="p-8 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
        <div class="rounded-lg overflow-hidden bg-white/50">
            <ShadcnGlobalFooter
                glass
                company="Your Company"
                description="为开发者提供优质的组件库和工具"
                :links="footerLinks"
                :socials="footerSocials"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    title: '产品',
    links: [
      { label: '功能', href: '#', icon: 'lucide:sparkles' },
      { label: '定价', href: '#', icon: 'lucide:dollar-sign' },
      { label: '更新日志', href: '#', icon: 'lucide:history' }
    ]
  },
  {
    title: '资源',
    links: [
      { label: '文档', href: '#', icon: 'lucide:book-open' },
      { label: 'API', href: '#', icon: 'lucide:code' },
      { label: '博客', href: '#', icon: 'lucide:newspaper' }
    ]
  },
  {
    title: '社区',
    links: [
      { label: 'GitHub', href: 'https://github.com', icon: 'lucide:github', external: true },
      { label: 'Discord', href: '#', icon: 'lucide:message-circle' },
      { label: '论坛', href: '#', icon: 'lucide:users' }
    ]
  }
]

const footerSocials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'lucide:github' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'lucide:twitter' },
  { label: 'Discord', href: '#', icon: 'lucide:message-circle' }
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
        ['dark', '是否为暗黑模式', 'boolean', 'false'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false'],
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

const glassLinks = [
  {
    title: '产品',
    links: [
      { label: '功能', href: '#', icon: 'lucide:sparkles' },
      { label: '定价', href: '#', icon: 'lucide:dollar-sign' },
      { label: '更新日志', href: '#', icon: 'lucide:history' }
    ]
  },
  {
    title: '资源',
    links: [
      { label: '文档', href: '#', icon: 'lucide:book-open' },
      { label: 'API', href: '#', icon: 'lucide:code' },
      { label: '博客', href: '#', icon: 'lucide:newspaper' }
    ]
  },
  {
    title: '社区',
    links: [
      { label: 'GitHub', href: 'https://github.com', icon: 'lucide:github', external: true },
      { label: 'Discord', href: '#', icon: 'lucide:message-circle' },
      { label: '论坛', href: '#', icon: 'lucide:users' }
    ]
  }
]

const glassSocials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'lucide:github' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'lucide:twitter' },
  { label: 'Discord', href: '#', icon: 'lucide:message-circle' }
]

import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>