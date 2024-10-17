<template>
  <div class="flex flex-row"
       :style="{ '--gutter': `${props.gutter}px` }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

const props = withDefaults(defineProps<{
  gutter?: number
}>(), {
  gutter: 0
})

const hasCol = ref(false)

// Provide context for the ShadcnCol component to use
provide('ShadcnRowContext', {
  registerCol: () => {
    hasCol.value = true
  }
})

// Check if there is ShadcnCol when mounting
onMounted(() => {
  if (!hasCol.value) {
    console.error('ShadcnRow must contain at least one ShadcnCol component.')
  }
})
</script>
