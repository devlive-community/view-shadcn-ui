<template>
  <div class="p-32 space-y-2">
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal"/>
    <div class="flex space-x-2">
      <div>Vertical</div>
      <ShadcnDivider type="vertical"/>
      <a href="#">Link</a>
      <ShadcnDivider type="vertical"/>
      <div>Vertical</div>
    </div>

    <ShadcnDivider orientation="left">Left</ShadcnDivider>
    <ShadcnDivider orientation="center">Center</ShadcnDivider>
    <ShadcnDivider orientation="right">Right</ShadcnDivider>

    <ShadcnDivider dashed />
  </div>
</template>

<script setup lang="ts">
</script>
