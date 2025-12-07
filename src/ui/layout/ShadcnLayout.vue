<template>
  <div :class="['flex flex-col', dark ? 'bg-gray-900' : 'bg-white']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'

interface Props
{
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dark: false
})

const isInLayout = ref(true)
const hasSider = ref(false)
const siderPosition = ref<'left' | 'content'>('left')
const dark = computed(() => props.dark)

provide('isInLayout', isInLayout)
provide('hasSider', hasSider)
provide('siderPosition', siderPosition)
provide('dark', dark)

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
