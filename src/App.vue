<template>
  <div class="p-32">
    {{ filterConfig }}
    <ShadcnHierarchicalDataFilter
        v-model="filterConfig"
        :fields="fields"/>

<!--    <ShadcnButton @click="validateFilter">Validate</ShadcnButton>-->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filterConfig = ref([])

const fields = [
  { label: 'Name', value: 'name', type: 'string' },
  { label: 'Age', value: 'age', type: 'number' },
  { label: 'Created At', value: 'created_at', type: 'date' },
  { label: 'Is Active', value: 'is_active', type: 'boolean' }
]
</script>
