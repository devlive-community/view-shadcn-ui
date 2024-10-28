<template>
  <ShadcnTable :columns="columns"
               :data="data"
               stripe
               border
               width="800"
               @on-row-click="onRowClick">
  </ShadcnTable>
</template>

<script setup lang="ts">
const columns = [
  { 'label': 'Name', 'key': 'name', 'width': 100, 'fixed': 'left' },
  { 'label': 'Age', 'key': 'age', 'width': 100, 'fixed': 'left' },
  { 'label': 'Province', 'key': 'province', 'width': 100 },
  { 'label': 'City', 'key': 'city', 'width': 100 },
  { 'label': 'Address', 'key': 'address', 'width': 200 },
  { 'label': 'Postcode', 'key': 'zip', 'width': 100, 'fixed': 'right' },
  { 'label': 'Action', 'key': 'action', 'fixed': 'right', 'width': 160 }
]
const data = [
  { 'name': 'John Brown', 'age': 18, 'address': 'New York No. 1 Lake Park', 'province': 'America', 'city': 'New York', 'zip': 100000 },
  { 'name': 'Jim Green', 'age': 24, 'address': 'Washington, D.C. No. 1 Lake Park', 'province': 'America', 'city': 'Washington, D.C.', 'zip': 100000 },
  { 'name': 'Joe Black', 'age': 30, 'address': 'Sydney No. 1 Lake Park', 'province': 'Australian', 'city': 'Sydney', 'zip': 100000 },
  { 'name': 'Jon Snow', 'age': 26, 'address': 'Ottawa No. 2 Lake Park', 'province': 'Canada', 'city': 'Ottawa', 'zip': 100000 }
]

const onRowClick = (row: any, index: number) => {
  console.log(row, index)
}
</script>
