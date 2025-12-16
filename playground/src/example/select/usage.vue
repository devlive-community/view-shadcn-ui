<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm mb-2">基础用法</p>
      <ShadcnSelect v-model="value" :options="options" placeholder="请选择"/>
    </div>
    <div>
      <p class="text-sm mb-2">多选模式</p>
      <ShadcnSelect v-model="multiValue" :options="options" multiple placeholder="请选择多个"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(null)
const multiValue = ref([])
const options = [
  { value: '1', label: '选项 1' },
  { value: '2', label: '选项 2' },
  { value: '3', label: '选项 3' },
  { value: '4', label: '选项 4' },
  { value: '5', label: '选项 5' }
]
</script>
