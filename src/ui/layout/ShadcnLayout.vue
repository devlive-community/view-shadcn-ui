<template>
  <div :class="['shadcn-layout flex flex-1', computedHasSider ? 'flex-row' : 'flex-col']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { SiderHookProviderKey } from './injectionKey'

defineOptions({
  name: 'ShadcnLayout'
})

interface Props {
  hasSider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hasSider: undefined
})

const siders = ref<string[]>([])

const computedHasSider = computed(() => {
  // 如果显式设置了 hasSider prop，优先使用
  if (typeof props.hasSider === 'boolean') {
    return props.hasSider
  }
  // 否则根据注册的 sider 数量判断
  return siders.value.length > 0
})

provide(SiderHookProviderKey, {
  addSider: (id: string) => {
    siders.value = [...siders.value, id]
  },
  removeSider: (id: string) => {
    siders.value = siders.value.filter(s => s !== id)
  }
})
</script>
