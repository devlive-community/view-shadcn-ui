<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm mb-2">基础用法</p>
      <div class="flex gap-4">
        <ShadcnCheckbox v-model="value1" value="1">选项 1</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value2" value="2">选项 2</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value3" value="3">选项 3</ShadcnCheckbox>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2">不同类型</p>
      <div class="flex gap-4">
        <ShadcnCheckbox v-model="value1" value="1" type="primary">Primary</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value2" value="2" type="success">Success</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value3" value="3" type="warning">Warning</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value4" value="4" type="error">Error</ShadcnCheckbox>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2">复选框组</p>
      <ShadcnCheckboxGroup v-model="groupValue">
        <ShadcnCheckbox value="apple">苹果</ShadcnCheckbox>
        <ShadcnCheckbox value="banana">香蕉</ShadcnCheckbox>
        <ShadcnCheckbox value="orange">橙子</ShadcnCheckbox>
      </ShadcnCheckboxGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const value4 = ref(null)
const groupValue = ref([])
</script>
