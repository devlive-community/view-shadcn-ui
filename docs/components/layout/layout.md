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
        <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
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
                <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
                <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
                <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
            </ShadcnLayoutMain>
        </ShadcnLayoutWrapper>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnLayout>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
            <ShadcnLayoutMain>
                <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
                <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
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
      <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
    <div class="my-4">Sider + (Header + Content + Footer)</div>
    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
    <div class="my-4">(Header + Content + Footer) + Sider</div>
    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
    <div class="my-4">Header + (Sider + Content) + Footer</div>
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
    <div class="my-4">Header + (Content + Sider) + Footer</div>
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
<div>Header + Content + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
<div>Sider + (Header + Content + Footer)</div>
<ShadcnLayout>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
            <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
    </ShadcnLayoutWrapper>
</ShadcnLayout>
<div>(Header + Content + Footer) + Sider</div>
<ShadcnLayout>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
            <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
            <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
    </ShadcnLayoutWrapper>
</ShadcnLayout>
<div>Header + (Sider + Content) + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
    <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
    </ShadcnLayoutWrapper>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
<div>Header + (Content + Sider) + Footer</div>
<ShadcnLayout>
    <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
        <ShadcnLayoutWrapper>
            <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
            <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        </ShadcnLayoutWrapper>
    <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
</ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## Trigger

<CodeRunner>
    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="bg-blue-100" collapsible :defaultCollapsed="false" trigger>
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <ShadcnIcon icon="Home"/>
              <span>Home</span>
            </div>
          </div>
          <template #collapsed>
            <div class="space-y-4">
              <div class="flex items-center space-x-2">
                <ShadcnIcon icon="Home"/>
              </div>
            </div>
          </template>
        </ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-100 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-500 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnLayout>
    <ShadcnLayoutWrapper>
      <ShadcnLayoutSider class="bg-blue-100" collapsible :defaultCollapsed="false" trigger>
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <ShadcnIcon icon="Home"/>
            <span>Home</span>
          </div>
        </div>

        <template #collapsed>
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <ShadcnIcon icon="Home"/>
            </div>
          </div>
        </template>
      </ShadcnLayoutSider>
      <ShadcnLayoutMain>
        <ShadcnLayoutHeader class="bg-blue-100 h-16">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-blue-500 flex-1">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-blue-400 h-24">Footer</ShadcnLayoutFooter>
      </ShadcnLayoutMain>
    </ShadcnLayoutWrapper>
  </ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Layout Sider Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['width', 'The width of the layout sider', 'Number | String', '200', '-', '-'],
        ['collapsedWidth', 'The width of the layout sider when collapsed', 'Number | String', '80', '-', '-'],
        ['collapsible', 'Whether the layout sider is collapsible', 'Boolean', 'false', '-', '-'],
        ['defaultCollapsed', 'The default state of the layout sider', 'Boolean', 'false', '-', '-'],
        ['trigger', 'The trigger of the layout sider', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Layout Sider Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-collapse', 'Emitted when the layout sider is collapsed', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Layout Sider Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['trigger', 'The trigger slot of the layout sider'],
    ]">
</ApiTable>
