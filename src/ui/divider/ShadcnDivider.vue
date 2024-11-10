<template>
  <div :class="cn(type === 'vertical' ? 'border-l' : 'flex items-center w-full relative pr-8')">
    <!-- Left dividing line -->
    <div v-if="text && orientation === 'left'" class="w-8 border-t border-gray-100"
         :class="dashed && 'border-dashed'"/>
    <div v-else-if="orientation !== 'left'"
         :class="cn(
           type === 'vertical' ? 'bg-gray-100' : 'flex-grow border-t border-gray-100',
           dashed && 'border-dashed',
           orientation === 'right' && 'flex-1'
         )"/>

    <!-- A small short line on the left -->
    <div v-if="(text || $slots.default) && orientation === 'left' && type === 'horizontal'" class="w-8 mr-4 border-t border-gray-100"
         :class="dashed && 'border-dashed'"/>

    <!-- Text or slot content -->
    <span v-if="text"
          :class="cn(
            orientation === 'left' && (type === 'vertical' ? 'order-first mb-2' : 'mx-4'),
            orientation === 'right' && (type === 'vertical' ? 'order-last mt-2' : 'order-last mx-4'),
            orientation === 'center' && (type === 'vertical' ? 'my-2' : 'mx-6'),
            'text-sm text-gray-500',
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
           type === 'vertical' ? 'bg-gray-100' : 'flex-grow border-t border-gray-100',
           dashed && 'border-dashed',
           orientation === 'right' && 'flex-1'
         )"/>

    <!-- A small short line on the right -->
    <div v-if="(text || $slots.default) && orientation === 'right' && type === 'horizontal'"
         class="absolute right-0 top-1/2 -translate-y-1/2 w-8 border-t border-gray-100"
         :class="dashed && 'border-dashed'"/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DividerProps } from '@/ui/divider/types.ts'

withDefaults(defineProps<DividerProps>(), {
  type: 'horizontal',
  dashed: false
})
</script>
