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

## Type

<CodeRunner title="Type">
    <ShadcnSpace wrap>
        <ShadcnTab type="primary">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="success">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="warning">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="error">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
    </ShadcnSpace>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab type="primary">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="success">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="warning">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="error">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

<CodeRunner title="Size">
    <ShadcnTab size="default">
        <ShadcnTabItem label="Default 1" value="Default 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 2" value="Default 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 3" value="Default 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab size="small">
        <ShadcnTabItem label="Small 1" value="Small 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 2" value="Small 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 3" value="Small 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab size="default">
        <ShadcnTabItem label="Default 1" value="Default 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 2" value="Default 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 3" value="Default 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab size="small">
        <ShadcnTabItem label="Small 1" value="Small 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 2" value="Small 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 3" value="Small 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Icon

<CodeRunner title="Icon">
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" icon="Save" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" icon="Save" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Card

<CodeRunner title="Card">
    <ShadcnTab type="primary" card>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab type="primary" card>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Closeable

<CodeRunner title="Closeable">
    <ShadcnTab closable>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab closable>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Extra

<CodeRunner title="Extra">
    <ShadcnTab>
        <template #extra>Close</template>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab>
        <template #extra>Close</template>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Direction

<CodeRunner title="Position">
    <ShadcnTab direction="vertical">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab direction="vertical">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Position

<CodeRunner title="Position">
    <ShadcnTab direction="vertical" position="left">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab direction="vertical" position="right">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnTab direction="vertical" position="left">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab direction="vertical" position="right">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Tab Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the active tab', 'String', '-', '-', '-'],
        ['type', 'The type of the tab', 'String', 'primary', '-', 'primary | success | warning | error'],
        ['size', 'The size of the tab', 'String', 'default', '-', 'default | small'],
        ['card', 'Whether the tab is a card', 'Boolean', 'false', '-', '-'],
        ['closable', 'Whether the tab is closable', 'Boolean', 'false', '-', '-'],
        ['direction', 'The direction of the tab', 'String', 'horizontal', '-', 'horizontal | vertical'],
        ['position', 'The position of the tab', 'String', 'top', '-', 'left | right'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tab Item Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['label', 'The label of the tab', 'String', '-', '-', '-'],
        ['value', 'The value of the tab', 'String', '-', '-', '-'],
        ['disabled', 'Whether the tab is disabled', 'Boolean', 'false', '-', '-'],
        ['icon', 'The icon of the tab', 'String', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tab Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Emitted when the active tab changes', 'String'],
        ['on-tab-remove', 'Emitted when the tab is removed', 'String'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tab Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['extra', 'Extra slot'],
    ]">
</ApiTable>
