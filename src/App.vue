<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Pagination 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50 flex flex-col items-center gap-6">
          <ShadcnPagination glass :dark="isDark" v-model="currentPage" :total="100" />
          <ShadcnPagination glass :dark="isDark" v-model="currentPage2" :total="200" show-total />
          <ShadcnPagination glass :dark="isDark" v-model="currentPage3" :total="300" show-total show-sizer />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnPagination } from "@/ui/pagination";

const isDark = ref(false)
const currentPage = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
</script>
