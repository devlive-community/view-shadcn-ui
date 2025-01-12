---
title: 数据表格 (Data Table)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDataTable` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnDataTable :columns="columns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref<any[]>([
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄' },
  { key: 'address', label: '地址' }
])

const data = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' }
])

const handleChange = () => {
  console.log('表格数据发生变化')
}
</script>