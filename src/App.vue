<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnSelect - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']">
            <div class="flex flex-col gap-4">
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">单选模式</h4>
                <ShadcnSelect v-model="selectValue" :options="selectOptions" glass :dark="isDark" placeholder="请选择选项"/>
              </div>
              <div>
                <h4 :class="['text-sm font-medium mb-2', isDark ? 'text-gray-200' : 'text-gray-700']">多选模式</h4>
                <ShadcnSelect v-model="selectMultiValue" :options="selectOptions" glass :dark="isDark" multiple placeholder="请选择多个选项"/>
              </div>
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
import { ShadcnSelect } from "@/ui/select";

const isDark = ref(false)
const selectValue = ref(null)
const selectMultiValue = ref([])
const selectOptions = [
  { value: '1', label: '选项 1' },
  { value: '2', label: '选项 2' },
  { value: '3', label: '选项 3' },
  { value: '4', label: '选项 4' },
  { value: '5', label: '选项 5' }
]
</script>