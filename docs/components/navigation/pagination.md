---
title: 分页 (Pagination)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnPagination` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## 每页大小 (page-size)

<CodeRunner title="每页大小 (page-size)">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100" page-size="20" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" page-size="20"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## 上下页文本 (prev-text, next-text)

<CodeRunner title="上下页文本 (prev-text, next-text)">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100" prev-text="P" next-text="N" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" prev-text="P" next-text="N"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## 最大页数 (max-show-page)

<CodeRunner title="最大页数 (max-show-page)">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100" max-show-page="8" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" max-show-page="8"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## 显示总数 (show-total)

<CodeRunner title="显示总数 (show-total)">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100" show-total :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" show-total/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## 页数选择器 (show-sizer)

<CodeRunner title="页数选择器 (show-sizer)">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100" show-sizer :dark="darkMode"/>
    自定义
    <ShadcnPagination v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination v-model="defaultValue" total="100" show-sizer/>
  <ShadcnPagination v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## 液态玻璃效果 (glass)
<CodeRunner title="液态玻璃效果 (glass)">
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50 flex flex-col items-center gap-6">
      数据值: {{glassValue1}}
      <ShadcnPagination glass :dark="darkMode" v-model="glassValue1" :total="100" />
      数据值: {{glassValue2}}
      <ShadcnPagination glass :dark="darkMode" v-model="glassValue2" :total="200" show-total />
      数据值: {{glassValue3}}
      <ShadcnPagination glass :dark="darkMode" v-model="glassValue3" :total="300" show-total show-sizer />
    </div>
  </div>
</CodeRunner>

:::

::: details 查看代码
```vue
<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50 flex flex-col items-center gap-6">
      <ShadcnPagination glass v-model="currentPage1" :total="100" />
      <ShadcnPagination glass v-model="currentPage2" :total="200" show-total />
      <ShadcnPagination glass v-model="currentPage3" :total="300" show-total show-sizer />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const currentPage1 = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
</script>
```
:::

## 分页 (Pagination) 属性

<ApiTable title="分页 (Pagination) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '当前页码', 'number | string', '1'],
        ['total', '数据总数', 'number | string', '100'],
        ['pageSize', '每页大小', 'number | string', '10'],
        ['prevText', '上一页文本', 'string', 'Prev Page'],
        ['nextText', '下一页文本', 'string', 'Next Page'],
        ['maxShowPage', '最大显示页数', 'number | string', '5'],
        ['showTotal', '是否显示项总数', 'boolean', 'false'],
        ['showSizer', '是否显示页数选择器', 'boolean', 'false'],
        ['sizerOptions', '页数选择器选项', 'array', '\[10, 20, 50, 100\]'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false'],
        ['dark', '是否启用暗黑模式', 'boolean', 'false'],
    ]">
</ApiTable>

## 分页 (Pagination) 事件

<ApiTable title="分页 (Pagination) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '更改页码时触发', 'number'],
        ['on-prev', '点击上一页按钮时触发', 'number'],
        ['on-next', '点击下一页按钮时触发', 'number'],
        ['on-change-size', '更改每页大小时触发', 'number'],
    ]">
</ApiTable>

## 分页 (Pagination) 插槽

<ApiTable title="分页 (Pagination) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['showTotal', '项总数的内容'],
        ['sizer', '页面大小选择器的内容'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const defaultValue = ref(1)
const glassValue1 = ref(1)
const glassValue2 = ref(1)
const glassValue3 = ref(1)
</script>