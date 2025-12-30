<template>
  <div class="space-y-4">
    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="flex flex-col gap-6">
          <ShadcnPagination glass v-model="currentPage1" :total="100" />
          <ShadcnPagination glass v-model="currentPage2" :total="200" show-total />
          <ShadcnPagination glass v-model="currentPage3" :total="300" show-total show-sizer />
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-green-400 to-teal-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="flex flex-col gap-6">
          <ShadcnPagination glass v-model="currentPage4" :total="500" show-total />
          <ShadcnPagination glass v-model="currentPage5" :total="1000" show-total show-sizer :sizer-options="[10, 20, 50, 100]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage1 = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
const currentPage4 = ref(1)
const currentPage5 = ref(1)
</script>
