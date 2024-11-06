<template>
  <div class="p-4 space-y-2">
    <ShadcnCard title="Checkbox">
      Value: {{ checkValue }}
      <ShadcnTree key="checkbox-tree"
                  v-model="checkValue"
                  multiple
                  checkable
                  show-line
                  :data="data">
        <template #expand>O</template>

        <template #collapse>C</template>
      </ShadcnTree>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const checkValue = ref(['1.2.1'])
const data = reactive([
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      { value: '1.1', label: 'Child Node 1.1' },
      { value: '1.11', label: 'Child Node 1.11' },
      { value: '1.12', label: 'Child Node 1.12' },
      { value: '1.13', label: 'Child Node 1.13' },
      {
        value: '1.2',
        label: 'Child Node 1.2',
        children: [
          { value: '1.2.1', label: 'Child Node 1.2.1' }
        ]
      }
    ]
  },
  {
    value: 2,
    label: 'Parent Node 2',
    disabled: true,
    children: [
      { value: '2.1', label: 'Child Node 2.1' }
    ]
  }
])
</script>
