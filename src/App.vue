<template>
  <div class="p-4">
    Value: {{ value }}
    <ShadcnTree v-model="value"
                multiple
                :data="data"
                @on-expand="onExpand"
                @on-node-click="onNodeClick"/>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([])

const data = [
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      {value: 1.1, label: 'Child Node 1.1'},
      {
        value: 1.2,
        label: 'Child Node 1.2',
        children: [
          {value: '1.2.1', label: 'Child Node 1.2.1'}
        ]
      }
    ]
  },
  {
    value: 2,
    label: 'Parent Node 2',
    children: [
      {value: 2.1, label: 'Child Node 2.1'}
    ]
  }
]

const onExpand = (node) => {
  console.log('Expand Node:', node)
}

const onNodeClick = (node) => {
  console.log('Click Node:', node)
}
</script>
