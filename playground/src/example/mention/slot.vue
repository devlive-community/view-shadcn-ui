<template>
  <ShadcnMention v-model="value" :items="items">
    <template #item="{ item, selected }">
      <div class="flex items-center gap-2">
        <div class="flex space-x-2 items-center">
          <div class="font-medium">{{ item.id }}</div>
          <div class="text-sm text-gray-500">{{ item.name }}</div>
        </div>
        <span v-if="selected" class="ml-auto">
            <Icon icon="Check"/>
          </span>
      </div>
    </template>
  </ShadcnMention>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([1, 2])

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