<template>
  <div class="bg-white p-2"
       :style="{ width: direction === 'vertical' ? calcSize(props.width) : '100%' }">
    <div :class="['flex', directionClass]">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<{
  modelValue?: string | null
  width?: number | string
  direction?: 'horizontal' | 'vertical'
}>(), {
  width: 200,
  direction: 'vertical'
})

const emit = defineEmits(['update:modelValue'])

const activeKey = ref<string | null>(props.modelValue)
const expandedKey = ref<string | null>(null)

const directionClass = computed(() => {
  return props.direction === 'horizontal' ? 'flex-row items-center space-x-4' : 'flex-col space-y-2'
})

const updateActiveKey = (key: string) => {
  activeKey.value = key
  emit('update:modelValue', key)
}

provide('menuContext', {
  activeKey,
  setActiveKey: updateActiveKey,
  direction: props.direction,
  expandedKey,
  setExpandedKey: (key: string | null) => {
    expandedKey.value = key
  }
})
</script>
