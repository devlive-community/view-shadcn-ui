<template>
  <div class="p-32 space-y-7 space-x-4">
    <div class="p-2 flex flex-col space-y-4 min-h-32 space-x-6 overflow-x-auto">
      当前选择的值 {{ value }}
      <ShadcnTree v-model="value" :data="data"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const value = ref([6])
const data = [
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      {value: 2, label: 'Child Node 1.1'},
      {
        value: 3,
        label: 'Child Node 1.2',
        children: [
          {value: 4, label: 'Child Node 1.2.1'}
        ]
      }
    ]
  },
  {
    value: 5,
    label: 'Parent Node 2',
    children: [
      {value: 6, label: 'Child Node 2.1'}
    ]
  }
]
</script>