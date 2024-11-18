<template>
  <div class="flex h-screen bg-gray-100">
    <slot name="panel">
      <BigScreenPanel :items="panels"/>
    </slot>

    <!-- 中间编辑区域 -->
    <BigScreenContent ref="editorRef"
                      :grid-size="20"
                      :selected-id="selectedId"
                      @select="handleSelect"
                      @update:components="handleComponentsUpdate"/>

    <!-- 右侧配置面板 -->
    <BigScreenConfigure :selected-component="selectedComponent" @update="handleConfigUpdate"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import BigScreenPanel from "@/ui/bigscreen/BigScreenPanel.vue";
import BigScreenConfigure from "@/ui/bigscreen/BigScreenConfigure.vue";
import BigScreenContent from "@/ui/bigscreen/BigScreenContent.vue";

const panels = ref([
  {
    group: 'Basic Components',
    children: [
      {type: 'text', label: '文本'},
      {type: 'image', label: '图片'},
      {type: 'chart', label: '图表'},
    ]
  }
])
const editorRef = ref(null)
const components = ref([])
const selectedId = ref(null)

// 计算选中的组件
const selectedComponent = computed(() =>
    components.value.find(item => item.id === selectedId.value)
)

// 选择组件
const handleSelect = (component) => {
  selectedId.value = component.id
}

// 更新组件列表
const handleComponentsUpdate = (newComponents) => {
  components.value = newComponents
}

// 更新组件配置
const handleConfigUpdate = (updatedComponent) => {
  editorRef.value?.updateComponent(updatedComponent)
}
</script>
