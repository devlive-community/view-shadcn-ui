<template>
  <div class="p-32">
    {{ conditions }}
    <ShadcnDataFilter ref="dataFilterRef" v-model="conditions" :fields="fields" @on-validation-change="handleValidationChange"/>

    <ShadcnButton @click="validateFilter">Validate</ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dataFilterRef = ref()
const conditions = ref([])
const fields = [
  { label: 'Name', value: 'name', type: 'string' },
  { label: 'Age', value: 'age', type: 'number' },
  { label: 'Created At', value: 'created_at', type: 'date' },
  { label: 'Is Active', value: 'is_active', type: 'boolean' }
]

const validateFilter = () => {
  const { isValid, errors } = dataFilterRef.value.validate()
  if (!isValid) {
    console.log('Error:', errors)
  }
}

const handleValidationChange = (validationResult: ValidationResult) => {
  console.log('Validation status:', validationResult.isValid)
  console.log('Errors:', validationResult.errors)
}
</script>
