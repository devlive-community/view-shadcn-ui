<template>
  <div :class="['inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            TagBackgroundType[type],
            border && 'border',
            border && TagBorderType[type],
            [type === 'default' ? 'text-gray-800' : 'text-white']
        ]">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { TagBackgroundType, TagBorderType } from '@/ui/common/type.ts'

withDefaults(defineProps<{
  text?: string
  type?: keyof typeof TagBackgroundType
  border?: boolean
}>(), {
  type: 'default',
  border: false
})
</script>
