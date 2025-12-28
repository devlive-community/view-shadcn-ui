<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnSkeleton - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
          <div :class="['p-8 rounded-lg', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <div class="space-y-6">
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">基础骨架屏</h4>
                <ShadcnSkeleton glass :dark="isDark"/>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">带动画效果</h4>
                <ShadcnSkeleton glass animation :dark="isDark"/>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">不同形状</h4>
                <div class="flex gap-4 items-center">
                  <ShadcnSkeletonItem type="circle" size="large" glass :dark="isDark"/>
                  <ShadcnSkeletonItem type="square" size="large" glass :dark="isDark"/>
                  <ShadcnSkeletonItem type="rect" width="200px" size="large" glass :dark="isDark"/>
                </div>
              </div>
              <div>
                <h4 :class="['text-base font-semibold mb-3', isDark ? 'text-gray-200' : 'text-gray-800']">图片骨架屏</h4>
                <ShadcnSkeletonItem type="image" size="large" glass animation :dark="isDark"/>
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
import { ShadcnSkeleton, ShadcnSkeletonItem } from "@/ui/skeleton";

const isDark = ref(false)
</script>