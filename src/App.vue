<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Select 搜索功能</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50">
          <div class="space-y-4">
            <div>
              <label :class="['block text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">普通搜索选择器</label>
              <ShadcnSelect v-model="selectedValue1" search placeholder="请选择" :dark="isDark">
                <template #options>
                  <ShadcnSelectOption v-for="city in cities" :key="city.value" :value="city.value" :label="city.label" :dark="isDark" />
                </template>
              </ShadcnSelect>
            </div>
            <div>
              <label :class="['block text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">液态玻璃搜索选择器</label>
              <ShadcnSelect v-model="selectedValue2" search glass placeholder="请选择" :dark="isDark">
                <template #options>
                  <ShadcnSelectOption v-for="city in cities" :key="city.value" :value="city.value" :label="city.label" :dark="isDark" glass />
                </template>
              </ShadcnSelect>
            </div>
            <div>
              <label :class="['block text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">多选搜索选择器</label>
              <ShadcnSelect v-model="selectedValue3" search multiple glass placeholder="请选择多个城市" :dark="isDark">
                <template #options>
                  <ShadcnSelectOption v-for="city in cities" :key="city.value" :value="city.value" :label="city.label" :dark="isDark" glass />
                </template>
              </ShadcnSelect>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button"
import { ShadcnSelect, ShadcnSelectOption } from "@/ui/select"

const isDark = ref(false)
const selectedValue1 = ref('')
const selectedValue2 = ref('')
const selectedValue3 = ref([])

const cities = ref([
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
  { value: 'suzhou', label: '苏州' }
])
</script>
