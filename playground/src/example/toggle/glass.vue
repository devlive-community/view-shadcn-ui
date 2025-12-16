<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <ShadcnToggle v-model="value1" value="bold" glass>粗体</ShadcnToggle>
        <ShadcnToggle v-model="value2" value="italic" glass>斜体</ShadcnToggle>
        <ShadcnToggle v-model="value3" value="underline" glass>下划线</ShadcnToggle>
      </div>
      <div>
        <p class="text-sm mb-2 text-gray-700">多选模式</p>
        <ShadcnToggleGroup v-model="groupValue" multiple glass>
          <ShadcnToggle value="left">左对齐</ShadcnToggle>
          <ShadcnToggle value="center">居中</ShadcnToggle>
          <ShadcnToggle value="right">右对齐</ShadcnToggle>
          <ShadcnToggle value="justify">两端对齐</ShadcnToggle>
        </ShadcnToggleGroup>
      </div>
      <div>
        <p class="text-sm mb-2 text-gray-700">单选模式</p>
        <ShadcnToggleGroup v-model="singleValue" glass>
          <ShadcnToggle value="small">小</ShadcnToggle>
          <ShadcnToggle value="medium">中</ShadcnToggle>
          <ShadcnToggle value="large">大</ShadcnToggle>
        </ShadcnToggleGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const groupValue = ref([])
const singleValue = ref(null)
</script>
