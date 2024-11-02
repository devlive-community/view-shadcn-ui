<template>
  <div class="p-20">
    <ShadcnDropdown trigger="hover">
      <template #trigger>
        <ShadcnButton>Click Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem divided>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
  </div>
</template>

<script setup lang="ts">
</script>
