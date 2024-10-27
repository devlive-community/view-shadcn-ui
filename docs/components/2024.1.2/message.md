---
title: Shadcn Message
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnMessage component.

## Usage

<CodeRunner title="Usage">
    <ShadcnButton @click="info(false)">Show Message</ShadcnButton>
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
        duration: 2
      })
    }
  }
})
```

:::

## Show Icon

<CodeRunner title="Show Icon">
    <ShadcnButton @click="info(false)">Show Message</ShadcnButton>
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
    <ShadcnButton @click="info(false)">Info</ShadcnButton>
    <ShadcnButton @click="success(false)">Success</ShadcnButton>
    <ShadcnButton @click="warning(false)">Warning</ShadcnButton>
    <ShadcnButton @click="error(false)">Error</ShadcnButton>
    <ShadcnButton @click="loading(false)">Loading</ShadcnButton>
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

## Background

<CodeRunner title="Type">
  <ShadcnSpace wrap>
    <ShadcnButton @click="info(true)">Info</ShadcnButton>
    <ShadcnButton @click="success(true)">Success</ShadcnButton>
    <ShadcnButton @click="warning(true)">Warning</ShadcnButton>
    <ShadcnButton @click="error(true)">Error</ShadcnButton>
    <ShadcnButton @click="loading(true)">Loading</ShadcnButton>
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
        showIcon: true,
        background: true
      });
    },
    success() {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true,
        background: true
      });
    },
    warning() {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true,
        background: true
      });
    },
    error() {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true,
        background: true
      });
    },
    loading() {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true,
        background: true
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
            ['duration', 'The duration of the message, in seconds', 'Number', '1.5', '-', '-'],
            ['showIcon', 'Whether to show the icon', 'Boolean', 'true', '-', '-'],
            ['type', 'Message type', 'String', 'info', 'info | success | warning | error | loading', '-'],
            ['background', 'Whether to show the background, only works when type is set', 'Boolean', 'false', '-', '-'],
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
    info(background = false) {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true,
        background: background
      });
    },
    success(background = false) {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true,
        background: background
      })
    },
    warning(background = false) {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true,
        background: background
      })
    },
    error(background = false) {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true,
        background: background
      })
    },
    loading(background = false) {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true,
        background: background
      })
    }
  }
}
</script>
