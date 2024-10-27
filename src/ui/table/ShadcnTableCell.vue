<template>
  <td :class="['px-6 py-4 whitespace-nowrap text-sm text-gray-500',
              border && 'border-r'
      ]">
    <slot/>
  </td>
</template>

<script setup lang="ts">
import { inject } from 'vue'

withDefaults(defineProps<{
  border?: boolean
}>(), {
  border: false
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableCell must be used within ShadcnTable')
}
</script>
