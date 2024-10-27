<template>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <slot />
  </td>
</template>

<script setup>
import { inject } from 'vue'

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableCell must be used within ShadcnTable')
}
</script>
