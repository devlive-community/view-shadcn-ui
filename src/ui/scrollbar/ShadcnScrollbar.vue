<template>
  <div class="relative overflow-hidden">
    <div :class="[
           'overflow-y-auto scrollbar-thin scrollbar-track-transparent',
           dark ? 'scrollbar-thumb-gray-600' : 'scrollbar-thumb-gray-300',
           position === 'left' ? '[direction:rtl] pl-4 [&>*]:text-left [&>*]:[direction:ltr]' : 'pr-4'
         ]"
         :style="{ height: `${calcSize(height)}`, maxHeight: `${calcSize(height)}` }">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ScrollbarProps } from '@/ui/scrollbar/types.ts'
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<ScrollbarProps>(), {
  height: 300,
  position: 'right',
  dark: false
})
</script>
