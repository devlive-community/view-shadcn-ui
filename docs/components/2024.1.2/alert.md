---
title: Shadcn Alert
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnAlert component.

## Usage

<CodeRunner title="Usage">
    <ShadcnAlert>Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Title

<CodeRunner title="Title">
    <ShadcnAlert title="Title">Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert title="Title">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Type

<CodeRunner title="Type">
    <div class="space-y-2">
        <ShadcnAlert type="info">Alert</ShadcnAlert>
        <ShadcnAlert type="success">Alert</ShadcnAlert>
        <ShadcnAlert type="warning">Alert</ShadcnAlert>
        <ShadcnAlert type="error">Alert</ShadcnAlert>
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert type="info">Alert</ShadcnAlert>
    <ShadcnAlert type="success">Alert</ShadcnAlert>
    <ShadcnAlert type="warning">Alert</ShadcnAlert>
    <ShadcnAlert type="error">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Icon

<CodeRunner title="Icon">
    <ShadcnAlert title="Title" show-icon>Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert title="Title" show-icon>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Banner

<CodeRunner title="Banner">
    <ShadcnAlert title="Title" banner>Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert title="Title" banner>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Closable

<CodeRunner title="Closable">
    <ShadcnAlert title="Title" closable>Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert title="Title" closable>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Alert Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['title', 'The title of the alert', 'String', '-', '-', '-'],
        ['type', 'The type of the alert', 'Enum', 'info', '-', 'info, success, warning, error'],
        ['show-icon', 'Whether to show the icon', 'Boolean', 'false', '-', '-'],
        ['banner', 'Whether to create a banner alert', 'Boolean', 'false', '-', '-'],
        ['closable', 'Whether to show the close button', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Alert Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['close', 'Close event', 'true | false'],
    ]">
</ApiTable>

<br />

<ApiTable title="Alert Slots"
    :headers="['Name', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'Default slot', '-'],
        ['icon', 'Icon slot', '-'],
        ['close', 'Close slot', '-'],
    ]">
</ApiTable>
