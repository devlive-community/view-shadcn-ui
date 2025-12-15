<template>
  <ShadcnCollapse v-model="activeNames">
    <ShadcnCollapseItem title="Item 1" name="1">
      Content of panel 1
    </ShadcnCollapseItem>
    <ShadcnCollapseItem title="Item 2" name="2">
      Content of panel 2
    </ShadcnCollapseItem>
    <ShadcnCollapseItem title="Item 3" name="3">
      Content of panel 3
    </ShadcnCollapseItem>
  </ShadcnCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>
