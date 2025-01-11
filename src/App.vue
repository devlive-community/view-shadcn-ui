<template>
  <div class="p-32">
      <ShadcnTab closable>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
      </ShadcnTab>

      <ShadcnTab type="primary" line>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
      </ShadcnTab>
  </div>
</template>

<script setup lang="ts">
</script>