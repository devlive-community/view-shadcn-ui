<template>
  <div :class="cn(type === 'vertical' ? 'border-l' : 'flex items-center w-full relative pr-8')">
    <!-- Left dividing line -->
    <div v-if="text && orientation === 'left'" :class="cn('w-8 border-t',
         glass ? (dark ? 'border-white/30' : 'border-gray-400/50') : (dark ? 'border-gray-600' : 'border-gray-100'),
         glass && 'shadow-sm shadow-black/10',
         dashed && 'border-dashed')"/>
    <div v-else-if="orientation !== 'left'"
         :class="cn(
           type === 'vertical' ? (glass ? (dark ? 'bg-white/30' : 'bg-gray-400/50') : (dark ? 'bg-gray-600' : 'bg-gray-100')) : cn('flex-grow border-t', glass ? (dark ? 'border-white/30' : 'border-gray-400/50') : (dark ? 'border-gray-600' : 'border-gray-100')),
           glass && 'shadow-sm shadow-black/10',
           dashed && 'border-dashed',
           orientation === 'right' && 'flex-1'
         )"/>

    <!-- A small short line on the left -->
    <div v-if="(text || $slots.default) && orientation === 'left' && type === 'horizontal'"
         :class="cn('w-8 mr-4 border-t',
         glass ? (dark ? 'border-white/30' : 'border-gray-400/50') : (dark ? 'border-gray-600' : 'border-gray-100'),
         glass && 'shadow-sm shadow-black/10',
         dashed && 'border-dashed')"/>

    <!-- Text or slot content -->
    <span v-if="text"
          :class="cn(
            orientation === 'left' && (type === 'vertical' ? 'order-first mb-2' : 'mx-4'),
            orientation === 'right' && (type === 'vertical' ? 'order-last mt-2' : 'order-last mx-4'),
            orientation === 'center' && (type === 'vertical' ? 'my-2' : 'mx-6'),
            'text-sm',
            dark ? 'text-gray-400' : 'text-gray-500',
            (orientation === 'right' && type === 'horizontal') && 'mr-3'
          )">
      {{ text }}
    </span>
    <div v-else
         :class="cn(
           orientation === 'left' && (type === 'vertical' ? 'order-first mb-2' : 'mr-4'),
           orientation === 'right' && (type === 'vertical' ? 'order-last mt-2' : 'order-last mx-4'),
           orientation === 'center' && (type === 'vertical' ? 'my-2' : 'mx-6'),
         )">
      <slot/>
    </div>

    <!-- Dividing line on the right -->
    <div :class="cn(
           type === 'vertical' ? (glass ? (dark ? 'bg-white/30' : 'bg-gray-400/50') : (dark ? 'bg-gray-600' : 'bg-gray-100')) : cn('flex-grow border-t', glass ? (dark ? 'border-white/30' : 'border-gray-400/50') : (dark ? 'border-gray-600' : 'border-gray-100')),
           glass && 'shadow-sm shadow-black/10',
           dashed && 'border-dashed',
           orientation === 'right' && 'flex-1'
         )"/>

    <!-- A small short line on the right -->
    <div v-if="(text || $slots.default) && orientation === 'right' && type === 'horizontal'"
         :class="cn('absolute right-0 top-1/2 -translate-y-1/2 w-8 border-t',
         glass ? (dark ? 'border-white/30' : 'border-gray-400/50') : (dark ? 'border-gray-600' : 'border-gray-100'),
         glass && 'shadow-sm shadow-black/10',
         dashed && 'border-dashed')"/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DividerProps } from '@/ui/divider/types.ts'

withDefaults(defineProps<DividerProps>(), {
  type: 'horizontal',
  dashed: false,
  dark: false,
  glass: false
})
</script>
