<template>
  <ShadcnDataBuilderView :width="style.width"
                         :height="style.height"
                         :items="items"
                         :canvas-style="style.canvasStyle">
    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'text', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderView>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { fnToFunction } from '@/utils/formatter.ts'

const style = ref({
  'width': 1920,
  'height': 1080,
  'canvasStyle': { 'backgroundColor': '#ffffff' },
  'items': [{
    'id': 1732028258612,
    'type': 'text',
    'label': 'Text',
    'x': 240,
    'y': 120,
    'width': 520,
    'height': 300,
    'zIndex': 1,
    'configure': [{
      'group': 'Style Group',
      'key': 'style',
      'items': [{ 'type': 'text', 'label': 'Background Color', 'key': 'backgroundColor', 'description': 'Description', 'value': '#FFF333' },
        { 'type': 'number', 'label': 'Border Radius', 'key': 'borderRadius', 'value': '12', 'min': 0, 'max': 100, 'formatter': '(value) => `${value}px`' }]
    }, {
      'group': 'Text Group',
      'key': 'text',
      'items': [{ 'type': 'text', 'label': 'Text Component', 'description': 'This is a long description', 'value': 'Hello, View Shadcn UI' }]
    }]
  }]
})

const getConfigValue = (configure, groupName, label) => {
  if (!configure) {
    return null
  }
  const group = configure.find(g => g.key === groupName)
  if (!group) {
    return null
  }
  const item = group.items?.find(item => item.label === label)
  return item?.value
}

const deepClone = (obj: any) => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  }

  const cloned = {}
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      cloned[key] = obj[key]
    }
    else {
      cloned[key] = deepClone(obj[key])
    }
  }
  return cloned
}

const items = computed(() => {
  return style.value.items?.map(item => ({
    ...item,
    configure: item.configure?.map(group => ({
      ...group,
      items: group.items?.map(configItem => ({
        ...configItem,
        formatter: typeof configItem.formatter === 'string'
            ? (fnToFunction(configItem.formatter) ?? (() => undefined))()
            : configItem.formatter
      }))
    }))
  }))
})
</script>
