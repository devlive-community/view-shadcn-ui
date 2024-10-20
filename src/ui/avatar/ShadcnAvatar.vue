<template>
  <Avatar :class="cn(size && Size[size],
                     square && 'rounded-sm')">
    <AvatarImage :src="String(src)"
                 :class="cn('border-2 border-background cursor-pointer',
                            size && Size[size])"
                 @load="onImageLoaded"
                 @error="onImageFailed"/>
    <AvatarFallback>{{ alt }}</AvatarFallback>
  </Avatar>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils.ts'

enum Size
{
  default = 'w-10 h-10',
  small = 'w-8 h-8',
  large = 'w-14 h-14'
}

const emit = defineEmits(['on-success', 'on-failed'])

withDefaults(defineProps<{
  src?: string
  alt?: string
  size?: keyof typeof Size
  square?: boolean
}>(), {
  size: 'default'
})

const onImageLoaded = () => emit('on-success')

const onImageFailed = () => emit('on-failed')
</script>
