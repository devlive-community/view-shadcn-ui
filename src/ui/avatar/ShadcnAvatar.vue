<template>
  <div :class="cn('relative inline-flex overflow-hidden bg-muted w-fit',
                  size && SkeletonSize[size],
                  square ? 'rounded-sm' : 'rounded-full')">
    <img v-if="src"
         :src="String(src)"
         :class="cn('aspect-square object-cover cursor-pointer border-white border-2')"
         :alt="alt"
         @load="onImageLoaded"
         @error="onImageFailed"/>
    <div v-else
         :class="cn('flex aspect-square items-center justify-center bg-muted font-medium',
                    size && SkeletonSize[size])">
      {{ alt }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { SkeletonSize } from '@/ui/common/size.ts'
import { AvatarEmits, AvatarProps } from '@/ui/avatar/types.ts'

const emit = defineEmits<AvatarEmits>()

withDefaults(defineProps<AvatarProps>(), {
  size: 'default'
})

const onImageLoaded = () => emit('on-success')

const onImageFailed = () => emit('on-failed')
</script>