<template>
  <div class="bg-white border-r border-gray-200" :style="{ width: calcSize(width) }">
    <div v-for="item in items" class="text-lg font-medium mb-4">
      <ShadcnCard class="rounded-none" :border="false" :title="item.group">
        <div class="space-y-2 px-5 py-2">
          <div v-for="value in item.children"
               class="p-3 bg-gray-50 border border-gray-200 rounded cursor-move text-center hover:bg-gray-100 transition-colors"
               draggable="true"
               :key="value.type"
               @dragstart="onDragStart($event, value)">
            {{ value.label }}
          </div>
        </div>
      </ShadcnCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BigScreenPanelItemProps, BigScreenPanelProps } from '@/ui/bigscreen/types.ts'
import { calcSize } from '@/utils/common.ts'

withDefaults(defineProps<BigScreenPanelProps>(), {
  width: 200,
  items: () => [] as BigScreenPanelItemProps[]
})

const onDragStart = (e, component) => {
  e.dataTransfer.setData('componentType', component.type)
  e.dataTransfer.setData('componentLabel', component.label)
}
</script>
