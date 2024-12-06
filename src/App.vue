<template>
  <ShadcnEmpty>
    <template #image>
      <ShadcnIcon icon="User" size="80"/>
    </template>

    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>

    <template #description>
      <p>Custom Description</p>
    </template>

    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
      </div>
    </template>
  </ShadcnEmpty>
</template>

<script setup lang="ts">
</script>
