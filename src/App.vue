<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnHierarchicalDataFilter</h3>
        <div :class="['p-4 rounded-lg border', isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white']">
          <div class="space-y-4">
            <div class="space-y-2">
              <p :class="isDark ? 'text-gray-400' : 'text-gray-600'">层级数据筛选组件:</p>
              <ShadcnHierarchicalDataFilter v-model="hierarchicalFilters" :fields="filterFields as any" :dark="isDark"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnHierarchicalDataFilter } from "@/ui/data-filter";

const isDark = ref(false)
const hierarchicalFilters = ref([])
const filterFields = ref([
  { label: '姓名', value: 'name', type: 'string' },
  { label: '年龄', value: 'age', type: 'number' },
  { label: '状态', value: 'status', type: 'boolean' }
])
</script>