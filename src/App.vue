<template>
  <div class="p-4 min-h-screen space-y-6">
    <h2 class="text-xl font-semibold mb-4">Contribution Graph</h2>
    <ShadcnContribution :data="contributionData"
                        :color-scheme="customColorScheme"
                        @on-select="handleSelect"/>

    <ShadcnContribution :data="contributionData"
                        :color-scheme="customColorScheme"
                        :show-legend="false"
                        @on-select="handleSelect">
      <template #cell="{ item, color }">
        <div class="w-full h-full rounded-lg border-2"
             :style="{
               backgroundColor: color,
               borderColor: item.count > 0 ? color : 'transparent'
             }"/>
      </template>
    </ShadcnContribution>

    <ShadcnContribution :data="contributionData"
                        :color-scheme="customColorScheme"
                        :year="2025"
                        @on-select="handleSelect"/>

    <div class="mt-4">
      Selected: {{ selectedDate }} - {{ selectedCount }} contributions
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '@/utils/locale.ts'

setLocale('zh-CN')

const contributionData = ref([
  { date: '2024-01-01', count: 2 },
  { date: '2024-01-02', count: 5 },
  { date: '2024-01-03', count: 8 },
  { date: '2024-01-04', count: 12 },
  { date: '2024-01-05', count: 3 },
  { date: '2024-01-06', count: 0 },
  { date: '2024-01-07', count: 6 }
])

const customColorScheme = [
  '#ebedf0',    // 0 contributions
  '#bfd4f2',    // 1-3 contributions
  '#7fa8ed',    // 4-6 contributions
  '#4775c9',    // 7-9 contributions
  '#254e89'     // 10+ contributions
]

// Selected data state
// 选中数据状态
const selectedDate = ref('')
const selectedCount = ref(0)

// Handle selection event
// 处理选择事件
const handleSelect = (data: any) => {
  selectedDate.value = data.date
  selectedCount.value = data.count

  console.log(`Selected date: ${ data.date }, contributions: ${ data.count }`)
}
</script>