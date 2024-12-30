<template>
  <ShadcnCodeEditor v-model="value"
                    :context-menu-config="{
                           showDefaultItems: true,
                           items: [{
                              label: 'Format Code',
                              icon: 'Save',
                              action: ({ editor, selection}) => {
                                console.log(editor.getModel()?.getValueInRange(selection))
                              }
                           }]
                      }">
  </ShadcnCodeEditor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello View Shadcn UI')
</script>