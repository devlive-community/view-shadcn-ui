<template>
  <div class="h-screen" style="height: 40000px">
    {{defaultValue}}
    <ShadcnToolbarFooter v-model="defaultValue" auto-hide>
      <template #left>
        Left
      </template>
    </ShadcnToolbarFooter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(true)
</script>
