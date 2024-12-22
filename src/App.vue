<template>
  <div class="space-y-4 p-12">
    <div>Selected date: {{ selectDate }}</div>
    <ShadcnDatePicker v-model="selectDate" @on-change="onChange"/>
    <ShadcnDatePicker v-model="selectDate" disabled @on-change="onChange"/>
    <ShadcnDatePicker v-model="selectDate" readonly @on-change="onChange"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectDate = ref('2024-12-22')

const onChange = (value: string) => {
  console.log('Selected date:', value)
}
</script>