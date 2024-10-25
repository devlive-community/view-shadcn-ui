<template>
  <div class="flex flex-col">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

const isInLayout = ref(true)
const hasSider = ref(false)
const siderPosition = ref<'left' | 'content'>('left')

provide('isInLayout', isInLayout)
provide('hasSider', hasSider)
provide('siderPosition', siderPosition)

const updateSiderStatus = () => {
  const sider = document.querySelector('.shadcn-layout-sider')
  hasSider.value = !!sider

  if (sider) {
    const content = document.querySelector('.shadcn-layout-content')
    if (content?.contains(sider)) {
      siderPosition.value = 'content'
    }
    else {
      siderPosition.value = 'left'
    }
  }
}

onMounted(() => {
  updateSiderStatus()
})
</script>
