<template>
  <div class="p-4 min-h-screen space-y-6">
    <h2 class="text-xl font-semibold mb-4">Shadcn Code Editor</h2>
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
                          },
                          // requestParams: (context) => ({
                          //     word: context.word,
                          //     line: context.position.lineNumber.toString()
                          // }),
                          // requestBody: (context) => ({
                          //     code: context.modelValue,
                          //     position: context.position
                          // })
                        }"/>

    <ShadcnCodeEditor v-model="value">
    </ShadcnCodeEditor>

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
                          },
                          // requestParams: (context) => ({
                          //     word: context.word,
                          //     line: context.position.lineNumber.toString()
                          // }),
                          // requestBody: (context) => ({
                          //     code: context.modelValue,
                          //     position: context.position
                          // })
                        }"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '@/utils/locale.ts'

setLocale('zh-CN')

const value = ref('')
</script>