<template>
  <ShadcnTab>
    <ShadcnTabItem label="Tab 1" value="Tab 1">
      <p>Tab 1 content</p>
    </ShadcnTabItem>
    <ShadcnTabItem label="Tab 2" value="Tab 2">
      <p>Tab 2 content</p>
    </ShadcnTabItem>
    <ShadcnTabItem value="Tab 3">
      <template #label>Label Slot</template>
      <p>Tab 3 content</p>
    </ShadcnTabItem>
  </ShadcnTab>
</template>

<script setup lang="ts">
</script>
