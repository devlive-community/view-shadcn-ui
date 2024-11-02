<template>
  <ShadcnTable :columns="columns" :data="data" stripe>
    <template #action>
      <ShadcnDropdown trigger="click">
        <template #trigger>
          <ShadcnButton>Click Open</ShadcnButton>
        </template>
        <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
        <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
        <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
      </ShadcnDropdown>
    </template>
  </ShadcnTable>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' },
  { label: 'Action', key: 'action', slot: 'action' }
]
const data = [
  { name: 'John Doe', address: 'New York No. 1 Lake Park', age: 32 },
  { name: 'Joe Black', address: 'Sidney No. 1 Lake Park', age: 42 },
  { name: 'Jim Green', address: 'London No. 1 Lake Park', age: 32 },
  { name: 'Jim Red', address: 'London No. 2 Lake Park', age: 32 }
]
</script>