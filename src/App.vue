<template>
  <div class="p-4 min-h-screen space-y-6">
    <h2 class="text-xl font-semibold mb-4">Shadcn Code Editor</h2>
    <ShadcnCodeEditor v-model="value"
                      :search-config="{
                          showHistory: true
                      }">
    </ShadcnCodeEditor>

    <ShadcnCodeEditor v-model="value">
    </ShadcnCodeEditor>

    <ShadcnCodeEditor v-model="value"
                      :search-config="{
                            caseSensitive: false,
                            replace: true
                      }">
    </ShadcnCodeEditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '@/utils/locale.ts'

setLocale('zh-CN')

const value = ref('')
</script>