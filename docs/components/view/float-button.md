---
title: Shadcn FloatButton
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnFloatButton component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnFloatButton circle>
        <ShadcnIcon icon="Save" />
    </ShadcnFloatButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnFloatButton circle>
        <ShadcnIcon icon="Save" />
    </ShadcnFloatButton>
</template>
```

:::

## Menu

::: raw

<CodeRunner title="Menu">
    <ShadcnFloatButton circle right="120">
        Hover Menu
        <template #menu>
            <div class="p-2">
              <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 1</div>
              <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 2</div>
              <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 3</div>
            </div>
        </template>
    </ShadcnFloatButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnFloatButton circle right="120">
        <ShadcnIcon icon="Save" />
        <template #menu>
            <div class="p-2">
              <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 1</div>
              <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 2</div>
              <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 3</div>
            </div>
        </template>
    </ShadcnFloatButton>
</template>
```

:::

## FloatButton Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['position', 'The position of the float button', 'enum', 'bottom-right', 'top-right | top-left | bottom-right | bottom-left'],
        ['circle', 'Whether the float button is a circle', 'boolean', 'false', '-'],
        ['top', 'The top position of the float button', 'number | string', '40', '-'],
        ['right', 'The right position of the float button', 'number | string', '40', '-'],
        ['bottom', 'The bottom position of the float button', 'number | string', '40', '-'],
        ['left', 'The left position of the float button', 'number | string', '40', '-'],
        ['trigger', 'The trigger of the float button', 'enum', 'hover', 'click | hover'],
    ]">
</ApiTable>

## FloatButton Slots

<ApiTable title="Slots"
    :headers="['Name', 'Description']"
    :columns="[
        ['icon', 'The icon slot'],
        ['menu', 'The menu slot'],
    ]">
</ApiTable>

## FloatButton Emits

<ApiTable title="Emits"
    :headers="['Name', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-menu-visible', 'Triggered when the menu is visible', 'boolean'],
    ]">
</ApiTable>
