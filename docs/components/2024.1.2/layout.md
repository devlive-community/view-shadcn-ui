---
title: Shadcn Layout
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLayout component.

- ShadcnLayout
- ShadcnLayoutHeader
- ShadcnLayoutContent
- ShadcnLayoutFooter
- ShadcnLayoutSider
- ShadcnLayoutWrapper
- ShadcnLayoutMain

## Usage

<CodeRunner title="Usage">
    <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details Show code

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## Sider

<CodeRunner title="Sider">
    <ShadcnLayout>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
            <ShadcnLayoutMain>
                <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
                <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
                <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
            </ShadcnLayoutMain>
        </ShadcnLayoutWrapper>
    </ShadcnLayout>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnLayout>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
            <ShadcnLayoutMain>
                <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
                <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
                <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
            </ShadcnLayoutMain>
        </ShadcnLayoutWrapper>
    </ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## Layout

<CodeRunner title="Layout">
    <div class="my-4 ml-2">Header + Content + Footer</div>
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
    <div class="my-4">Sider + (Header + Content + Footer)</div>
    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
    <div class="my-4">(Header + Content + Footer) + Sider</div>
    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
    <div class="my-4">Header + (Sider + Content) + Footer</div>
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
    <div class="my-4">Header + (Content + Sider) + Footer</div>
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details Show code

```vue
<template>
<div>Header + Content + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
<div>Sider + (Header + Content + Footer)</div>
<ShadcnLayout>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
            <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
    </ShadcnLayoutWrapper>
</ShadcnLayout>
<div>(Header + Content + Footer) + Sider</div>
<ShadcnLayout>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
            <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
    </ShadcnLayoutWrapper>
</ShadcnLayout>
<div>Header + (Sider + Content) + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
    </ShadcnLayoutWrapper>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
<div>Header + (Content + Sider) + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        </ShadcnLayoutWrapper>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::
