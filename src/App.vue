<template>
  <ShadcnException>
    <template #actions>
      <ShadcnDropdown trigger="click">
        <template #trigger>
          <ShadcnButton>Click Open</ShadcnButton>
        </template>
        <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
        <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
        <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
      </ShadcnDropdown>
      <ShadcnDropdown trigger="hover" position="right">
        <template #trigger>
          <ShadcnButton>Hover Open</ShadcnButton>
        </template>
        <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
        <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
        <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
      </ShadcnDropdown>
    </template>
  </ShadcnException>
</template>

<script setup lang="ts">
</script>
