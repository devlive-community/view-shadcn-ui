<template>
  <div class="flex h-screen bg-gray-100 w-screen">
    <ShadcnDataBuilderEditor :items="panels"
                             :resize="false"
                             :config-width="300"
                             :canvas-style="{backgroundColor: '#ffffff'}"
                             @update-config="console.log($event)"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const panels = ref([
  {
    group: 'Basic Components',
    children: [
      {
        type: 'text', label: 'Text', configure: [
          {
            group: 'Text Group',
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
      },
      {
        type: 'image', label: 'Image', configure: [
          {
            group: 'Text Group',
            items: [
              { type: 'text', label: 'Text Component', description: 'Description', value: 'Hello, View Shadcn UI' },
              { type: 'number', label: 'Number Component', value: 12, min: 0, max: 100 },
              { type: 'textarea', label: 'Textarea Component', value: 'Hello, View Shadcn UI' },
              { type: 'password', label: 'Password Component', value: '123456789' },
              { type: 'switch', label: 'Switch Component', value: false, trueValue: 'On', falseValue: 'Off' },
              { type: 'radio', label: 'Radio Component', value: 'Option 1', options: [{ label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }] },
              {
                type: 'checkbox',
                label: 'Checkbox Component',
                value: ['Option 1', 'Option 2', 'Option 3'],
                options: [{ label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }]
              },
              { type: 'select', label: 'Select Component', value: 'Option 1', options: [{ label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }] },
              { type: 'slider', label: 'Slider Component', value: 50, min: 0, max: 100, showTip: true },
              { type: 'rate', label: 'Rate Component', value: 3, max: 5 }
            ]
          },
          {
            group: 'Text Group 2',
            items: [
              { type: 'text', label: 'Text', value: 'Hello, View Shadcn UI' },
              { type: 'title', label: 'Title' },
              { type: 'paragraph', label: 'Paragraph' }
            ]
          }
        ]
      },
      { type: 'chart', label: 'Chart' }
    ]
  }
])
</script>
