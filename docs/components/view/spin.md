---
title: 旋转加载 (Spin)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnSpin` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnSpin  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin v-model="value"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const value = ref(false);
</script>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnSpin type="primary" :dark="darkMode" />
    <ShadcnSpin type="success" :dark="darkMode" />
    <ShadcnSpin type="error" :dark="darkMode" />
    <ShadcnSpin type="warning" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin type="primary" :dark="darkMode" />
    <ShadcnSpin type="success" :dark="darkMode" />
    <ShadcnSpin type="error" :dark="darkMode" />
    <ShadcnSpin type="warning" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnSpin type="primary" size="small" :dark="darkMode" />
    <ShadcnSpin type="success" size="default" :dark="darkMode" />
    <ShadcnSpin type="error" size="large" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin type="primary" size="small" :dark="darkMode" />
    <ShadcnSpin type="success" size="default" :dark="darkMode" />
    <ShadcnSpin type="error" size="large" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 固定 (fixed)

::: raw

<CodeRunner title="固定 (fixed)" warning="如果设置了 fixed，则父组件必须使用 position:relative">
    <ShadcnCard title="Spin" :dark="darkMode">
      <div class="relative h-32">
        <ShadcnSpin fixed :dark="darkMode" />
      </div>
    </ShadcnCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCard title="Spin" :dark="darkMode">
      <div class="relative min-h-[200px]">
        <ShadcnSpin fixed :dark="darkMode" />
      </div>
    </ShadcnCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 服务 ($Spin)

::: raw

<CodeRunner title="服务 ($Spin)">
    <ShadcnButton @click="showSpin" :dark="darkMode">Show Spin</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="showSpin" :dark="darkMode">Show Spin</ShadcnButton>
</template>

<script lang="ts">
export default {
    methods: {
          showSpin()
          {
                this.$Spin.show()
                setTimeout(() => {
                    this.$Spin.hide()
                }, 3000)
          }
    }
}
</script>
```

:::

## 旋转加载 (Spin) 属性

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'boolean', 'false', '-'],
        ['type', '组件的类型', 'enum', 'primary', 'primary | success | warning | error'],
        ['size', '组件的尺寸', 'enum', 'default', 'default | small | large'],
        ['fixed', '是否固定在父组件上，父组件必须使用 <code>position: relative</code>', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 旋转加载 (Spin) 插槽

<ApiTable title="旋转加载 (Spin) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '内容，如果设置，类型和大小将不起作用'],
    ]">
</ApiTable>

## 旋转加载 (Spin) 事件

<ApiTable title="旋转加载 (Spin) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '组件的值修改后触发', 'boolean'],
    ]">
</ApiTable>

<script lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
export default {
    setup() {
        const { isDark } = useData()
        const darkMode = computed(() => isDark.value)

return {darkMode}
    },
    methods: {
          showSpin()
          {
                this.$Spin.show()
                setTimeout(() => {
                    this.$Spin.hide()
                }, 3000)
          }
    }
}
</script>