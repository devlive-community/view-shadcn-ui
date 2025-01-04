<template>
  <ShadcnMention size="small" :items="items" />
  <ShadcnMention size="default" :items="items" />
  <ShadcnMention size="large" :items="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {id: 1, name: '测试数据 1'},
  {id: 2, name: '测试数据 2'},
  {id: 3, name: '测试数据 3'},
  {id: 4, name: '测试数据 4'},
  {id: 5, name: '测试数据 5'},
  {id: 6, name: '测试数据 6'},
  {id: 7, name: '测试数据 7'},
  {id: 8, name: '测试数据 8'},
  {id: 9, name: '测试数据 9'},
  {id: 10, name: '测试数据 10'}
])
</script>