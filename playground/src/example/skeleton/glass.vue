<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="p-8 rounded-lg bg-white/50">
          <div class="space-y-6">
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-800">基础骨架屏</h4>
              <ShadcnSkeleton glass />
            </div>
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-800">带动画效果</h4>
              <ShadcnSkeleton glass animation />
            </div>
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-800">不同形状</h4>
              <div class="flex gap-4 items-center">
                <ShadcnSkeletonItem type="circle" size="large" glass animation />
                <ShadcnSkeletonItem type="square" size="large" glass animation />
                <ShadcnSkeletonItem type="rect" width="200px" size="large" glass animation />
              </div>
            </div>
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-800">图片骨架屏</h4>
              <ShadcnSkeletonItem type="image" size="large" glass animation />
            </div>
            <div>
              <h4 class="text-base font-semibold mb-3 text-gray-800">自定义排版</h4>
              <ShadcnSkeleton glass animation :paragraph="{ rows: 5, width: [100, 200, '300px', '50%', '62%'] }" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-purple-900 to-pink-900">
          <div class="p-8 rounded-lg bg-gray-800/50">
            <div class="space-y-6">
              <div>
                <h4 class="text-base font-semibold mb-3 text-gray-200">基础骨架屏</h4>
                <ShadcnSkeleton glass dark />
              </div>
              <div>
                <h4 class="text-base font-semibold mb-3 text-gray-200">带动画效果</h4>
                <ShadcnSkeleton glass animation dark />
              </div>
              <div>
                <h4 class="text-base font-semibold mb-3 text-gray-200">不同形状</h4>
                <div class="flex gap-4 items-center">
                  <ShadcnSkeletonItem type="circle" size="large" glass animation dark />
                  <ShadcnSkeletonItem type="square" size="large" glass animation dark />
                  <ShadcnSkeletonItem type="rect" width="200px" size="large" glass animation dark />
                </div>
              </div>
              <div>
                <h4 class="text-base font-semibold mb-3 text-gray-200">图片骨架屏</h4>
                <ShadcnSkeletonItem type="image" size="large" glass animation dark />
              </div>
              <div>
                <h4 class="text-base font-semibold mb-3 text-gray-200">自定义排版</h4>
                <ShadcnSkeleton glass animation dark :paragraph="{ rows: 5, width: [100, 200, '300px', '50%', '62%'] }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnSkeleton, ShadcnSkeletonItem } from '@/ui/skeleton'
</script>
