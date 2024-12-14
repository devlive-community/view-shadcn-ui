<template>
  <button :class="['fixed flex items-center justify-center p-2 border shadow-md transition-all duration-300 hover:scale-105',
                circle && 'rounded-full'
          ]"
          :style="positionStyle">
    <slot v-if="$slots.icon" name="icon"/>

    <slot v-else/>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FloatButtonProps } from './types'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<FloatButtonProps>(), {
  position: 'bottom-right',
  circle: false,
  top: 40,
  left: 40,
  right: 40,
  bottom: 40
})

const positionStyle = computed(() => {
  switch (props.position) {
    case 'top-left':
      return {
        top: calcSize(props.top),
        left: calcSize(props.left)
      }
    case 'top-right':
      return {
        top: calcSize(props.top),
        right: calcSize(props.right)
      }
    case 'bottom-left':
      return {
        bottom: calcSize(props.bottom),
        left: calcSize(props.left)
      }
    case 'bottom-right':
    default:
      return {
        bottom: calcSize(props.bottom),
        right: calcSize(props.right)
      }
  }
})
</script>
