<template>
  <div class="p-32 space-x-4">
    <ShadcnFloatButton position="bottom-right">
      <template #icon>🎉</template>
      <template #menu>
        <div class="p-2">
          <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 1</div>
          <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 2</div>
          <div class="py-1 px-2 hover:bg-gray-100 cursor-pointer">Menu 3</div>
        </div>
      </template>
    </ShadcnFloatButton>
    <ShadcnFloatButton position="bottom-left">Bottom Left</ShadcnFloatButton>
    <ShadcnFloatButton position="top-right">Top Right</ShadcnFloatButton>
    <ShadcnFloatButton position="top-left">Top Left</ShadcnFloatButton>
  </div>
</template>

<script setup lang="ts">
</script>
