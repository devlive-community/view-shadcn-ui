<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <ShadcnSpace>
      <ShadcnTrend :value="10">
        <template #rise>⬆️</template>
      </ShadcnTrend>
      <ShadcnTrend :value="-10">
        <template #descend>⬇️</template>
      </ShadcnTrend>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
</script>
