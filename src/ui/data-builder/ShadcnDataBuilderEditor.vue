<template>
  <div class="flex w-full h-full">
    <!-- Left Panel -->
    <ShadcnDataBuilderPanel :width="panelWidth" :items="items"/>

    <!-- Middle Content -->
    <ShadcnDataBuilderContent v-model:components="components"
                              :selected-id="selectedId"
                              :show-grid="showGrid"
                              :snap-to-grid="snapToGrid"
                              :grid-size="gridSize"
                              :show-ruler="showRuler"
                              @select="onSelect"/>

    <!-- Right Configure -->
    <ShadcnDataBuilderConfigure :selected-component="onSelectedComponent" @update="onConfigUpdate"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ShadcnDataBuilderPanel from './ShadcnDataBuilderPanel.vue'
import ShadcnDataBuilderContent from './ShadcnDataBuilderContent.vue'
import ShadcnDataBuilderConfigure from './ShadcnDataBuilderConfigure.vue'
import type { ShadcnDataBuilderEditorEmits, ShadcnDataBuilderEditorProps, ShadcnDataBuilderPanelChildProps } from '@/ui/data-builder/types'

const emit = defineEmits<ShadcnDataBuilderEditorEmits>()
withDefaults(defineProps<ShadcnDataBuilderEditorProps>(), {
  panelWidth: 200,
  items: () => [],
  showGrid: true,
  snapToGrid: true,
  gridSize: 20,
  showRuler: true
})

const components = ref<ShadcnDataBuilderPanelChildProps[]>([])
const selectedId = ref<string>('')
const contentRef = ref()

// 选中的组件
// Selected component
const onSelectedComponent = computed(() => {
  return components.value.find(item => item.id === selectedId.value)
})

// 处理组件选择
// Handle component selection
const onSelect = (component: ShadcnDataBuilderPanelChildProps) => {
  selectedId.value = component.id as string
}

// 处理配置更新
// Handle configuration update
const onConfigUpdate = (updatedComponent: ShadcnDataBuilderPanelChildProps) => {
  contentRef.value?.updateComponent(updatedComponent)
  emit('update-config', components.value)
}
</script>
