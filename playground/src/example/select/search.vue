<template>
  <div class="space-y-6">
    <div class="relative">
      <div class="space-y-4">
        <div>
          <p class="text-sm mb-2 text-gray-700">普通搜索选择器</p>
          <ShadcnSelect v-model="searchSelectValue" :options="citiesOptions" search placeholder="请搜索城市" />
        </div>
        <div>
          <p class="text-sm mb-2 text-gray-700">多选搜索选择器</p>
          <ShadcnSelect v-model="searchMultiValue" :options="citiesOptions" search multiple placeholder="请搜索并选择多个城市" />
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
        <div class="p-8 rounded-lg bg-white/50">
          <div class="space-y-4">
            <div>
              <p class="text-sm mb-2 text-gray-700">液态玻璃搜索选择器</p>
              <ShadcnSelect v-model="searchGlassValue" :options="citiesOptions" search glass placeholder="请搜索城市" />
            </div>
            <div>
              <p class="text-sm mb-2 text-gray-700">液态玻璃多选搜索选择器</p>
              <ShadcnSelect v-model="searchGlassMultiValue" :options="citiesOptions" search multiple glass placeholder="请搜索并选择多个城市" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchSelectValue = ref('')
const searchMultiValue = ref([])
const searchGlassValue = ref('')
const searchGlassMultiValue = ref([])

const citiesOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' },
  { value: 'chengdu', label: '成都' },
  { value: 'chongqing', label: '重庆' },
  { value: 'wuhan', label: '武汉' },
  { value: 'xian', label: '西安' },
  { value: 'tianjin', label: '天津' },
  { value: 'suzhou', label: '苏州' },
  { value: 'dalian', label: '大连' },
  { value: 'qingdao', label: '青岛' },
  { value: 'jinan', label: '济南' }
]
</script>
