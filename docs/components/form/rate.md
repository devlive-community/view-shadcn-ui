---
title: 评分 (Rate)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnRate` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate"  :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


const rate = ref(1)
</script>
```

:::

## 最大值 (max)

<CodeRunner title="最大值 (max)">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" max="10"  :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" max="10"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## 允许半选 (allow-half)

<CodeRunner title="允许半选 (allow-half)">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" allow-half  :dark="darkMode" />
    <p>Custom Character</p>
    <ShadcnRate v-model="rate" allow-half :dark="darkMode">
        <template #character>Love</template>
    </ShadcnRate>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" allow-half  :dark="darkMode" />
    <ShadcnRate v-model="rate" allow-half :dark="darkMode">
        <template #character>Love</template>
    </ShadcnRate>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    Rate Value: {{ rate }}
    <ShadcnSpace wrap :dark="darkMode">
        <ShadcnRate v-model="rate" max="10" type="primary" :dark="darkMode" />
        <ShadcnRate v-model="rate" max="10" type="success" :dark="darkMode" />
        <ShadcnRate v-model="rate" max="10" type="warning" :dark="darkMode" />
        <ShadcnRate v-model="rate" max="10" allow-half type="error" :dark="darkMode" />
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" max="10" type="primary" :dark="darkMode" />
    <ShadcnRate v-model="rate" max="10" type="success" :dark="darkMode" />
    <ShadcnRate v-model="rate" max="10" type="warning" :dark="darkMode" />
    <ShadcnRate v-model="rate" max="10" allow-half type="error" :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" disabled  :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" disabled  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## 显示文本 (show-text)

<CodeRunner title="Show Text">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" show-text  :dark="darkMode" />
    <p>Custom Text</p>
    <ShadcnRate v-model="rate" show-text :dark="darkMode">
        <template #text>Love</template>
    </ShadcnRate>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" show-text  :dark="darkMode" />
    <ShadcnRate v-model="rate" show-text :dark="darkMode">
        <template #text>Love</template>
    </ShadcnRate>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## 评分 (Rate) 属性

<ApiTable title="评分 (Rate) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'number', '0', '-'],
        ['max', '组件的最大值', 'number', '5', '-'],
        ['allowHalf', '是否允许半选', 'boolean', 'false', '-'],
        ['type', '组件的类型', 'string', 'default', 'primary | success | warning | error'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['showText', '是否显示文本', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 评分 (Rate) 插槽

<ApiTable title="评分 (Rate) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['character', '组件的字符'],
        ['text', '组件的文本'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress' 
import { computed } from 'vue' 
const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const rate = ref(1)
</script>