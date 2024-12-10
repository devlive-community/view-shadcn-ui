<template>
  <div class="p-32 space-y-3">
    <ShadcnSelect v-model="selectedLocale" :options="defaultSelectOptions" @on-change="setLocaleLanguage"/>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {addLocale, setLocale} from "@/utils/locale.ts";

const selectedLocale = ref('en')
const defaultSelectOptions = [
  {label: 'ZH-CN', value: 'zh -CN'},
  {label: 'en', value: 'en'},
  {label: 'ru', value: 'ru-RU'}
]

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

addLocale('ru-RU', ruRU)

const setLocaleLanguage = (value: any) => {
  setLocale(value.value)
}
</script>
