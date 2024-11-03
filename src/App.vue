<template>
  <div class="p-6 max-w-2xl mx-auto space-x-3">
    <ShadcnTooltip content="This is a tooltip">Auto Width</ShadcnTooltip>

    <ShadcnTooltip :width="200" content="This is a width 200 tooltip">Width 200</ShadcnTooltip>

    <ShadcnTooltip width="200px" content="This is a width 200px tooltip">Width 200px</ShadcnTooltip>

    <ShadcnTooltip>
      Custom Content
      <template #content>
        <div>This is a custom content</div>
        <div>This is a custom content</div>
      </template>
    </ShadcnTooltip>
  </div>
</template>

<script setup lang="ts">
</script>
