<template>
  <div :class="['inline-flex',
              !color && TextType[colorType]
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
  colorType: 'default'
})
</script>
