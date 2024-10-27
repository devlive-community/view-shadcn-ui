<template>
  <td :class="['px-6 py-4 whitespace-nowrap text-sm text-gray-500',
              border && 'border-r',
              fixed && 'sticky z-10',
              fixed === 'left' && 'left-0',
              fixed === 'right' && 'right-0',
              stripe ? 'group-hover:bg-gray-100' : 'group-hover:bg-gray-50',
              fixed && stripe && 'bg-gray-50',
              fixed && !stripe && 'bg-white'
      ]">
    <slot/>
  </td>
</template>

<script setup lang="ts">
import { inject } from 'vue'

withDefaults(defineProps<{
  border?: boolean
  stripe?: boolean
  fixed?: 'left' | 'right',
}>(), {
  border: false,
  stripe: false,
  fixed: undefined
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableCell must be used within ShadcnTable')
}
</script>
