<template>
  <th :class="['px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap break-words',
                border && 'border-r',
                fixed && 'sticky z-10 bg-gray-50',
                fixed === 'left' && 'left-0',
                fixed === 'right' && 'right-0',
                'group-hover:bg-gray-50'
      ]"
      :style="{ width: calcSize(width), minWidth: calcSize(width), maxWidth: calcSize(width) }">
    <slot>
      {{ label }}
    </slot>
  </th>
</template>

<script setup lang="ts">
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<{
  label?: string
  border?: boolean
  fixed?: 'left' | 'right'
  width?: string | number
}>(), {
  border: false,
  fixed: undefined,
  width: 'auto'
})
</script>
