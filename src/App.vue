<template>
  <div class="p-6 min-h-screen" style="height: 100vh">
    <ShadcnDataBuilderEditor :items="stylePanels" :config-width="300" @update-config="console.log($event)">
      <template #panel-label="{ item }">
        {{ item.label }} - {{ item.type }}
      </template>
      <template #text="{ configure, isSelected }">
        <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
          {{ getConfigValue(configure, 'text', 'Text Component') }}
        </ShadcnText>
      </template>
    </ShadcnDataBuilderEditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const getConfigValue = (configure, groupKey, label) => {
  if (!configure) {
    return null
  }
  const group = configure.find(g => g.key === groupKey)
  if (!group) {
    return null
  }
  const item = group.items?.find(item => item.label === label)
  return item?.value
}

const stylePanels = ref([
  {
    group: 'Basic Components',
    children: [
      {
        type: 'text', label: 'Text', configure: [
          {
            group: 'Style Group',
            key: 'style',
            items: [
              { type: 'text', label: 'Background Color', key: 'backgroundColor', description: 'Description', value: '#FFF333' },
              { type: 'number', label: 'Border Radius', key: 'borderRadius', value: '12', min: 0, max: 100, formatter: (value) => `${ value }px` }
            ]
          },
          {
            group: 'Text Group',
            key: 'text',
            items: [
              {
                type: 'text',
                label: 'Text Component',
                description: 'This is a long description',
                value: 'Hello, View Shadcn UI',
                required: true
              }
            ]
          }
        ]
      },
      {
        type: 'chart', label: 'Chart', configure: [
          {
            group: 'Style Group',
            key: 'style',
            items: [
              { type: 'text', label: 'Background Color', key: 'backgroundColor', description: 'Description', value: '#FFF333' },
              { type: 'number', label: 'Border Radius', key: 'borderRadius', value: '12', min: 0, max: 100, formatter: (value) => `${ value }px` }
            ]
          },
          {
            group: 'Text Group',
            key: 'text',
            items: [
              {
                type: 'text',
                label: 'Text Component',
                description: 'This is a long description',
                value: 'Hello, View Shadcn UI'
              }
            ]
          }
        ]
      }
    ]
  }
])
</script>