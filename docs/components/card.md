---
title: Shadcn Card
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCard component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple card.">
    <ShadcnCard title="Title">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Description

<CodeRunner title="Description"
    description="Create a card with description.">
    <ShadcnCard title="Title" description="Description">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title" description="Description">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## No Title

<CodeRunner title="No Title"
    description="Create a card without title.">
    <ShadcnCard>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## No Content

<CodeRunner title="No Content"
    description="Create a card without content.">
    <ShadcnCard title="Title"></ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title"></ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Shadow

<CodeRunner title="Custom Title Class"
    description="Create a card with custom title class.">
    <div class="space-y-4">
        <ShadcnCard title="Shadow Never" shadow="never"/>
        <ShadcnCard title="Shadow Always" shadow="always"/>
        <ShadcnCard title="Shadow Hover" shadow="hover"/>
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <div class="space-y-4">
        <ShadcnCard title="Shadow Never" shadow="never"/>
        <ShadcnCard title="Shadow Always" shadow="always"/>
        <ShadcnCard title="Shadow Hover" shadow="hover"/>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## Loading

<CodeRunner title="Loading"
    description="Create a card with loading.">
    <ShadcnCard title="Loading" :loading="true"/>
</CodeRunner>

## Custom Title Slot

<CodeRunner title="Custom Title Slot"
    description="Create a card with custom title slot.">
    <ShadcnCard>
        <template #title>Custom Title</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard>
        <template #title>Custom Title</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom Description Slot

<CodeRunner title="Custom Description Slot"
    description="Create a card with custom description slot.">
    <ShadcnCard title="Title">
        <template #description>Custom Description</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title">
        <template #description>Custom Description</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom Content Slot

<CodeRunner title="Custom Content Slot"
    description="Create a card with custom content slot.">
    <ShadcnCard title="Title">
        <template #content>Custom Content</template>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title">
        <template #content>Custom Content</template>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom Footer Slot

<CodeRunner title="Custom Footer Slot"
    description="Create a card with custom footer slot.">
    <ShadcnCard title="Title">
        <template #footer>Custom Footer</template>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title">
        <template #footer>Custom Footer</template>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom Extra Slot

<CodeRunner title="Custom Extra Slot"
    description="Create a card with custom extra slot.">
    <ShadcnCard title="Title">
        <template #extra>Custom Extra</template>
    </ShadcnCard>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCard title="Title">
        <template #extra>Custom Extra</template>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Card Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['title', 'Card title', 'String', '-', '-', '-'],
        ['description', 'Card description', 'String', '-', 'title', '-'],
        ['shadow', 'Show shadow mode', 'Enum', 'never', '-', 'never, always, hover'],
        ['loading', 'Whether to display loading', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Card Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['title', 'Card title slot'],
        ['description', 'Card description slot'],
        ['extra', 'Card extra slot'],
        ['content', 'Card content slot'],
        ['footer', 'Card footer slot'],
    ]">
</ApiTable>
