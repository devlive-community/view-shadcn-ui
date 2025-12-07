<template>
  <tr :class="['group',
          stripe ? (dark ? 'hover:bg-gray-600' : 'hover:bg-gray-100') : (dark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'),
          stripe && (dark ? 'bg-gray-700' : 'bg-gray-50')
      ]">
    <slot/>
  </tr>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ColumnProps } from '@/ui/table/types.ts'

withDefaults(defineProps<ColumnProps>(), {
  stripe: false,
  dark: false
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableRow must be used within ShadcnTable')
}
</script>
