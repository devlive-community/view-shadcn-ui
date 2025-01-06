---
title: 语言 (Language)
---

本文档主要用于描述 UI 系统的多语言功能

<br />

<CodeRunner title="示例">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
</CodeRunner>

## 修改语言

::: raw

<ShadcnSelect v-model="locale" :options="localeOptions" @on-change="changeLocale"/>

:::

::: details 查看代码

```vue
<template>
  <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
  <ShadcnSelect v-model="locale" :options="localeOptions" @on-change="changeLocale"/>
</template>

<script setup lang="ts">
import {ref} from "vue"
import { setLocale } from 'view-shadcn-ui'

const locale = ref('en')
const localeOptions = [
  {label: 'ZH-CN', value: 'zh-CN'},
  {label: 'en', value: 'en'}
]

const changeLocale = (value: any) => {
  setLocale(value.value)
}
</script>
```

:::

## 添加语言

::: raw

<CodeRunner title="添加语言">
    <ShadcnButton @click="onAddLanguage">添加 ru-RU 语言</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
  <ShadcnSelect v-model="locale" :options="localeOptions" @on-change="changeLocale"/>
  <ShadcnButton @click="onAddLanguage">Add ru-RU Language</ShadcnButton>
</template>

<script setup lang="ts">
import {ref} from "vue"
import { addLocale, setLocale } from 'view-shadcn-ui'

const locale = ref('en')
const localeOptions = [
  {label: 'ZH-CN', value: 'zh-CN'},
  {label: 'en', value: 'en'}
]

const changeLocale = (value: any) => {
  setLocale(value.value)
}

const onAddLanguage = async () => {
  const ruRU = {
    upload: {
      text: {
        placeholder: '<span class="text-blue-600">Нажмите для загрузки</span> или перетащите файл сюда',
        description: 'Поддерживается одиночная или массовая загрузка.',
        success: 'Загрузка выполнена успешно',
        error: 'Ошибка загрузки'
      }
    }
  }

  localeOptions.value.push({ label: 'RU-RU', value: 'ru-RU' })
  addLocale('ru-RU', ruRU)
}
</script>
```

:::

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Initialize default values
const locale = ref('en')
const localeOptions = ref([
  { label: 'ZH-CN', value: 'zh-CN' },
  { label: 'en', value: 'en' }
])

// Only import and use setLocale on client-side
let setLocale
let addLocale
onMounted(async () => {
  const { setLocale: importedSetLocale, addLocale: importedAddLocale } = await import('view-shadcn-ui')
  setLocale = importedSetLocale
  addLocale = importedAddLocale
})

const changeLocale = (value) => {
  if (setLocale) {
    setLocale(value.value)
  }
}

const onAddLanguage = async () => {
  const ruRU = {
    upload: {
      text: {
        placeholder: '<span class="text-blue-600">Нажмите для загрузки</span> или перетащите файл сюда',
        description: 'Поддерживается одиночная или массовая загрузка.',
        success: 'Загрузка выполнена успешно',
        error: 'Ошибка загрузки'
      }
    }
  }
    
  if (addLocale) {
    localeOptions.value.push({ label: 'RU-RU', value: 'ru-RU' })
    addLocale('ru-RU', ruRU)
  }
}
</script>