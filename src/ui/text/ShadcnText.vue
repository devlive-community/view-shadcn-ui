<template>
  <div :class="['inline-flex',
              !color && (dark ? TextTypeDark[colorType] : TextType[colorType]),
              strong && 'font-semibold',
              italic && 'italic',
              underline && 'underline',
              deleted && 'line-through',
              type && TextMode[type as keyof typeof TextMode]
        ]"
       :style="[
              color && {color: color}
       ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { TextMode, TextProps } from '@/ui/text/types.ts'
import { TextType, TextTypeDark } from '@/ui/common/type.ts'

withDefaults(defineProps<TextProps>(), {
  type: 'p',
  colorType: 'default',
  strong: false,
  italic: false,
  underline: false,
  deleted: false,
  dark: false
})
</script>
