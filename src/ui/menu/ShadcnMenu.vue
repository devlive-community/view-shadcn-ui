<template>
  <div class="bg-white rounded-lg p-2"
       :style="{ width: calcSize(width) }">
    <div class="space-y-2">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<{
  width?: number | string
}>(), {
  width: 200
})

const activeKey = ref<string | null>(null)

provide('menuContext', {
  activeKey,
  setActiveKey: (key: string) => {
    activeKey.value = key
  }
})
</script>
