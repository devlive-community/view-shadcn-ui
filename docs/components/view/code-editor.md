---
title: Shadcn CodeEditor
---

# 介绍

This document describes the features and usage of the ShadcnCodeEditor component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCodeEditor v-model="value" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCodeEditor v-model="value" />
</template>
```

:::

## Height

::: raw

<CodeRunner title="Height">
    <ShadcnCodeEditor v-model="value" :height="216" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCodeEditor v-model="value" :height="216" />
</template>
```

:::

## Config

::: raw

<CodeRunner title="Config">
    <ShadcnCodeEditor v-model="value" :config="{language: 'javascript'}" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCodeEditor v-model="value" :config="{language: 'javascript'}" />
</template>
```

:::

## Auto Completion

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

## Context Menu

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

## Search

::: raw

<CodeRunner title="Search">
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

## CodeEditor Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '-', '-'],
        ['height', 'height value', 'number', '300', '-'],
        ['config', 'see monaco.editor.IStandaloneEditorConstructionOptions', 'any', '{}', '-'],
        ['autoCompleteConfig', 'see CodeEditorAutoCompleteProps', 'any', '{}', '-'],
        ['contextMenuConfig', 'see CodeEditorContextMenuProps', 'any', '{}', '-'],
        ['searchConfig', 'see CodeEditorSearchProps', 'any', '{}', '-'],
    ]">
</ApiTable>

## CodeEditor Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', 'update modelValue value', 'string'],
        ['on-change', 'on change', 'string'],
        ['on-created', 'on created', 'monaco.editor.IStandaloneCodeEditor'],
        ['on-focus', 'on focus', 'monaco.editor.IStandaloneCodeEditor'],
        ['on-blur', 'on blur', 'monaco.editor.IStandaloneCodeEditor']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>
