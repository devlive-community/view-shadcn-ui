<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <ShadcnSpace wrap>
      <ShadcnException type="500">
        <template #icon>
          <ShadcnIcon icon="TriangleAlert" class="text-gray-400" :size="80"/>
        </template>
        <template #actions>
          <ShadcnButton type="primary">Home</ShadcnButton>
        </template>
      </ShadcnException>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
</script>
