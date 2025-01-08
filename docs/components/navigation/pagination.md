---
title: 分页 (Pagination)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnPagination` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    数据值 : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" page-size="20"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" prev-text="P" next-text="N"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" max-show-page="8"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" show-total/>
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
    <ShadcnPagination v-model="defaultValue" total="100" show-sizer/>
    自定义
    <ShadcnPagination v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]"/>
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
import { ref } from 'vue'

const defaultValue = ref(1)
</script>