<template>
  <ShadcnCollapse v-model="expandedItems">
    <ShadcnCollapseItem title="Section 1" name="1">
      Content for section 1
    </ShadcnCollapseItem>
    <ShadcnCollapseItem title="Section 2" name="2">
      Content for section 2
    </ShadcnCollapseItem>
    <ShadcnCollapseItem>
      <template #title>
        ddd
      </template>
    </ShadcnCollapseItem>
  </ShadcnCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedItems = ref<string[]>([])
</script>
