<template>
  <div class="p-4 min-h-screen space-y-6">
    <h2 class="text-xl font-semibold mb-4">Code</h2>
    <ShadcnCodeEditor v-model="value"
                      :auto-complete-config="{
                          endpoint: 'https://www.ip.cn/api/index?ip&type=0',
                          trigger: ['.', '@'],
                          transform: (data: any) => {
                            return data.items.map((item: any) => ({
                              label: item.name,
                              insertText: item.code,
                              detail: item.description
                            }))
                          }
                        }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '@/utils/locale.ts'

setLocale('zh-CN')

const value = ref('<template>\n' +
    '  <div ref="shadowContainer"></div>\n' +
    '</template>\n' +
    '\n' +
    '<script setup lang="ts">\n' +
    'import { onMounted, ref, watch } from \'vue\'\n' +
    'import hljs from \'highlight.js\'\n' +
    'import { themes } from \'@/ui/code/themes.ts\'\n' +
    'import { CodeEmits, CodeProps } from \'@/ui/code/types.ts\'\n' +
    '\n' +
    'const emit = defineEmits<CodeEmits>()\n' +
    '\n' +
    'const props = withDefaults(defineProps<CodeProps>(), {\n' +
    '  language: \'javascript\',\n' +
    '  theme: \'github\',\n' +
    '  showLineNumbers: false\n' +
    '})')
</script>