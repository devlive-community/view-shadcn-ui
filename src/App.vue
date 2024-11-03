<template>
  <div class="p-6 max-w-2xl mx-auto space-x-3">
    <ShadcnSpace wrap :size="[10, 90]">
      <ShadcnBadge type="primary" text="Badge">Primary</ShadcnBadge>
      <ShadcnBadge type="success" text="Badge">Success</ShadcnBadge>
      <ShadcnBadge type="warning" text="Badge">Warning</ShadcnBadge>
      <ShadcnBadge type="danger" text="Badge"/>
      <ShadcnBadge type="info">
        <template #text>ddd</template>
        Info
      </ShadcnBadge>
    </ShadcnSpace>
  </div>
</template>

<script setup lang="ts">
</script>
