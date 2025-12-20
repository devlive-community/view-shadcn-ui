<template>
  <div :class="['inline-flex',
              !color && (dark ? TextTypeDark[colorType] : TextType[colorType]),
              strong && 'font-semibold',
              italic && 'italic',
              underline && 'underline',
              deleted && 'line-through',
              type && TextMode[type as keyof typeof TextMode],
              background && 'rounded-lg px-3 py-1',
              background && glass && 'backdrop-blur-xl backdrop-saturate-150',
              background && glass && 'shadow-lg shadow-black/5',
              background && glass && (dark ? 'bg-white/10 border border-white/20' : 'bg-white/30 border border-gray-400/40')
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
  dark: false,
  glass: false,
  background: false
})
</script>
