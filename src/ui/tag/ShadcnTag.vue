<template>
  <div :class="['inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            ButtonBackgroundType[type],
            [type === 'default' ? 'text-gray-800 border' : 'text-white']
        ]">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ButtonBackgroundType } from '@/ui/common/type.ts'

withDefaults(defineProps<{
  text?: string
  type?: keyof typeof ButtonBackgroundType
}>(), {
  type: 'default'
})
</script>
