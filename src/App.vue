<template>
  <div class="p-32 space-y-7">
    <ShadcnTab>
      <ShadcnTabItem label="Tab 1" value="Tab 1">
        <p>Tab 1 content</p>
      </ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2">
        <p>Tab 2 content</p>
      </ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">
        <p>Tab 3 content</p>
      </ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab type="primary">
      <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="success">
      <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="warning">
      <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="error">
      <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab size="default">
      <ShadcnTabItem label="Default 1" value="Default 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Default 2" value="Default 2" disabled>Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Default 3" value="Default 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab size="small">
      <ShadcnTabItem label="Small 1" value="Small 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Small 2" value="Small 2" disabled>Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Small 3" value="Small 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab direction="vertical" position="left">
      <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab direction="vertical" position="right">
      <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
      <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
  </div>
</template>

<script setup lang="ts">
</script>