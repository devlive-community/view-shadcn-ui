<template>
  <ShadcnTab>
    <ShadcnTabItem label="Tab 1" value="Tab 1">
      <p>Tab 1 content</p>
    </ShadcnTabItem>
    <ShadcnTabItem label="Tab 2" value="Tab 2">
      <p>Tab 2 content</p>
    </ShadcnTabItem>
    <ShadcnTabItem value="Tab 3" @on-click="console.log('Tab 3 clicked')">
      <template #label>
        <div class="flex items-center space-x-1">
          <ShadcnIcon icon="Save"/>
          <span>Label Slot</span>
        </div>
      </template>
      <p>Tab 3 content</p>
    </ShadcnTabItem>
  </ShadcnTab>
</template>

<script setup lang="ts">
</script>
