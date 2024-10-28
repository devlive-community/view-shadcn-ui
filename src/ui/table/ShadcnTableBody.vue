<template>
  <tbody>
    <slot/>
  </tbody>
</template>

<script setup>
import { inject } from 'vue'

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableBody must be used within ShadcnTable')
}
</script>
