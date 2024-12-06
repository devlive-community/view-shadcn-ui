<template>
  <div class="p-32">
      <ShadcnScrollbar position="left" class="custom-scrollbar">
        <div class="space-y-4">
          <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
        </div>
      </ShadcnScrollbar>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.custom-scrollbar ::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar ::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar ::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>