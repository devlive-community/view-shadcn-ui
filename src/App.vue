<template>
  <div class="h-screen" style="height: 40000px">
    {{defaultValue}}
    <ShadcnToolbarFooter v-model="defaultValue" full-width>
      <template #left>Full Width</template>
    </ShadcnToolbarFooter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(true)
</script>
