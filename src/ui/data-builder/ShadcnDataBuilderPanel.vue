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
            <slot name="label" :item="value">
              {{ value.label }}
            </slot>
          </div>
        </div>
      </ShadcnCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnDataBuilderPanelItemProps, ShadcnDataBuilderPanelProps } from './types'
import { calcSize } from '@/utils/common.ts'

declare global
{
  interface Window
  {
    __componentFunctionsMap: Map<string, any>
  }
}

withDefaults(defineProps<ShadcnDataBuilderPanelProps>(), {
  width: 200,
  items: () => [] as ShadcnDataBuilderPanelItemProps[]
})

const onDragStart = (e, component) => {
  e.dataTransfer.setData('componentType', component.type)
  e.dataTransfer.setData('componentLabel', component.label)

  const transferId = `transfer_${ Date.now() }_${ Math.random().toString(36).substr(2, 9) }`
  e.dataTransfer.setData('transferId', transferId)

  // 深拷贝 configure，但保留函数
  // Deep copy configure, but keep functions
  const processConfigureData = (data) => {
    return data.map(group => ({
      ...group,
      items: group.items.map(item => ({
        ...item,
        // 如果有格式化函数，保存函数引用
        // If there is a formatting function, save the function reference
        formatter: item.formatter
      }))
    }))
  }

  if (component.configure) {
    const configureWithFunctions = processConfigureData(component.configure)
    e.dataTransfer.setData('componentConfigure', JSON.stringify(component.configure))

    // 使用唯一ID存储函数引用
    // Use unique IDs to store function references
    if (!window.__componentFunctionsMap) {
      window.__componentFunctionsMap = new Map()
    }
    // @ts-ignore
    window.__componentFunctionsMap.set(transferId, configureWithFunctions)
  }
}
</script>
