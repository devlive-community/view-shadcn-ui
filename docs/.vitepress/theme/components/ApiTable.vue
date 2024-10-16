<template>
  <ShadcnCard>
    <template #content>
      <div class="p-2 border-b space-y-10">
        <div class="font-bold">{{ title }}</div>
      </div>

      <table class="w-full">
        <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" class="p-2 text-left">
            {{ header }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(column, rowIndex) in columns" :key="rowIndex">
          <td v-for="(value, colIndex) in column" :key="colIndex" class="p-2">
            {{ value }}
          </td>
        </tr>
        </tbody>
      </table>
    </template>
  </ShadcnCard>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  headers: {
    type: Array as () => string[],
    required: true
  },
  columns: {
    type: Array as () => string[][],
    required: true
  }
})
</script>

<style scoped>
.vp-doc table {
  margin: 0;
  display: table;
}
</style>
