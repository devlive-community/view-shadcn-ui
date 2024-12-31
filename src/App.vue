<template>
  <div class="p-4 min-h-screen space-y-6">
    <h2 class="text-xl font-semibold mb-4">Shadcn Code Editor</h2>
    <ShadcnCodeEditor v-model="value"
                      :search-config="{
                          showHistory: true
                      }"
                      @on-focus="handleEditorFocus"
                      @on-blur="handleEditorBlur">
    </ShadcnCodeEditor>

    <ShadcnCodeEditor v-model="value"
                      @on-focus="handleEditorFocus"
                      @on-blur="handleEditorBlur">
    </ShadcnCodeEditor>

    <ShadcnCodeEditor v-model="value"
                      :search-config="{
                            caseSensitive: false,
                            replace: true
                      }"
                      @on-focus="handleEditorFocus"
                      @on-blur="handleEditorBlur">
    </ShadcnCodeEditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '@/utils/locale.ts'

setLocale('zh-CN')

const value = ref('')

const handleEditorFocus = (ctx) => {
  console.log('Focused editor ID:', ctx.getId())
}

const handleEditorBlur = (ctx) => {
  console.log('Blurred editor ID:', ctx.getId())
}
</script>