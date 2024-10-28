<template>
  <ShadcnTable :columns="columns"
               :data="data"
               stripe
               border
               width="200"
               @on-row-click="onRowClick">
  </ShadcnTable>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address', width: 80, fixed: 'left' },
  { label: 'Age', key: 'age', fixed: 'right' },
  { label: 'Actions', key: 'actions' }
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
