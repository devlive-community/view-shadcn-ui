<template>
  <div class="shadcn-layout-sider relative flex flex-col transition-all duration-300 ease-in-out"
       :style="{ width: collapsed ? `${collapsedWidth}px` : `${width}px` }">
    <div v-show="!collapsed" class="flex-1 transition-opacity duration-300">
      <slot/>
    </div>

    <div v-show="collapsed" class="flex-1 transition-opacity duration-300">
      <slot name="collapsed">
        <div class="flex flex-col items-center py-2 space-y-4">
          <slot name="icon"/>
        </div>
      </slot>
    </div>

    <div v-if="collapsible && trigger"
         class="absolute top-1/2 -right-3 w-6 h-6 flex items-center justify-center border rounded-full cursor-pointer transform -translate-y-1/2 shadow-md bg-white border-gray-200 hover:bg-gray-50"
         @click="toggleCollapse">
      <div class="flex items-center text-gray-500">
        <ShadcnIcon v-if="collapsed" class="h-4 w-4" icon="ChevronRight"/>
        <ShadcnIcon v-else class="h-4 w-4" icon="ChevronLeft"/>
      </div>
    </div>

    <slot name="trigger" v-if="collapsible && !trigger"
          :collapsed="collapsed"
          :toggle="toggleCollapse"/>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { ShadcnIcon } from '@/ui/icon'
import { SiderHookProviderKey } from './injectionKey'

interface Props {
  width?: string
  collapsedWidth?: string
  collapsible?: boolean
  defaultCollapsed?: boolean
  trigger?: boolean
}

defineOptions({
  name: 'ShadcnLayoutSider'
})

let uniqueId = ''
const siderHook = inject(SiderHookProviderKey, undefined)

onMounted(() => {
  uniqueId = `shadcn-sider-${Date.now()}-${Math.random().toString(36).slice(2)}`
  siderHook?.addSider(uniqueId)
})

onBeforeUnmount(() => {
  siderHook?.removeSider(uniqueId)
})

const emit = defineEmits(['on-collapse'])

const props = withDefaults(defineProps<Props>(), {
  width: '200',
  collapsedWidth: '80',
  collapsible: true,
  defaultCollapsed: false,
  trigger: false
})

const collapsed = ref(props.defaultCollapsed)

const toggleCollapse = () => {
  collapsed.value = !collapsed.value
  emit('on-collapse', collapsed.value)
}

// Expose methods and state to parent component
defineExpose({
  collapse: () => {
    collapsed.value = true
    emit('on-collapse', collapsed.value)
  },
  expand: () => {
    collapsed.value = false
    emit('on-collapse', collapsed.value)
  },
  toggle: toggleCollapse,
  isCollapsed: collapsed
})
</script>
