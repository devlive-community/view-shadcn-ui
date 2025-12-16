<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm mb-2">单个 Toggle</p>
      <div class="flex gap-2">
        <ShadcnToggle v-model="value1" value="bold">粗体</ShadcnToggle>
        <ShadcnToggle v-model="value2" value="italic">斜体</ShadcnToggle>
        <ShadcnToggle v-model="value3" value="underline">下划线</ShadcnToggle>
      </div>
    </div>
    <div>
      <p class="text-sm mb-2">ToggleGroup 单选</p>
      <ShadcnToggleGroup v-model="singleValue">
        <ShadcnToggle value="left">左对齐</ShadcnToggle>
        <ShadcnToggle value="center">居中</ShadcnToggle>
        <ShadcnToggle value="right">右对齐</ShadcnToggle>
      </ShadcnToggleGroup>
    </div>
    <div>
      <p class="text-sm mb-2">ToggleGroup 多选</p>
      <ShadcnToggleGroup v-model="multiValue" multiple>
        <ShadcnToggle value="bold">粗体</ShadcnToggle>
        <ShadcnToggle value="italic">斜体</ShadcnToggle>
        <ShadcnToggle value="underline">下划线</ShadcnToggle>
      </ShadcnToggleGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const singleValue = ref(null)
const multiValue = ref([])
</script>
