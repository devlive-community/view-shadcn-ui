---
title: Shadcn Global Footer
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnGlobalFooter component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnGlobalFooter :links="links" :socials="socials"/>
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

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['company', 'The company name', 'String', 'Devlive Community'],
        ['description', 'The description', 'String', 'The Devlive Software Foundation is a community of developers who are passionate about creating innovative software solutions.'],
        ['links', 'The link groups', 'Array', '[]'],
        ['socials', 'The socials', 'Array', '[]'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['logo', 'Logo slot'],
        ['copyright', 'Copyright slot'],
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
</script>
