---
title: Shadcn Tooltip
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTooltip component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple tooltip.">
    <ShadcnTooltip content="This is a tooltip">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTooltip content="This is a tooltip">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## Delay

<CodeRunner title="Delay"
    description="Create a tooltip with delay.">
    <ShadcnTooltip content="This is a tooltip" :delay="500">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTooltip content="This is a tooltip" :delay="500">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## Position

<CodeRunner title="Position"
    description="Create a tooltip with custom position.">
    <ShadcnTooltip content="Position" position="top">
        <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom">
        <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left">
        <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="right">
        <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTooltip content="Position" position="top">
        <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom">
        <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left">
        <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="right">
        <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## Arrow

<CodeRunner title="Arrow"
    description="Create a tooltip with arrow.">
    <ShadcnTooltip content="Hello Shadcn UI" arrow>
        <ShadcnButton>Arrow</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Hello Shadcn UI" :arrow="false">
        <ShadcnButton>No Arrow</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTooltip content="Hello Shadcn UI" arrow>
        <ShadcnButton>Arrow</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Hello Shadcn UI" :arrow="false">
        <ShadcnButton>No Arrow</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom Content

<CodeRunner title="Custom Content"
    description="Create a tooltip with custom content.">
    <ShadcnTooltip>
        <template #content>Custom Content</template>
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTooltip>
        <template #content>Custom Content</template>
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Tooltip Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['content', 'The content of the tooltip', 'Object', '-', '-', '-'],
        ['delay', 'Delay time', 'Number', '0', '-', '-'],
        ['position', 'The position of the tooltip', 'Enum', 'top', '-', 'top, bottom, left, right'],
        ['arrow', 'Show arrow', 'Boolean', 'true', '-', '-']
    ]">
</ApiTable>

<br />

<ApiTable title="Modal Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Tooltip trigger'],
        ['content', 'Tooltip content'],
    ]">
</ApiTable>