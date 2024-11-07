---
title: Shadcn Modal
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnModal component.

## Basic Usage

<CodeRunner title="Basic Usage">
    <ShadcnButton @click="basicModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="basicModal" title="Modal Title" description="This is a modal description">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Modal Title" description="This is a modal description">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## No Title

<CodeRunner title="No Title">
    <ShadcnButton @click="noTitleModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="noTitleModal">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Title

<CodeRunner title="Custom Title"
    description="Create a modal with custom title.">
    <ShadcnButton @click="customTitleModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="customTitleModal">
        <template #title>Custom Title</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal">
        <template #title>Custom Title</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Footer

<CodeRunner title="Custom Footer">
    <ShadcnButton @click="customFooterModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="customFooterModal" title="Custom Footer">
        <div class="flex items-center justify-center h-32">Content</div>
        <template #footer>This is a footer</template>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Footer">
        <div class="flex items-center justify-center h-32">Content</div>
        <template #footer>This is a footer</template>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Content

<CodeRunner title="Custom Content">
    <ShadcnButton @click="customContentModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="customContentModal" title="Custom Content">
        <template #content>Custom Content</template>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Content">
        <template #content>Custom Content</template>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Width

<CodeRunner title="Custom Width">
    <ShadcnButton @click="customWidthModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="customWidthModal" title="Custom Width" width="200">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Width" width="200">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Height

<CodeRunner title="Custom Height">
    <ShadcnButton @click="customHeightModal = true">Click</ShadcnButton>
    <ShadcnModal v-model="customHeightModal" title="Custom Height" height="200">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Height" height="200">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Closeable

::: raw

<CodeRunner title="Closeable and No Closeable">
    <ShadcnButton @click="closeableModal = true">Closeable</ShadcnButton>
    <ShadcnModal v-model="closeableModal" title="Closeable" closable>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="noClosableModal = true">No Closeable</ShadcnButton>
    <ShadcnModal v-model="noClosableModal" title="Not Closeable" :closable="false">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="customClosableModal = true">Custom Closable</ShadcnButton>
    <ShadcnModal v-model="customClosableModal" title="Custom Closable">
        <template #close>Custom Close</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnButton @click="closeableModal = true">Closeable</ShadcnButton>
    <ShadcnModal v-model="closeableModal" title="Closeable" closable>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="noClosableModal = true">No Closeable</ShadcnButton>
    <ShadcnModal v-model="noClosableModal" title="Not Closeable" :closable="false">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="customClosableModal = true">Custom Closable</ShadcnButton>
    <ShadcnModal v-model="customClosableModal" title="Custom Closable">
        <template #close>Custom Close</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const closeableModal = ref(false);
const noClosableModal = ref(false);
const customClosableModal = ref(false);
</script>
```

:::

## Props

<ApiTable title="Modal Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend']"
    :columns="[
        ['modelValue', 'Whether the dialog box is displayed or not, v-model can be used to bind data in two directions.', 'boolean', 'false', '-'],
        ['title', 'The title of the dialog box. If the page header is customized using slot, the title will be invalid.', 'string', '-', '-'],
        ['description', 'Modal description', 'string', '-', 'title'],
        ['width', 'Modal width', 'number | string', '30%', '-'],
        ['height', 'Modal height', 'number | string', '10%', '-'],
        ['okText', 'The text of the OK button', 'string', 'OK', '-'],
        ['cancelText', 'The text of the Cancel button', 'string', 'Cancel', '-'],
        ['closable', 'Whether the dialog box can be closed', 'boolean', 'true', '-'],
    ]">
</ApiTable>

## Events

<ApiTable title="Modal Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when display status changes', 'true | false'],
        ['on-close', 'Triggered when the dialog box is closed', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Modal Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['title', 'Modal title'],
        ['description', 'Modal description'],
        ['close', 'Modal close'],
        ['content', 'Modal content'],
        ['footer', 'Modal footer'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const basicModal = ref(false);
const noTitleModal = ref(false);
const customTitleModal = ref(false);
const customFooterModal = ref(false);
const customContentModal = ref(false);
const customWidthModal = ref(false);
const customHeightModal = ref(false);
const closeableModal = ref(false);
const noClosableModal = ref(false);
const customClosableModal = ref(false);
</script>
