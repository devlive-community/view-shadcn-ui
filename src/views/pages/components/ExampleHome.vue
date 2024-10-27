<template>
  <ShadcnTable :columns="columns"
               :data="data"
               stripe
               border
               @on-row-click="onRowClick">
    <template #actions="{ row }">
      {{ row }}
    </template>
  </ShadcnTable>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' },
  { label: 'Actions', key: 'actions', slot: 'actions' }
]
const data = [
  { name: 'John Doe', address: 'New York No. 1 Lake Park', age: 32 },
  { name: 'Joe Black', address: 'Sidney No. 1 Lake Park', age: 42 },
  { name: 'Jim Green', address: 'London No. 1 Lake Park', age: 32 },
  { name: 'Jim Red', address: 'London No. 2 Lake Park', age: 32 }
]

const onRowClick = (row: any, index: number) => {
  console.log(row, index)
}
</script>
