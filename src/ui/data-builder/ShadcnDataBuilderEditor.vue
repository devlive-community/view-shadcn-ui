<template>
  <div class="flex w-full h-full">
    <!-- Left Panel -->
    <ShadcnDataBuilderPanel :width="panelWidth" :items="items"/>

    <!-- Middle Content -->
    <ShadcnDataBuilderCanvas v-model:components="components"
                             ref="contentRef"
                             :selected-id="selectedId"
                             :show-grid="showGrid"
                             :snap-to-grid="snapToGrid"
                             :grid-size="gridSize"
                             :show-ruler="showRuler"
                             :width="width"
                             :height="height"
                             :show-toolbar="showToolbar"
                             :is-center="isCenter"
                             :resize="resize"
                             :canvas-style="canvasStyle"
                             :show-guidelines="showGuidelines"
                             @select="onSelect"
                             @update:selected-id="selectedId = $event"/>

    <!-- Right Configure -->
    <ShadcnDataBuilderConfigure :selected-component="onSelectedComponent"
                                :canvas-width="width"
                                :canvas-height="height"
                                :grid-size="gridSize"
                                :canvas-style="canvasStyle"
                                :width="configWidth"
                                :snap-to-grid="snapToGrid"
                                @update="onConfigUpdate"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ShadcnDataBuilderPanel from './ShadcnDataBuilderPanel.vue'
import ShadcnDataBuilderCanvas from './ShadcnDataBuilderCanvas.vue'
import ShadcnDataBuilderConfigure from './ShadcnDataBuilderConfigure.vue'
import type { ShadcnDataBuilderCanvasState, ShadcnDataBuilderEditorEmits, ShadcnDataBuilderEditorProps, ShadcnDataBuilderPanelChildProps } from './types'

const emit = defineEmits<ShadcnDataBuilderEditorEmits>()
const props = withDefaults(defineProps<ShadcnDataBuilderEditorProps>(), {
  panelWidth: 200,
  configWidth: 200,
  items: () => [],
  showGrid: true,
  snapToGrid: true,
  gridSize: 20,
  showRuler: true,
  width: 1920,
  height: 1080,
  showToolbar: true,
  isCenter: false,
  resize: true,
  canvasStyle: () => ({}),
  showGuidelines: false
})

const components = ref<ShadcnDataBuilderPanelChildProps[]>([])
const selectedId = ref<string | undefined>(undefined)
const contentRef = ref()
const canvasStyle = ref(props.canvasStyle)

// 选中的组件
// Selected component
const onSelectedComponent = computed(() => {
  return components.value.find(item => item.id === selectedId.value)
})

// 处理组件选择
// Handle component selection
const onSelect = (component: ShadcnDataBuilderPanelChildProps) => {
  if (component) {
    selectedId.value = component.id as string
  }
}

// 处理配置更新
// Handle configuration update
const onConfigUpdate = (updatedComponent: ShadcnDataBuilderPanelChildProps | ShadcnDataBuilderCanvasState) => {
  if ('data' in updatedComponent) {
    canvasStyle.value = updatedComponent.data
  }
  else {
    contentRef.value?.updateComponent(updatedComponent)
  }
  emit('update-config', components.value)
}
</script>
