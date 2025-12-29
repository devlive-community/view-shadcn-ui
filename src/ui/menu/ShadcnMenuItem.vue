<template>
  <ShadcnLink v-if="to"
              :class="[
                   'flex items-center justify-between px-3 py-2 text-sm rounded-md focus:outline-none cursor-pointer',
                   dark ? 'hover:bg-gray-700 focus:bg-gray-700' : 'hover:bg-gray-100 focus:bg-gray-100',
                   isActive ? (dark ? 'bg-gray-700' : 'bg-gray-100') : '',
                   dark ? 'text-gray-200' : ''
              ]"
              :dark="dark"
              :data-name="name"
              :data-parent="parentName"
              :link="to as any"
              @click="onClick">
    <div class="flex items-center gap-2 min-w-0">
      <slot name="icon"/>
      <span class="truncate">
        <slot/>
      </span>
    </div>
    <slot name="suffix"/>
  </ShadcnLink>
  <div v-else
       :class="[
             'flex items-center justify-between px-3 py-2 text-sm rounded-md focus:outline-none cursor-pointer',
             dark ? 'hover:bg-gray-700 focus:bg-gray-700' : 'hover:bg-gray-100 focus:bg-gray-100',
             isActive ? (dark ? 'bg-gray-700' : 'bg-gray-100') : '',
             dark ? 'text-gray-200' : ''
       ]"
       :data-name="name"
       :data-parent="parentName"
       @click="onClick">
    <div class="flex items-center gap-2 min-w-0">
      <slot name="icon"/>
      <span class="truncate">
        <slot/>
      </span>
    </div>
    <slot name="suffix"/>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { ShadcnLink } from '@/ui/link'

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
  dark?: boolean
}

const isActive = computed(() => props.active || menuContext.activeKey.value === props.name)
const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const parentName = menuContext.parentName || null
const dark = computed(() => menuContext.dark || false)

const onClick = (event: MouseEvent) => {
  menuContext.setActiveKey(props.name)

  if (menuContext.direction === 'horizontal') {
    menuContext.setExpandedKey(null)
  }

  emit('on-active', !props.active)
  emit('on-click', event)
}
</script>
