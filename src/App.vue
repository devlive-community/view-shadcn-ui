<template>
  <div class="p-4 space-y-2">
    <ShadcnCard title="Single">
      Value: {{ singleValue }}
      <ShadcnTree v-model="singleValue" :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Multiple">
      Value: {{ multipleValue }}
      <ShadcnTree v-model="multipleValue"
                  multiple
                  :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Checkbox">
      Value: {{ checkValue }}
      <ShadcnTree v-model="checkValue"
                  multiple
                  checkable
                  :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Cascade">
      <ShadcnTree v-model="cascadeValue"
                  checkable
                  cascade
                  :data="data"/>
    </ShadcnCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

const singleValue = ref([])
const multipleValue = ref([])
const checkValue = ref(['1.2.1'])
const cascadeValue = ref(['1.2.1'])

const data = [
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      {value: '1.1', label: 'Child Node 1.1'},
      {
        value: '1.2',
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
      {value: '2.1', label: 'Child Node 2.1'}
    ]
  }
]
</script>
