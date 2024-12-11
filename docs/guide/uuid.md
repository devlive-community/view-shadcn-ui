---
title: UUID Utility
---

# Introduction

This document is mainly used to describe some features and usage of the uuid utility.

## randomUUID

Generate a string that follows the UUID v4 standard

::: raw

<CodeRunner title="randomUUID">
    <ShadcnText>UUID: {{ uuid }}</ShadcnText>
    <br />
    <ShadcnButton @click="randomUUIDValue()">Generate UUID</ShadcnButton>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnText>UUID: {{ uuid }}</ShadcnText>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { randomUUID } from 'view-shadcn-ui'

const uuid = ref(randomUUID())
</script>
```

:::

## validateUUID

Verify if a string follows the UUID v4 standard

::: raw

<CodeRunner title="validateUUID">
    <ShadcnText>Verify UUID: {{ verifyUUIDResult }}</ShadcnText>
    <br />
    <ShadcnButton @click="verifyUUID('4000051c-3ae9-40df-b49a-d2aefa499a60')">Verify UUID 4000051c-3ae9-40df-b49a-d2aefa499a60</ShadcnButton>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnText>Verify UUID: {{ verifyUUIDResult }}</ShadcnText>

  <ShadcnButton @click="verifyUUID('4000051c-3ae9-40df-b49a-d2aefa499a60')">Verify UUID</ShadcnButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { validateUUID } from 'view-shadcn-ui'

const verifyUUIDResult = ref(false)
const verifyUUID = (value) => {
    verifyUUIDResult.value = validateUUID(value)
}
</script>
```

:::

<script setup lang="ts">
import { ref, onMounted } from 'vue'

let randomUUID
let validateUUID
onMounted(async () => {
  const { randomUUID: importedRandomUUID, validateUUID: importedValidateUUID } = await import('view-shadcn-ui')
  randomUUID = importedRandomUUID
  validateUUID = importedValidateUUID
})

const uuid = ref(null)
const randomUUIDValue = () => {
  uuid.value = randomUUID()
}

const verifyUUIDResult = ref(false)
const verifyUUID = (value) => {
    verifyUUIDResult.value = validateUUID(value)
}
</script>
