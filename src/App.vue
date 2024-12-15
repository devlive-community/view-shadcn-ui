<template>
  <div class="p-32">
    <ShadcnDataFilter v-model="conditions" :fields="fields" :operators="operators"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const conditions = ref([])
const fields = [
  { label: 'Name', value: 'name', type: 'string' },
  { label: 'Age', value: 'age', type: 'number' },
  { label: 'Created At', value: 'created_at', type: 'date' }
]
const operators = ['=', '!=', '>', '<', 'LIKE']
</script>
