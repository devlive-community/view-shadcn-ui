<template>
  <ShadcnTable :columns="columns" :data="data" stripe border/>
</template>

<script setup lang="ts">
interface Column {
  label: string;
  key: string;
}

const total = 20;
const columns: Column[] = [];
const data: Record<string, string>[] = [];

for (let i = 0; i < total; i++) {
  columns.push({
    label: `Address ${i}`,
    key: `address${i}`
  });
}

for (let i = 0; i < total; i++) {
  const rowData: Record<string, string> = {};
  for (let j = 0; j < total; j++) {
    rowData[`address${j}`] = `New York No. ${i}-${j} Lake Park`;
  }
  data.push(rowData);
}
</script>
