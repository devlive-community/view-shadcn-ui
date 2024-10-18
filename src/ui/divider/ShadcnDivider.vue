<template>
  <div :class="cn(type === 'vertical' ? 'border-l' : 'flex items-center w-full')">
    <div v-if="orientation !== 'left'"
         :class="cn(type === 'vertical' ? 'bg-gray-300' : 'flex-grow border-t border-gray-300')"/>

    <div :class="cn(
           orientation === 'left' && (type === 'vertical' ? 'order-first mb-2' : 'order-first mr-4'),
                 orientation === 'right' && (type === 'vertical' ? 'order-last mt-2' : 'order-last ml-4'),
                 orientation === 'center' && (type === 'vertical' ? 'my-2' : 'mx-6')
         )">
      <slot v-if="$slots.default"/>
      <span v-else-if="text">{{ text }}</span>
    </div>

    <div v-if="orientation !== 'right'"
         :class="cn(type === 'vertical' ? 'bg-gray-300' : 'flex-grow border-t border-gray-300')"/>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'

withDefaults(defineProps<{
  text?: string
  type?: 'horizontal' | 'vertical'
  orientation?: 'left' | 'center' | 'right'
}>(), {
  type: 'horizontal'
})
</script>
