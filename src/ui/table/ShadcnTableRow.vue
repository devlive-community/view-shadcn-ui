<template>
  <tr :class="['group',
          stripe ? 'hover:bg-gray-100' : 'hover:bg-gray-50',
          stripe && 'bg-gray-50'
      ]">
    <slot/>
  </tr>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ColumnProps } from '@/ui/table/types.ts'

withDefaults(defineProps<ColumnProps>(), {
  stripe: false
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableRow must be used within ShadcnTable')
}
</script>
