<template>
  <div class="p-32 space-y-3">
    <ShadcnSelect v-model="selectedLocale" :options="defaultSelectOptions" @on-change="setLocaleLanguage"/>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {setLocale} from "@/utils/locale.ts";

const selectedLocale = ref('en')
const defaultSelectOptions = [
  {label: 'ZH-CN', value: 'zh-CN'},
  {label: 'en', value: 'en'}
]

const setLocaleLanguage = (value: any) => {
  setLocale(value.value)
}
</script>
