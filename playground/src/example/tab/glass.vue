<template>
  <div class="space-y-4">
    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="flex flex-col gap-6 w-full max-w-2xl">
          <ShadcnTab glass>
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
          </ShadcnTab>
          <ShadcnTab glass type="success">
            <ShadcnTabItem label="Success 1" value="Success 1">Success content</ShadcnTabItem>
            <ShadcnTabItem label="Success 2" value="Success 2">Success content</ShadcnTabItem>
            <ShadcnTabItem label="Success 3" value="Success 3">Success content</ShadcnTabItem>
          </ShadcnTab>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-green-400 to-teal-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="flex flex-col gap-6 w-full max-w-2xl">
          <ShadcnTab glass type="warning" closable>
            <ShadcnTabItem label="Warning 1" value="Warning 1">Warning content</ShadcnTabItem>
            <ShadcnTabItem label="Warning 2" value="Warning 2">Warning content</ShadcnTabItem>
            <ShadcnTabItem label="Warning 3" value="Warning 3">Warning content</ShadcnTabItem>
          </ShadcnTab>
          <ShadcnTab glass type="error">
            <ShadcnTabItem label="Error 1" value="Error 1">Error content</ShadcnTabItem>
            <ShadcnTabItem label="Error 2" value="Error 2">Error content</ShadcnTabItem>
          </ShadcnTab>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
