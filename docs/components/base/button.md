---
title: 按钮 (Button)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnButton` 组件的一些功能和用法。

## 类型 (type)

::: raw

<CodeRunner title="按钮类型">
    <ShadcnButton type="primary">Primary</ShadcnButton>
    <ShadcnButton type="success">Success</ShadcnButton>
    <ShadcnButton type="warning">Warning</ShadcnButton>
    <ShadcnButton type="danger">Danger</ShadcnButton>
    <ShadcnButton type="info">Info</ShadcnButton>
    <ShadcnButton type="text">Text</ShadcnButton>
    <ShadcnButton type="default">Default</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton type="primary">Primary</ShadcnButton>
    <ShadcnButton type="success">Success</ShadcnButton>
    <ShadcnButton type="warning">Warning</ShadcnButton>
    <ShadcnButton type="danger">Danger</ShadcnButton>
    <ShadcnButton type="info">Info</ShadcnButton>
    <ShadcnButton type="text">Text</ShadcnButton>
    <ShadcnButton type="default">Default</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="按钮尺寸">
    <ShadcnButton size="small">Small</ShadcnButton>
    <ShadcnButton size="default">Default</ShadcnButton>
    <ShadcnButton size="large">Large</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton size="small">Small</ShadcnButton>
    <ShadcnButton size="default">Default</ShadcnButton>
    <ShadcnButton size="large">Large</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 图标 (icon)

::: raw

<CodeRunner title="图标按钮">
    <ShadcnButton>
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon
    </ShadcnButton>
    <ShadcnButton type="success">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type
    </ShadcnButton>
    <ShadcnButton type="success" size="small">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type + Size
    </ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton>
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon
    </ShadcnButton>
    <ShadcnButton type="success">   
        <template #icon>            
            <ShadcnIcon icon="Save"/>        
        </template>
        Icon + Type
    </ShadcnButton>
    <ShadcnButton type="success" size="small">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type + Size
    </ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 圆角 (round)

::: raw

<CodeRunner title="圆角按钮">
    <ShadcnButton round>Round</ShadcnButton>
    <ShadcnButton type="danger" round>Round + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" round>Round + Type + Size</ShadcnButton>
</CodeRunner> 

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton round>Round</ShadcnButton>
    <ShadcnButton type="danger" round>Round + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" round>Round + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用按钮">
    <ShadcnButton disabled>Disabled</ShadcnButton>
    <ShadcnButton type="danger" disabled>Disabled + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" disabled>Disabled + Type + Size</ShadcnButton>
</CodeRunner> 

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton disabled>Disabled</ShadcnButton>
    <ShadcnButton type="danger" disabled>Disabled + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" disabled>Disabled + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 圆形 (circle)

::: raw

<CodeRunner title="圆形按钮">
    <ShadcnButton circle size="large"></ShadcnButton>
    <ShadcnButton type="danger" circle></ShadcnButton>
    <ShadcnButton type="success" size="small" circle></ShadcnButton>
</CodeRunner> 

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton circle size="large"></ShadcnButton>
    <ShadcnButton type="danger" circle></ShadcnButton>
    <ShadcnButton type="success" size="small" circle></ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 加载 (loading)

::: raw

<CodeRunner title="加载按钮">
    <ShadcnButton loading>Loading</ShadcnButton>    
    <ShadcnButton type="success" loading>Loading + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" loading>Loading + Type + Size</ShadcnButton>
</CodeRunner> 

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton loading>Loading</ShadcnButton>
    <ShadcnButton type="success" loading>Loading + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" loading>Loading + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 颜色 (color)

::: raw

<CodeRunner title="自定义颜色">
    <ShadcnButton color="red">Red</ShadcnButton>
    <ShadcnButton type="danger" color="red">Red + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" color="red">Red + Type + Size</ShadcnButton>
</CodeRunner> 

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton color="red">Red</ShadcnButton>
    <ShadcnButton type="danger" color="red">Red + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" color="red">Red + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 幽灵 (ghost)

::: raw

<CodeRunner title="幽灵按钮">
    <ShadcnButton type="primary" ghost>Primary</ShadcnButton>
    <ShadcnButton type="success" ghost>Success</ShadcnButton>
    <ShadcnButton type="warning" ghost>Warning</ShadcnButton>
    <ShadcnButton type="danger" ghost>Danger</ShadcnButton>
    <ShadcnButton type="info" ghost>Info</ShadcnButton>
    <ShadcnButton type="text" ghost>Text</ShadcnButton>
    <ShadcnButton type="default" ghost>Default</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton type="primary" ghost>Primary</ShadcnButton>
    <ShadcnButton type="success" ghost>Success</ShadcnButton>
    <ShadcnButton type="warning" ghost>Warning</ShadcnButton>
    <ShadcnButton type="danger" ghost>Danger</ShadcnButton>
    <ShadcnButton type="info" ghost>Info</ShadcnButton>
    <ShadcnButton type="text" ghost>Text</ShadcnButton>
    <ShadcnButton type="default" ghost>Default</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## 按钮组 (group)

::: raw

<CodeRunner title="按钮组">
    <ShadcnButtonGroup>
      <ShadcnButton>Left</ShadcnButton>
      <ShadcnButton>Middle</ShadcnButton>
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnButtonGroup>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButtonGroup>
      <ShadcnButton>Left</ShadcnButton>
      <ShadcnButton>Middle</ShadcnButton>
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnButtonGroup>
</template>

<script setup lang="ts">
</script>
```

