<template>
  <div :class="['inline-flex',
              !color && TextType[colorType],
              strong && 'font-semibold',
              italic && 'italic',
              underline && 'underline',
              deleted && 'line-through'
        ]"
       :style="[
              color && {color: color}
       ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { TextProps } from '@/ui/text/types.ts'
import { TextType } from '@/ui/common/type.ts'

withDefaults(defineProps<TextProps>(), {
  colorType: 'default',
  strong: false,
  italic: false,
  underline: false,
  deleted: false
})
</script>
