<template>
  <div v-show="isActive">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  value: string
  disabled?: boolean
  icon?: string
}>(), {
  disabled: false
})

const activeTab = inject('activeTab') as { value: string }
const registerTab = inject('registerTab') as (label: string, value: string, disabled?: boolean, icon?: string) => void

onMounted(() => {
  registerTab(props.label, props.value, props.disabled, props.icon)

  // For consistency, if it is the first non-disabled tag and there is no currently activated tag, it is set to the activated state.
  if (activeTab.value === '' && !props.disabled) {
    activeTab.value = props.value
  }
})

const isActive = computed(() => {
  return activeTab.value === props.value
})
</script>
