<template>
  <div class="cursor-pointer hover:text-blue-400">
    <RouterLink :to="String(link)">
      <slot/>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  link?: string
}>()
</script>
