<template>
  <div v-if="isInLayout"
       :class="['shadcn-layout-sider relative flex flex-col transition-all duration-300 ease-in-out', dark ? 'bg-gray-800 border-r border-gray-700' : 'bg-gray-50 border-r border-gray-200']"
       :style="{ width: collapsed ? `${collapsedWidth}px` : `${width}px` }">
    <!-- Sider content wrapper -->
    <div class="flex-1 overflow-hidden">
      <div class="h-full" :class="{ 'px-4 py-2': !collapsed }">
        <!-- Expanded state displays normal content -->
        <div v-show="!collapsed" class="transition-opacity duration-300">
          <slot/>
        </div>

        <!-- Show icon content in collapsed state -->
        <div v-show="collapsed" class="transition-opacity duration-300">
          <slot name="collapsed">
            <!-- Content when collapsed by default -->
            <div class="flex flex-col items-center py-2 space-y-4">
              <slot name="icon"/>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Trigger -->
    <div v-if="collapsible && trigger"
         :class="['absolute top-1/2 -right-3 w-6 h-6 flex items-center justify-center border rounded-full cursor-pointer transform -translate-y-1/2 shadow-md', dark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50']"
         @click="toggleCollapse">
      <div :class="['flex items-center', dark ? 'text-gray-300' : 'text-gray-500']">
        <ShadcnIcon v-if="collapsed" :dark="dark" class="h-4 w-4" icon="ChevronRight"/>
        <ShadcnIcon v-else :dark="dark" class="h-4 w-4" icon="ChevronLeft"/>
      </div>
    </div>

    <!-- Custom trigger -->
    <slot name="trigger" v-if="collapsible && !trigger"
          :collapsed="collapsed"
          :toggle="toggleCollapse"/>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { ShadcnIcon } from '@/ui/icon'

interface Props
{
  width?: string
  collapsedWidth?: string
  collapsible?: boolean
  defaultCollapsed?: boolean
  trigger?: boolean
}

const emit = defineEmits(['on-collapse'])

const props = withDefaults(defineProps<Props>(), {
  width: '200',
  collapsedWidth: '80',
  collapsible: true,
  defaultCollapsed: false,
  trigger: false
})

const isInLayout = inject('isInLayout', false)
const dark = inject('dark', false)
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
