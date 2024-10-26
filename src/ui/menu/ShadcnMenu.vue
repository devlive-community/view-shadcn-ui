<template>
  <div class="bg-white p-2"
       :style="{ width: direction === 'vertical' ? calcSize(props.width) : '100%' }">
    <div :class="['flex', directionClass]">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, computed } from 'vue'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<{
  width?: number | string
  direction?: 'horizontal' | 'vertical'
}>(), {
  width: 200,
  direction: 'vertical'
})

const activeKey = ref<string | null>(null)

const directionClass = computed(() => {
  return props.direction === 'horizontal' ? 'flex-row items-center space-x-4' : 'flex-col space-y-2'
})

provide('menuContext', {
  activeKey,
  setActiveKey: (key: string) => {
    activeKey.value = key
  },
  direction: props.direction
})
</script>
