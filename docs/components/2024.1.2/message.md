---
title: ShadcnMessage
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnMessage component.

## Usage

<CodeRunner title="Usage">
    <ShadcnButton @click="info">Show Message</ShadcnButton>
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

## Show Icon

<CodeRunner title="Show Icon">
    <ShadcnButton @click="info">Show Message</ShadcnButton>
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
        showIcon: true
      })
    }
  }
})
```

:::

## Type

<CodeRunner title="Type">
  <ShadcnSpace wrap>
    <ShadcnButton @click="info">Info</ShadcnButton>
    <ShadcnButton @click="success">Success</ShadcnButton>
    <ShadcnButton @click="warning">Warning</ShadcnButton>
    <ShadcnButton @click="error">Error</ShadcnButton>
    <ShadcnButton @click="loading">Loading</ShadcnButton>
  </ShadcnSpace>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnSpace wrap>
    <ShadcnButton @click="info">Info</ShadcnButton>
    <ShadcnButton @click="success">Success</ShadcnButton>
    <ShadcnButton @click="warning">Warning</ShadcnButton>
    <ShadcnButton @click="error">Error</ShadcnButton>
    <ShadcnButton @click="loading">Loading</ShadcnButton>
  </ShadcnSpace>
</template>

<script>
export default {
  methods: {
    info() {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true
      });
    },
    success() {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true
      });
    },
    warning() {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true
      });
    },
    error() {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true
      });
    },
    loading() {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true
      });
    }
  }
}
</script>
```

:::

## API

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
            ['content', 'Content content', 'String', '-', '-', '-'],
            ['duration', 'The duration of the message', 'Number', '1500', '-', '-'],
            ['showIcon', 'Whether to show the icon', 'Boolean', 'true', '-', '-'],
            ['type', 'Message type', 'String', 'info', 'info | success | warning | error | loading', '-'],
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

<script>
export default {
  methods: {
    info() {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true
      });
    },
    success() {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true
      });
    },
    warning() {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true
      });
    },
    error() {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true
      });
    },
    loading() {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true
      });
    }
  }
}
</script>
