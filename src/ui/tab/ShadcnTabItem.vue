<template>
  <div v-if="isActive">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted } from 'vue'
import { TabItemProps } from '@/ui/tab/types.ts'

const props = withDefaults(defineProps<TabItemProps>(), {
  disabled: false
})

// Add emit for click event
const emit = defineEmits(['on-click'])

// Add slots to expose label slot content
const slots = defineSlots<{
  label?: () => any
}>()

const activeTab = inject('activeTab') as { value: string }
const registerTab = inject('registerTab') as (
    label: string,
    value: string,
    disabled?: boolean,
    icon?: string,
    labelSlot?: () => any,
    onClick?: (e: MouseEvent) => void
) => void
const unregisterTab = inject('unregisterTab') as (value: string) => void

// Handle click event
const onClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emit('on-click', e)
  }
}

onMounted(() => {
  // Pass the label slot and click handler to registerTab
  registerTab(props.label, props.value, props.disabled, props.icon, slots.label, onClick)

  // For consistency, if it is the first non-disabled tag and there is no currently activated tag, it is set to the activated state.
  if (activeTab.value === '' && !props.disabled) {
    activeTab.value = props.value
  }
})

onBeforeUnmount(() => {
  try {
    unregisterTab?.(props.value)
    activeTab.value = ''
  }
  catch (error) {
    console.error('Error cleaning up tab:', error)
  }
})

const isActive = computed(() => {
  return activeTab.value === props.value
})
</script>