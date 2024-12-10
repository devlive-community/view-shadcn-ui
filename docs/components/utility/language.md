---
title: Language
---

This document describes the operation of the entire UI system for each language.

<br />

<CodeRunner title="Example">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
</CodeRunner>

## Change Language

::: raw

<ShadcnSelect v-model="locale" :options="localeOptions" @on-change="changeLocale"/>

:::

::: details Show code

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

## Add new Language

::: raw

<CodeRunner title="Add new Language">
    <ShadcnButton @click="onAddLanguage">Add ru-RU Language</ShadcnButton>
</CodeRunner>

:::

::: details Show code

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
