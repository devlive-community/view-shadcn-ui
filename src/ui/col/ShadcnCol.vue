<template>
  <div class="p-3">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'

// Inject the context of ShadcnRow
const rowContext = inject('ShadcnRowContext', null)

onMounted(() => {
  if (!rowContext) {
    console.error('ShadcnCol must be used inside a ShadcnRow component.')
  }
  else {
    // Notify ShadcnRow of the existence of registered ShadcnCol
    rowContext.registerCol()
  }
})
</script>
