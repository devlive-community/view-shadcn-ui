<template>
  <div class="relative">
    <div :class="[animation ? 'animate-pulse' : '', skeletonClass]">
      <div class="bg-gray-200 flex justify-center items-center"
           :class="skeletonShapeClass"
           :style="{ width }">
        <template v-if="props.type === 'image'">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="text-gray-400">
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
import { SkeletonType } from '@/ui/common/type.ts'

const props = withDefaults(defineProps<{
  animation?: boolean
  width?: string
  type?: keyof typeof SkeletonType
}>(), {
  animation: false,
  type: 'rect'
})

const skeletonShapeClass = computed(() => {
  switch (props.type) {
    case 'circle':
      return 'rounded-full aspect-square'
    case 'square':
      return 'rounded aspect-square'
    case 'rect':
      return 'rounded h-4'
    case 'image':
      return 'rounded-md w-16 h-16'
  }
})

const skeletonClass = computed(() => {
  switch (props.type) {
    case 'circle':
      return 'w-16 h-16'
    case 'square':
      return 'w-16 h-16'
    case 'rect':
      return 'w-full'
    case 'image':
      return 'w-16 h-16'
  }
})
</script>
