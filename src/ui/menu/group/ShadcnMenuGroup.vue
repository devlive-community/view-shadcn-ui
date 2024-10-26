<template>
  <div class="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
    <slot name="title"/>
  </div>
  <ul class="mt-1 space-y-1">
    <slot/>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  name?: string
}>()
</script>
