<template>
  <div :class="['inline-flex',
              TextType[type]
        ]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { TextProps } from '@/ui/text/types.ts'
import { TextType } from '@/ui/common/type.ts'

withDefaults(defineProps<TextProps>(), {
  type: 'default'
})
</script>
