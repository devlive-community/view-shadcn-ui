<template>
  <ShadcnLink v-if="to"
              :class="[
                   'flex items-center justify-between px-3 py-2 text-sm rounded-md focus:outline-none cursor-pointer',
                   dark ? 'text-gray-200 hover:bg-gray-700 focus:bg-gray-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                   isActive ? (dark ? 'bg-gray-700' : 'bg-gray-100 text-gray-900') : ''
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
             dark ? 'text-gray-200 hover:bg-gray-700 focus:bg-gray-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
             isActive ? (dark ? 'bg-gray-700' : 'bg-gray-100 text-gray-900') : ''
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
  parentName?: string
  dark?: { value: boolean }
  closeAllMenus?: () => void
}

const isActive = computed(() => props.active || menuContext.activeKey.value === props.name)
const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const parentName = menuContext.parentName || null
const dark = computed(() => menuContext.dark?.value || false)

const onClick = (event: MouseEvent) => {
  menuContext.setActiveKey(props.name)

  if (isHorizontal.value && menuContext.closeAllMenus) {
    menuContext.closeAllMenus()
  }

  emit('on-active', !props.active)
  emit('on-click', event)
}
</script>
