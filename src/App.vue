<template>
  <ShadcnButton @click="defaultValue = !defaultValue">Open</ShadcnButton>
  <ShadcnDrawer v-model="defaultValue" title="Title">
    <ShadcnTooltip content="Position" position="top">
      <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom">
      <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left">
      <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" class="mr-20" position="right">
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
    <template #footer>
      <ShadcnButton @click="defaultValue = !defaultValue">Close</ShadcnButton>
    </template>
  </ShadcnDrawer>

  <ShadcnTooltip content="Position" position="top">
    <ShadcnButton>Top</ShadcnButton>
  </ShadcnTooltip>
  <ShadcnTooltip content="Position" position="bottom">
    <ShadcnButton>Bottom</ShadcnButton>
  </ShadcnTooltip>
  <ShadcnTooltip content="Position" position="left">
    <ShadcnButton>Left</ShadcnButton>
  </ShadcnTooltip>
  <ShadcnTooltip content="Position" position="right">
    <ShadcnButton>Right</ShadcnButton>
  </ShadcnTooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
