---
title: 跑马灯 (Marquee)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnMarquee` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法" codeKey="marquee-usage">
    <ShadcnMarquee :dark="darkMode">
        <ShadcnText :dark="darkMode">Shadcn UI</ShadcnText>
    </ShadcnMarquee>
</CodeRunner>

:::

## 滚动速度 (speed)

::: raw

<CodeRunner title="滚动速度 (speed)" codeKey="marquee-speed">
    <ShadcnMarquee speed="10" :dark="darkMode">
        <ShadcnText :dark="darkMode">Shadcn UI</ShadcnText>
    </ShadcnMarquee>
</CodeRunner>

:::

## 重复次数 (repeat)

::: raw

<CodeRunner title="重复次数 (repeat)" codeKey="marquee-repeat">
    <ShadcnMarquee repeat="3" :dark="darkMode">
        <ShadcnText :dark="darkMode">Shadcn UI</ShadcnText>
    </ShadcnMarquee>
</CodeRunner>

:::

## 跑马灯 (Marquee) 属性

<ApiTable title="跑马灯 (Marquee) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
      ['speed', '跑马灯的滚动速度', 'number', '10'],
      ['repeat', '跑马灯的重复次数，-1 表示无限循环', 'number', '-1'],
    ]">
</ApiTable>

## 跑马灯 (Marquee) 事件

<ApiTable title="跑马灯 (Marquee) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
      ['on-complete', '跑马灯完成时触发', '-'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>