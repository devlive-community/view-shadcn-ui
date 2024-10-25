<!-- ShadcnTabItem.vue -->
<template>
  <div v-show="isActive">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  label: string
}>()

const tabs = inject('tabs') as {
  addTab: (tab: { label: string }) => void
  removeTab: (tab: { label: string }) => void
  activeTab: { value: { label: string } | null }
}

const tab = { label: props.label }

const isActive = computed(() => {
  return tabs.activeTab.value?.label === props.label
})

onMounted(() => {
  tabs.addTab(tab)
})

onUnmounted(() => {
  tabs.removeTab(tab)
})
</script>
