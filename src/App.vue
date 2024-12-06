<template>
  <div class="p-32">
    <ShadcnScrollbar position="left">
      <div class="space-y-4">
        <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
      </div>
    </ShadcnScrollbar>
  </div>
</template>

<script setup lang="ts">
</script>