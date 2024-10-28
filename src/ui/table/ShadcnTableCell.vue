<template>
  <td :class="['px-4 py-4 text-sm text-gray-500 whitespace-normal break-words',
              border && 'border-r',
              fixed && 'sticky z-10',
              fixed === 'left' && 'left-0',
              fixed === 'right' && 'right-0',
              stripe ? 'group-hover:bg-gray-100' : 'group-hover:bg-gray-50',
              fixed && stripe && 'bg-gray-50',
              fixed && !stripe && 'bg-white',
              isLastLeftFixed && 'shadow-left-side',
              isFirstRightFixed && 'shadow-right-side'
      ]"
      :style="{ width: calcSize(width), minWidth: calcSize(width), maxWidth: calcSize(width) }">
    <slot/>
  </td>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<{
  border?: boolean
  stripe?: boolean
  fixed?: 'left' | 'right'
  width?: string | number
  isLastLeftFixed?: boolean
  isFirstRightFixed?: boolean
}>(), {
  border: false,
  stripe: false,
  fixed: undefined,
  width: 'auto',
  isLastLeftFixed: false,
  isFirstRightFixed: false
})

const isTable = inject('ShadcnTable', false)
if (!isTable) {
  throw new Error('ShadcnTableCell must be used within ShadcnTable')
}
</script>
