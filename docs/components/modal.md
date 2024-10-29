---
title: Shadcn Modal
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnModal component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple modal.">
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Modal Title" description="This is a modal description">
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

<CodeRunner title="No Title"
    description="Create a modal without title.">
    <ShadcnButton @click="modal3 = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal3">
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

## Custom Title

<CodeRunner title="Custom Title"
    description="Create a modal with custom title.">
    <ShadcnButton @click="modal1 = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal1">
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

## Custom Footer

<CodeRunner title="Custom Footer"
    description="Create a modal with custom footer.">
    <ShadcnButton @click="modal2 = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal2" title="Custom Footer">
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

## Custom Content

<CodeRunner title="Custom Content"
    description="Create a modal with custom content.">
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Content">
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

## Custom Width

<CodeRunner title="Custom Width"
    description="Create a modal with custom width.">
    <ShadcnButton @click="modal4 = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal4" title="Custom Width" :width="20">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Width" :width="20">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## Custom Height

<CodeRunner title="Custom Height"
    description="Create a modal with custom height.">
    <ShadcnButton @click="modal5 = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal5" title="Custom Height" :height="20">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="modal = true">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Height" :height="20">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);
const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
const modal5 = ref(false);
</script>

## API Attributes

<ApiTable title="Modal Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'Whether the dialog box is displayed or not, v-model can be used to bind data in two directions.', 'Boolean', 'false', '-', '-'],
        ['title', 'The title of the dialog box. If the page header is customized using slot, the title will be invalid.', 'String', '-', '-', '-'],
        ['description', 'Modal description', 'String', '-', 'title', '-'],
        ['width', 'Modal width', 'Number', '30', '-', '10, 20, 30, 40, 50, 60, 70, 80, 90, 100'],
        ['height', 'Modal height', 'Number', '30', '-', '10, 20, 30, 40, 50, 60, 70, 80, 90, 100'],
        ['okText', 'The text of the OK button', 'String', 'OK', '-', '-'],
        ['cancelText', 'The text of the Cancel button', 'String', 'Cancel', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Modal Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when display status changes', 'true / false'],
        ['on-ok', 'Triggered when the OK button is clicked', '-'],
        ['on-cancel', 'Triggered when the Cancel button is clicked', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Modal Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['title', 'Modal title'],
        ['description', 'Modal description'],
        ['content', 'Modal content'],
        ['footer', 'Modal footer'],
    ]">
</ApiTable>
