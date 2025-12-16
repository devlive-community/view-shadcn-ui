<template>
  <div :class="[
            'relative inline-flex overflow-hidden w-fit',
            glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
            glass ? (dark ? 'bg-white/10' : 'bg-white/60') : (dark ? 'bg-gray-700' : 'bg-muted'),
            glass ? 'shadow-lg shadow-black/5' : '',
            size && SkeletonSize[size],
            square ? 'rounded-sm' : 'rounded-full'
       ]">
    <img v-if="src"
         :src="String(src)"
         :class="['aspect-square object-cover cursor-pointer',
                  glass ? 'border border-white/20' : 'border-2',
                  !glass && (dark ? 'border-gray-800' : 'border-white')
         ]"
         :alt="alt"
         @load="onImageLoaded"
         @error="onImageFailed"/>
    <div v-else
         :class="[
                'flex aspect-square items-center justify-center font-medium',
                dark ? 'bg-gray-700 text-gray-300' : 'bg-muted',
                size && SkeletonSize[size]
         ]">
      {{ alt }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { SkeletonSize } from '@/ui/common/size.ts'
import { AvatarEmits, AvatarProps } from '@/ui/avatar/types.ts'

const emit = defineEmits<AvatarEmits>()

withDefaults(defineProps<AvatarProps>(), {
  size: 'default',
  dark: false,
  glass: false
})

const onImageLoaded = () => emit('on-success')

const onImageFailed = () => emit('on-failed')
</script>