<template>
  <th :class="['px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap',
                border && 'border-r',
                fixed && 'sticky z-10 bg-gray-50',
                fixed === 'left' && 'left-0',
                fixed === 'right' && 'right-0',
                'group-hover:bg-gray-50'
      ]">
    <slot>
      {{ label }}
    </slot>
  </th>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  border?: boolean
  fixed?: 'left' | 'right'
}>(), {
  border: false,
  fixed: undefined
})
</script>
