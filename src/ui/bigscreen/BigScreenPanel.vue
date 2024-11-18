<template>
  <div class="w-64 bg-white border-r border-gray-200 p-4">
    <div v-for="item in items" class="text-lg font-medium mb-4">
      <ShadcnCard :title="item.group">
        <div class="space-y-2 p-1">
          <div v-for="item in item.children"
               draggable="true"
               class="p-3 bg-gray-50 border border-gray-200 rounded cursor-move text-center hover:bg-gray-100 transition-colors"
               :key="item.type"
               @dragstart="onDragStart($event, item)">
            {{ item.label }}
          </div>
        </div>
      </ShadcnCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BigScreenPanelItemProps, BigScreenPanelProps } from '@/ui/bigscreen/types.ts'

withDefaults(defineProps<BigScreenPanelProps>(), {
  items: () => Array<BigScreenPanelItemProps>
})

const onDragStart = (e, component) => {
  e.dataTransfer.setData('componentType', component.type)
  e.dataTransfer.setData('componentLabel', component.label)
}
</script>
