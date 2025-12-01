<template>
  <div class="relative">
    <div :class="[animation ? 'animate-pulse' : '', skeletonClass]">
      <div :class="[
             'flex justify-center items-center',
             dark ? 'bg-gray-700' : 'bg-gray-200',
             skeletonShapeClass
           ]"
           :style="{ width }">
        <template v-if="props.type === 'image'">
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               :class="dark ? 'text-gray-500' : 'text-gray-400'" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SkeletonSize } from '@/ui/common/size.ts'
import { SkeletonItemProps } from '@/ui/skeleton/types.ts'

const props = withDefaults(defineProps<SkeletonItemProps>(), {
  animation: false,
  type: 'rect',
  size: 'default',
  dark: false
})

const skeletonShapeClass = computed(() => {
  switch (props.type) {
    case 'circle':
      return `rounded-full aspect-square ${ SkeletonSize[props.size] }`
    case 'square':
      return `rounded aspect-square ${ SkeletonSize[props.size] }`
    case 'rect':
      return `rounded w-full ${ SkeletonSize[props.size] }`
    case 'image':
      return `rounded-md ${ SkeletonSize[props.size] }`
  }
})

const skeletonClass = computed(() => {
  return SkeletonSize[props.size] || SkeletonSize.default
})
</script>