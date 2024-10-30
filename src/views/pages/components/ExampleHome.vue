<template>
  <ShadcnSlider v-model="value"
                :min="0"
                :max="100"
                :step="2"
                show-tip
                show-step/>
  <div>当前值: {{ value }}</div>
  <ShadcnTable :columns="columns"
               :data="data"
               stripe
               border
               width="800"
               height="150"
               @on-row-click="onRowClick">
  </ShadcnTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(50)

const columns = [
  { 'label': 'Name', 'key': 'name', 'width': 100 },
  { 'label': 'Age', 'key': 'age', 'width': 100 },
  { 'label': 'Province', 'key': 'province', 'width': 100 },
  { 'label': 'City', 'key': 'city', 'width': 100, 'fixed': 'left' },
  { 'label': 'Address', 'key': 'address', 'width': 200, 'fixed': 'left' },
  { 'label': 'Postcode', 'key': 'zip', 'width': 100, 'fixed': 'right' },
  { 'label': 'Action', 'key': 'action', 'width': 160, 'fixed': 'right' }
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
