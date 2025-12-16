<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <ShadcnCheckbox v-model="value1" value="1" glass>选项 1</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value2" value="2" glass type="success">选项 2</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value3" value="3" glass type="warning">选项 3</ShadcnCheckbox>
        <ShadcnCheckbox v-model="value4" value="4" glass type="error">选项 4</ShadcnCheckbox>
      </div>
      <div>
        <p class="text-sm mb-2 text-gray-700">复选框组</p>
        <ShadcnCheckboxGroup v-model="groupValue" glass>
          <ShadcnCheckbox value="apple">苹果</ShadcnCheckbox>
          <ShadcnCheckbox value="banana">香蕉</ShadcnCheckbox>
          <ShadcnCheckbox value="orange">橙子</ShadcnCheckbox>
          <ShadcnCheckbox value="grape">葡萄</ShadcnCheckbox>
        </ShadcnCheckboxGroup>
      </div>
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
