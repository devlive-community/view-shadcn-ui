<template>
  <div class="space-y-4 flex gap-4">
    <ShadcnDropdown trigger="click">
      <template #trigger>
        <ShadcnButton>点击打开</ShadcnButton>
      </template>
      <ShadcnDropdownItem>操作 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>操作 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>操作 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="hover">
      <template #trigger>
        <ShadcnButton>悬停打开</ShadcnButton>
      </template>
      <ShadcnDropdownItem>操作 1</ShadcnDropdownItem>
      <ShadcnDropdownItem>操作 2</ShadcnDropdownItem>
      <ShadcnDropdownItem divided>操作 3</ShadcnDropdownItem>
      <ShadcnDropdownItem>操作 4</ShadcnDropdownItem>
    </ShadcnDropdown>
  </div>
</template>

<script setup lang="ts">
</script>
