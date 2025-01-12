<template>
  <div class="p-32 space-y-4">
    <div>
      <ShadcnDivider orientation="left">小尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="small">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">默认尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns" :data="data">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">大尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="large">
      </ShadcnDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref<any[]>([
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄' },
  { key: 'address', label: '地址' }
])

const data = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' }
])
</script>