<template>
  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">
    <slot>
      {{ label }}
    </slot>
  </th>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>
