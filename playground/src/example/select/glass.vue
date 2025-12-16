<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-green-400 to-teal-400">
    <div class="flex flex-col gap-4">
      <div>
        <p class="text-sm mb-2 text-gray-700">单选模式</p>
        <ShadcnSelect v-model="value" :options="options" glass placeholder="请选择选项"/>
      </div>
      <div>
        <p class="text-sm mb-2 text-gray-700">多选模式</p>
        <ShadcnSelect v-model="multiValue" :options="options" glass multiple placeholder="请选择多个选项"/>
      </div>
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
