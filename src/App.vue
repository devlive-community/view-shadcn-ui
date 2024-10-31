<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <ShadcnSpace wrap>
      <ShadcnButton v-for="i in 10">Button {{ i }}</ShadcnButton>
    </ShadcnSpace>

    <ShadcnButtonGroup direction="horizontal" size="default">
      <ShadcnButton>Left</ShadcnButton>
      <ShadcnButton>Middle</ShadcnButton>
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnButtonGroup>

    <ShadcnButtonGroup direction="vertical">
      <ShadcnButton type="primary">T</ShadcnButton>
      <ShadcnButton type="primary">C</ShadcnButton>
      <ShadcnButton type="primary">B</ShadcnButton>
    </ShadcnButtonGroup>
  </div>
</template>

<script setup lang="ts">
import ShadcnButton from '@/ui/button'
</script>
