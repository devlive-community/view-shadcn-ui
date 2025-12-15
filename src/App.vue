<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnContribution - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
            <ShadcnContribution :data="contributionData" glass :dark="isDark" :year="2024" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnContribution } from "@/ui/contribution";

const isDark = ref(false)

const contributionData = ref([
  { date: '2024-01-15', count: 5, weekday: 1 },
  { date: '2024-02-10', count: 3, weekday: 6 },
  { date: '2024-03-05', count: 8, weekday: 2 },
  { date: '2024-04-20', count: 12, weekday: 6 },
  { date: '2024-05-12', count: 6, weekday: 0 },
  { date: '2024-06-08', count: 9, weekday: 6 },
  { date: '2024-07-14', count: 4, weekday: 0 },
  { date: '2024-08-22', count: 11, weekday: 4 },
  { date: '2024-09-18', count: 7, weekday: 3 },
  { date: '2024-10-25', count: 10, weekday: 5 },
  { date: '2024-11-30', count: 2, weekday: 6 },
  { date: '2024-12-15', count: 13, weekday: 0 }
])
</script>