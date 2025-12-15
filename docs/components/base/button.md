---
title: 按钮 (Button)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnButton` 组件的一些功能和用法。

## 类型 (type)

::: raw

<CodeRunner title="按钮类型">
    <ShadcnButton type="primary" :dark="darkMode">Primary</ShadcnButton>
    <ShadcnButton type="success" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton type="warning" :dark="darkMode">Warning</ShadcnButton>
    <ShadcnButton type="danger" :dark="darkMode">Danger</ShadcnButton>
    <ShadcnButton type="info" :dark="darkMode">Info</ShadcnButton>
    <ShadcnButton type="text" :dark="darkMode">Text</ShadcnButton>
    <ShadcnButton type="default" :dark="darkMode">Default</ShadcnButton>
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
    <ShadcnButton size="small" :dark="darkMode">Small</ShadcnButton>
    <ShadcnButton size="default" :dark="darkMode">Default</ShadcnButton>
    <ShadcnButton size="large" :dark="darkMode">Large</ShadcnButton>
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
    <ShadcnButton :dark="darkMode">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon
    </ShadcnButton>
    <ShadcnButton type="success" :dark="darkMode">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type
    </ShadcnButton>
    <ShadcnButton type="success" size="small" :dark="darkMode">
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
    <ShadcnButton round :dark="darkMode">Round</ShadcnButton>
    <ShadcnButton type="danger" round :dark="darkMode">Round + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" round :dark="darkMode">Round + Type + Size</ShadcnButton>
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
    <ShadcnButton disabled :dark="darkMode">Disabled</ShadcnButton>
    <ShadcnButton type="danger" disabled :dark="darkMode">Disabled + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" disabled :dark="darkMode">Disabled + Type + Size</ShadcnButton>
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
    <ShadcnButton circle size="large" :dark="darkMode"></ShadcnButton>
    <ShadcnButton type="danger" circle :dark="darkMode"></ShadcnButton>
    <ShadcnButton type="success" size="small" circle :dark="darkMode"></ShadcnButton>
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
    <ShadcnButton loading :dark="darkMode">Loading</ShadcnButton>
    <ShadcnButton type="success" loading :dark="darkMode">Loading + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" loading :dark="darkMode">Loading + Type + Size</ShadcnButton>
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
    <ShadcnButton color="red" :dark="darkMode">Red</ShadcnButton>
    <ShadcnButton type="danger" color="red" :dark="darkMode">Red + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" color="red" :dark="darkMode">Red + Type + Size</ShadcnButton>
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
    <ShadcnButton type="primary" ghost :dark="darkMode">Primary</ShadcnButton>
    <ShadcnButton type="success" ghost :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton type="warning" ghost :dark="darkMode">Warning</ShadcnButton>
    <ShadcnButton type="danger" ghost :dark="darkMode">Danger</ShadcnButton>
    <ShadcnButton type="info" ghost :dark="darkMode">Info</ShadcnButton>
    <ShadcnButton type="text" ghost :dark="darkMode">Text</ShadcnButton>
    <ShadcnButton type="default" ghost :dark="darkMode">Default</ShadcnButton>
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
    <ShadcnButtonGroup :dark="darkMode">
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
    <ShadcnButtonGroup direction="vertical" :dark="darkMode">
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

## 液态玻璃效果 (Glass)

::: raw

<CodeRunner title="液态玻璃效果 (Glass)">
  <div :class="['h-32 rounded-lg flex items-center justify-center gap-4', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
    <ShadcnButton glass :dark="darkMode" type="primary">Primary</ShadcnButton>
    <ShadcnButton glass :dark="darkMode" type="success">Success</ShadcnButton>
    <ShadcnButton glass :dark="darkMode" type="warning">Warning</ShadcnButton>
    <ShadcnButton glass :dark="darkMode" type="danger">Danger</ShadcnButton>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton glass type="primary">Primary</ShadcnButton>
    <ShadcnButton glass type="success">Success</ShadcnButton>
    <ShadcnButton glass type="warning">Warning</ShadcnButton>
    <ShadcnButton glass type="danger">Danger</ShadcnButton>
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
                ['dark', '暗黑模式', 'boolean', 'false', '-'],
                ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
            ]">
</ApiTable>

## 按钮组 (Button Group) 属性

<ApiTable title="按钮组 (Button Group) 属性"
            :headers="['属性', '描述', '类型', '默认值', '支持列表']"
            :columns="[
                ['size', '按钮组的大小', 'enum', 'default', 'small | default | large'],
                ['direction', '按钮组的方向', 'enum', 'horizontal', 'horizontal | vertical'],
                ['dark', '暗黑模式', 'boolean', 'false', '-'],
                ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
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

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>