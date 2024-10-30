<template>
  <div :class="cn('relative inline-block overflow-hidden bg-muted',
                  size && SkeletonSize[size],
                  square ? 'rounded-sm' : 'rounded-full')">
    <img v-if="src"
         :src="String(src)"
         :class="cn('aspect-square h-full w-full object-cover border-2 border-background cursor-pointer',
                    size && SkeletonSize[size])"
         :alt="alt"
         @load="onImageLoaded"
         @error="onImageFailed"/>
    <div v-else
         :class="cn('flex h-full w-full items-center justify-center bg-muted font-medium',
                    size && SkeletonSize[size])">
      {{ alt }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { SkeletonSize } from '@/ui/common/size.ts'

const emit = defineEmits(['on-success', 'on-failed'])

withDefaults(defineProps<{
  src?: string
  alt?: string
  size?: keyof typeof SkeletonSize
  square?: boolean
}>(), {
  size: 'default'
})

const onImageLoaded = () => emit('on-success')

const onImageFailed = () => emit('on-failed')
</script>
