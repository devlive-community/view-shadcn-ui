<template>
  <div class="p-20 space-x-7">
    <ShadcnDropdown trigger="hover" position="left">
      <template #trigger>
        <ShadcnButton>Left</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="click" position="right">
      <template #trigger>
        <ShadcnButton>Right</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="hover" position="top">
      <template #trigger>
        <ShadcnButton>Hover Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="hover" position="bottom">
      <template #trigger>
        <ShadcnButton>Hover Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
  </div>
</template>

<script setup lang="ts">
</script>
