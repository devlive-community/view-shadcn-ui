<template>
  <div class="p-32">
    {{ conditions }}
    <ShadcnDataFilter v-model="conditions" :fields="fields"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const conditions = ref([])
const fields = [
  { label: 'Name', value: 'name', type: 'string' },
  { label: 'Age', value: 'age', type: 'number' },
  { label: 'Created At', value: 'created_at', type: 'date' },
  { label: 'Is Active', value: 'is_active', type: 'boolean' },
]
</script>
