<template>
  <div :class="[
          'w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 flex items-center justify-between cursor-pointer',
          { 'bg-gray-100': isActive }
        ]"
       @click="onClick">
    <div class="flex items-center gap-2">
      <slot name="icon"/>
      <span>
          <slot/>
        </span>
    </div>
    <slot name="suffix"/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  active?: boolean
}>(), {
  active: false
})

const emit = defineEmits(['on-active', 'on-click'])

const menuContext = inject('menuContext') as {
  activeKey: { value: string | null }
  setActiveKey: (key: string) => void
}

const isActive = computed(() => {
  return props.active || menuContext.activeKey.value === props.name
})

const onClick = (event: MouseEvent) => {
  menuContext.setActiveKey(props.name)
  emit('on-active', !props.active)
  emit('on-click', event)
}
</script>
