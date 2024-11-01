<template>
<div class="h-screen">
  <ShadcnException type="500">
    <template #icon>
      <ShadcnIcon icon="TriangleAlert" class="text-gray-400" :size="80"/>
    </template>
    <template #actions>
      <ShadcnButton type="primary">Home</ShadcnButton>
    </template>
  </ShadcnException>
</div>
</template>

<script setup lang="ts">
</script>
