<template>
  <component :is="props.to ? ShadcnLink : 'div'"
             :link="props.to"
             :class="[
               'px-3 py-2 text-sm rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer',
               { 'bg-gray-100': isActive },
               isHorizontal ? 'inline-flex' : 'flex'
             ]"
             @click="onClick"
             :data-name="props.name"
             :data-parent="parentName">
    <div class="flex items-center gap-2 min-w-0">
      <slot name="icon"/>
      <span class="truncate">
        <slot/>
      </span>
    </div>
    <slot name="suffix"/>
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import ShadcnLink from '@/ui/link'

const props = withDefaults(defineProps<{
  name: string
  active?: boolean
  to?: string | object
}>(), {
  active: false,
  to: undefined
})

const emit = defineEmits(['on-active', 'on-click'])

const menuContext = inject('menuContext') as {
  activeKey: { value: string | null }
  setActiveKey: (key: string) => void
  direction: 'horizontal' | 'vertical'
  setExpandedKey: (key: string | null) => void
  parentName?: string
}

const isActive = computed(() => props.active || menuContext.activeKey.value === props.name)
const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const parentName = menuContext.parentName || null

const onClick = (event: MouseEvent) => {
  menuContext.setActiveKey(props.name)

  if (menuContext.direction === 'horizontal') {
    menuContext.setExpandedKey(null)
  }

  emit('on-active', !props.active)
  emit('on-click', event)
}
</script>
