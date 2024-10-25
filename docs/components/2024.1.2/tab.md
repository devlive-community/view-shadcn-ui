---
title: Shadcn Tab
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTab and ShadcnTabItem component.

## Usage

<CodeRunner title="Usage">
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">
            <p>Tab 2 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">
            <p>Tab 2 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>
            <p>Tab 2 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">
            <p>Tab 3 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>
            <p>Tab 2 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">
            <p>Tab 3 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Tab Item Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['label', 'The label of the tab', 'String', '-', '-', '-'],
        ['value', 'The value of the tab', 'String', '-', '-', '-'],
        ['disabled', 'Whether the tab is disabled', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>
