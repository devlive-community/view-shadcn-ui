<template>
  <div class="p-32 space-y-4">
    <ShadcnDataTable :columns="columns"
                     :data="data"
                     size="small"
                     @on-sort="handleSort">
    </ShadcnDataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref<any[]>([
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄', sortable: true },
  { key: 'address', label: '地址', sortable: true }
])

const data = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' }
])

// 模拟服务器排序数据
const mockData = [
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' },
  { name: '王五', age: 25, address: '广州' },
  { name: '赵六', age: 22, address: '深圳' }
]

const handleSort = async (sortColumns: any[]) => {
  // 模拟服务器排序
  setTimeout(() => {
    const sortedData = [...mockData].sort((a, b) => {
      for (const column of sortColumns) {
        const aValue = a[column.key]
        const bValue = b[column.key]
        const order = column.sort === 'asc' ? 1 : -1

        if (aValue === bValue) {
          continue
        }

        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue) * order
        }
        return (aValue - bValue) * order
      }
      return 0
    })

    // 更新表格数据
    data.value = sortedData
  }, 2000)
}
</script>