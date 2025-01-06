---
title: 唯一标记 (UUID)
---

# 介绍

<br />

本文档主要用于描述 `randomUUID` 和 `validateUUID` 函数的一些功能和用法。

## randomUUID

生成一个符合 UUID v4 标准的字符串

::: raw

<CodeRunner title="randomUUID">
    <ShadcnText>UUID: {{ uuid }}</ShadcnText>
    <br />
    <ShadcnButton @click="randomUUIDValue()">生成 UUID</ShadcnButton>
</CodeRunner>

:::

::: details 显示代码

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

验证字符串是否符合 UUID v4 标准

::: raw

<CodeRunner title="validateUUID">
    <ShadcnText>验证 UUID: {{ verifyUUIDResult }}</ShadcnText>
    <br />
    <ShadcnButton @click="verifyUUID('4000051c-3ae9-40df-b49a-d2aefa499a60')">验证 UUID 4000051c-3ae9-40df-b49a-d2aefa499a60</ShadcnButton>
</CodeRunner>

:::

::: details 显示代码

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