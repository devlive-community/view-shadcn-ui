<template>
  <ShadcnCodeEditor v-model="value"
                    :auto-complete-config="{
                        endpoint: 'http://jsonplaceholder.typicode.com/posts',
                        method: 'GET',
                        trigger: ['.', '@'],
                        transform: (data: any) => {
                          return data.map((item: any) => ({
                              label: item.title,
                              insertText: item.body,
                              detail: item.title
                          }))
                        }
                    }">
  </ShadcnCodeEditor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello View Shadcn UI')
</script>