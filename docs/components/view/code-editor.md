---
title: 代码编辑器 (Code Editor)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCodeEditor` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCodeEditor v-model="value" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCodeEditor v-model="value" />
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度 (height)">
    <ShadcnCodeEditor v-model="value" :height="216" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCodeEditor v-model="value" :height="216" />
</template>
```

:::

## 配置 (config)

::: raw

<CodeRunner title="配置 (config)">
    <ShadcnCodeEditor v-model="value" :config="{language: 'javascript'}" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCodeEditor v-model="value" :config="{language: 'javascript'}" />
</template>
```

:::

## 自动完成 (auto-completion)

::: raw

<CodeRunner title="Auto Completion">
    <ShadcnCodeEditor v-model="value"
                      :auto-complete-config="{
                          endpoint: 'http://jsonplaceholder.typicode.com/posts',
                          method: 'GET',
                          trigger: ['.', '@'],
                          transform: (data: any) => {
                            return data.map((item: any) => ({
                              label: item.title,
                              insertText: item.body,
                              detail: item.title
                            }))
                          },
                          // requestParams: (context) => ({
                          //     word: context.word,
                          //     line: context.position.lineNumber.toString()
                          // }),
                          // requestBody: (context) => ({
                          //     code: context.modelValue,
                          //     position: context.position
                          // })
                        }"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<ShadcnCodeEditor v-model="value"
                      :auto-complete-config="{
                          endpoint: 'http://jsonplaceholder.typicode.com/posts',
                          method: 'GET',
                          trigger: ['.', '@'],
                          transform: (data: any) => {
                            return data.map((item: any) => ({
                              label: item.title,
                              insertText: item.body,
                              detail: item.title
                            }))
                          },
                          // requestParams: (context) => ({
                          //     word: context.word,
                          //     line: context.position.lineNumber.toString()
                          // }),
                          // requestBody: (context) => ({
                          //     code: context.modelValue,
                          //     position: context.position
                          // })
                        }"/>
```

:::

## 右键菜单 (context-menu)

::: raw

<CodeRunner title="Context Menu">
    <ShadcnCodeEditor v-model="value"
                      :context-menu-config="{
                           showDefaultItems: true,
                           items: [{
                              label: 'Format Code',
                              icon: 'Save',
                              action: ({ editor, selection}) => {
                                console.log(editor.getModel()?.getValueInRange(selection))
                              }
                           }]
                      }"/>
</CodeRunner>

:::

::: details 查看代码

```vue
    <ShadcnCodeEditor v-model="value"
                      :context-menu-config="{
                           showDefaultItems: true,
                           items: [{
                              label: 'Format Code',
                              icon: 'Save',
                              action: ({ editor, selection}) => {
                                console.log(editor.getModel()?.getValueInRange(selection))
                              }
                           }]
                      }"/>
```

:::

## 搜索 (search)

::: raw

<CodeRunner title="搜索 (search)">
    <ShadcnCodeEditor v-model="value"
                      :search-config="{
                            caseSensitive: false,
                            replace: true
                      }"/>
</CodeRunner>

:::

::: details 查看代码

```vue
    <ShadcnCodeEditor v-model="value"
                      :search-config="{
                            caseSensitive: false,
                            replace: true
                      }"/>
```

:::

## 代码编辑器 (Code Editor) 属性

<ApiTable title="代码编辑器 (Code Editor) 属性"
:headers="['属性', '描述', '类型', '默认值']"
:columns="[
['modelValue', '组件的值', 'string', '-'],
['height', '组件的高度', 'number', '300'],
['config', '参考 monaco.editor.IStandaloneEditorConstructionOptions', 'any', '{}'],
['autoCompleteConfig', '参考 CodeEditorAutoCompleteProps', 'any', '{}'],
['contextMenuConfig', '参考 CodeEditorContextMenuProps', 'any', '{}'],
['searchConfig', '参考 CodeEditorSearchProps', 'any', '{}'],
]">
</ApiTable>

## 代码编辑器 (Code Editor) 事件

<ApiTable title="代码编辑器 (Code Editor) 事件"
:headers="['事件', '描述', '回调参数']"
:columns="[
['update:modelValue', '数据更新后触发', 'string'],
['on-change', '数据更新后触发', 'string'],
['on-created', '编辑器创建后触发', 'monaco.editor.IStandaloneCodeEditor'],
['on-focus', '编辑器聚焦后触发', 'monaco.editor.IStandaloneCodeEditor'],
['on-blur', '编辑器失焦后触发', 'monaco.editor.IStandaloneCodeEditor']
]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const value = ref('Hello View Shadcn UI')
</script>