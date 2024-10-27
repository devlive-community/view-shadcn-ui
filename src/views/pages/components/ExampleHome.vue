<template>
  <ShadcnTable :columns="columns" :data="data"/>
</template>

<script setup lang="ts">
const total = 20
const columns = []
const data = []

for (let i = 0; i < total; i++) {
  columns.push({
    label: `Address ${i}`,
    key: `address${i}`
  })
}

for (let i = 0; i < total; i++) {
  const rowData: Record<string, string> = {}
  for (let j = 0; j < total; j++) {
    rowData[`address${j}`] = `New York No. ${i}-${j} Lake Park`
  }
  data.push(rowData)
}
</script>
