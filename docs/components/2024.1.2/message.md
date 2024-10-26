---
title: ShadcnMessage
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnMessage component.

## Usage

<CodeRunner title="Usage">
    <ShadcnButton @click="handleClick">Show Message</ShadcnButton>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton @click="handleClick">Show Message</ShadcnButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleClick() {
      this.$Message.info({
        content: 'This is an info message',
        duration: 2000
      })
    }
  }
})
```

:::

## API

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
            ['content', 'Content content', 'String', '-', '-', '-'],
            ['duration', 'The duration of the message', 'Number', '1500', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Content slot'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-close', 'Triggered when the message is closed', 'event'],
    ]">
</ApiTable>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleClick() {
      this.$Message.info({
        content: 'This is an info message',
        duration: 2000
      });
    }
  }
});
</script>
