<template>
  <ShadcnSpace>
    <ShadcnButton loading>Loading</ShadcnButton>
    <ShadcnButton loading>
      <template #icon>
        <ShadcnIcon icon="Save"/>
      </template>

      Button
    </ShadcnButton>
    <ShadcnButton circle size="large" loading />
    <ShadcnButton round loading>Round</ShadcnButton>
    <ShadcnButton size="small" loading>Small</ShadcnButton>
    <ShadcnButton size="default" loading>Default</ShadcnButton>
    <ShadcnButton size="large" loading>Large</ShadcnButton>

    <ShadcnButton circle size="small">
      <ShadcnIcon icon="Cog" size="18"/>
    </ShadcnButton>
  </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
