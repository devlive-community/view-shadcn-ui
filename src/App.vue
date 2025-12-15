<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnBreadcrumb - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div class="relative">
            <div
                :class="['h-32 rounded-lg flex items-center justify-center', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
              <ShadcnBreadcrumb glass :dark="isDark">
                <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
                <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
                <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
              </ShadcnBreadcrumb>
            </div>
          </div>

          <div class="relative">
            <div
                :class="['h-32 rounded-lg flex items-center justify-center', isDark ? 'bg-gradient-to-r from-pink-900 to-rose-900' : 'bg-gradient-to-r from-pink-400 to-rose-400']">
              <ShadcnBreadcrumb glass :dark="isDark" separator=">">
                <ShadcnBreadcrumbItem href="#">Dashboard</ShadcnBreadcrumbItem>
                <ShadcnBreadcrumbItem href="#">Settings</ShadcnBreadcrumbItem>
                <ShadcnBreadcrumbItem>Profile</ShadcnBreadcrumbItem>
              </ShadcnBreadcrumb>
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
import { ShadcnBreadcrumb, ShadcnBreadcrumbItem } from "@/ui/breadcrumb";

const isDark = ref(false)
</script>