:::

## 按钮组方向 (direction)

::: raw

<CodeRunner title="按钮组方向">
    <ShadcnButtonGroup direction="vertical">
        <ShadcnButton type="primary">T</ShadcnButton>
        <ShadcnButton type="primary">C</ShadcnButton>
        <ShadcnButton type="primary">B</ShadcnButton>
    </ShadcnButtonGroup>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButtonGroup direction="vertical">
        <ShadcnButton type="primary">T</ShadcnButton>
        <ShadcnButton type="primary">C</ShadcnButton>
        <ShadcnButton type="primary">B</ShadcnButton>
    </ShadcnButtonGroup>
</template>

<script setup lang="ts">
</script>
```

:::

## 按钮 (Button) 属性

<ApiTable title="按钮 (Button) 属性" 
            :headers="['属性', '描述', '类型', '默认值', '支持列表']"
            :columns="[
                ['text', '按钮文本', 'string', '-', '-'],
                ['size', '按钮尺寸', 'enum', 'default', 'small | default | large'],
                ['type', '按钮类型', 'enum', 'primary', 'primary | success | warning | danger | info | text | default'],
                ['round', '是否添加周围的圆角', 'boolean', 'false', '-'],
                ['circle', '是否创建圆形按钮', 'boolean', 'false', '-'],
                ['loading', '是否显示加载状态', 'boolean', 'false', '-'],
                ['color', '自定义颜色，支持所有颜色，并自动计算使用的悬停等色差', 'string', '-', '所有支持的颜色值'],
                ['ghost', '是否为幽灵按钮', 'boolean', 'false', '-'],
                ['disabled', '是否禁用按钮', 'boolean', 'false', '-'],
                ['submit', '是否提交触发表单按钮', 'boolean', 'false', '-'],
                ['reset', '是否重置触发表单按钮', 'boolean', 'false', '-'],
                ['to', '要导航到的路径，仅在路由模式下受支持', 'string', '-', '-'],
            ]">
</ApiTable>

## 按钮组 (Button Group) 属性

<ApiTable title="按钮组 (Button Group) 属性"
            :headers="['属性', '描述', '类型', '默认值', '支持列表']"
            :columns="[
                ['size', '按钮组的大小', 'enum', 'default', 'small | default | large'],
                ['direction', '按钮组的方向', 'enum', 'horizontal', 'horizontal | vertical'],
            ]">
</ApiTable>

## 按钮 (Button) 事件

<ApiTable title="按钮 (Button) 事件" 
            :headers="['事件', '描述', '回调参数']" 
            :columns="[
                ['click', '点击事件', 'event'],
            ]">
</ApiTable>

## 按钮 (Button) 插槽

<ApiTable title="按钮 (Button) 插槽" 
            :headers="['插槽', '描述']" 
            :columns="[
                ['default', '默认插槽'],
                ['icon', '图标插槽'],
                ['loading', '加载状态插槽'],
            ]">
</ApiTable>