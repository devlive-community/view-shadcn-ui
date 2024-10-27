<template>
  <th :class="['px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap',
              border && 'border-r'
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
}>(), {
  border: false
})
</script>
