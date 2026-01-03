<template>
  <div :class="['flex flex-1', hasSider ? 'flex-row' : 'flex-col']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue'

const slots = useSlots()
const hasSider = ref(false)

const findSider = () => {
  const children = slots.default?.()
  if (!children) return false

  return children.some(child => {
    const type = child.type as any
    return type?.name === 'ShadcnLayoutSider' || type?.__name === 'ShadcnLayoutSider'
  })
}

onMounted(() => {
  hasSider.value = findSider()
})
</script>
