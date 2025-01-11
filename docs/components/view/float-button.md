---
title: 浮动按钮 (Float Button)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnFloatButton` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
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

## 菜单 (menu)

::: raw

<CodeRunner title="菜单 (menu)">
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

## 浮动按钮 (Float Button) 属性

<ApiTable title="浮动按钮 (Float Button) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['position', '组件位置', 'enum', 'bottom-right', 'top-right | top-left | bottom-right | bottom-left'],
        ['circle', '是否圆形按钮', 'boolean', 'false', '-'],
        ['top', '按钮的顶部位置', 'number | string', '40', '-'],
        ['right', '按钮的右侧位置', 'number | string', '40', '-'],
        ['bottom', '按钮的底部位置', 'number | string', '40', '-'],
        ['left', '按钮的左侧位置', 'number | string', '40', '-'],
        ['trigger', '按钮触发方式', 'enum', 'hover', 'click | hover'],
    ]">
</ApiTable>

## 浮动按钮 (Float Button) 插槽

<ApiTable title="Slots"
    :headers="['插槽', '描述']"
    :columns="[
        ['icon', '图标插槽'],
        ['menu', '菜单插槽'],
    ]">
</ApiTable>

## 浮动按钮 (Float Button) 事件

<ApiTable title="Emits"
    :headers="['事件', '描述', '回调函数']"
    :columns="[
        ['on-menu-visible', '菜单是否可见时触发', 'boolean'],
    ]">
</ApiTable>