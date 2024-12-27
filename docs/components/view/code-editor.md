---
title: Shadcn CodeEditor
---

# Introduction

This document describes the features and usage of the ShadcnCodeEditor component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnCodeEditor v-model="value" />
</CodeRunner>

:::

::: details Show code

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

::: details Show code

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

::: details Show code

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

::: details Show code

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

::: details Show code

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

::: details Show code

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
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '-', '-'],
        ['height', 'height value', 'number', '300', '-'],
        ['config', 'see monaco.editor.IStandaloneEditorConstructionOptions', 'any', '{}', '-'],
        ['autoCompleteConfig', 'see CodeEditorAutoCompleteProps', 'any', '{}', '-'],
        ['contextMenuConfig', 'see CodeEditorContextMenuProps', 'any', '{}', '-'],
        ['searchConfig', 'see CodeEditorSearchProps', 'any', '{}', '-'],
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>
