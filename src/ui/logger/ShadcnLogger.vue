<template>
  <div :class="['w-full font-mono text-sm', dark ? 'text-gray-200' : '']">
    <div v-if="toolbar" :class="['flex items-center gap-2 p-2', dark ? 'bg-gray-800 border-b border-gray-600' : 'bg-gray-50 border-b border-gray-200']">
      <ShadcnSelect v-model="filterLevel" :dark="dark" class="w-32">
        <template #options>
          <ShadcnSelectOption value="" :label="t('logger.text.allLevel')" :dark="dark"/>
          <ShadcnSelectOption v-for="level in Object.keys(highlightConfig)" :label="level" :value="level" :dark="dark"/>
        </template>
      </ShadcnSelect>

      <ShadcnInput v-model="searchText" :dark="dark" :placeholder="t('logger.placeholder.search')" class="flex-1"/>
    </div>

    <div :class="['overflow-y-auto', dark ? 'bg-gray-900' : 'bg-white']" :style="{ height: `${calcSize(height)}`, maxHeight: `${calcSize(height)}` }">
      <div class="min-w-full inline-block">
        <div v-for="(content, index) in filteredItems" :key="index" :class="['whitespace-pre py-1 w-full block', dark ? 'hover:bg-gray-800' : 'hover:bg-gray-100']">
          <div class="inline-block min-w-full px-4 space-x-2">
            <slot name="content" :item="content">
              <span v-if="content.timestamp">
                <ShadcnHighlight :case-sensitive="caseSensitive" :dark="dark" :highlight="searchText" :text="content.timestamp"/>
              </span>
              <span v-if="content.level" :style="{ color: highlightConfig[content.level] }">
                <ShadcnHighlight :case-sensitive="caseSensitive" :dark="dark" :highlight="searchText" :text="content.level"/>
              </span>
              <span v-if="content.thread" :class="[dark ? 'text-gray-400' : 'text-gray-500']">
                [<ShadcnHighlight :case-sensitive="caseSensitive" :dark="dark" :highlight="searchText" :text="content.thread"/>]
              </span>
              <span v-if="content.logger" :class="[dark ? 'text-gray-300' : 'text-gray-700']">
                <ShadcnHighlight :case-sensitive="caseSensitive" :dark="dark" :highlight="searchText" :text="content.logger"/>
              </span>
              <span v-if="content.file" :class="[dark ? 'text-gray-400' : 'text-gray-500']">
                [<ShadcnHighlight :case-sensitive="caseSensitive" :dark="dark" :highlight="searchText" :text="content.file"/>]
              </span>
              <span v-if="content.message">
                <ShadcnHighlight :case-sensitive="caseSensitive" :dark="dark" :highlight="searchText" :text="content.message"/>
              </span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { t } from '@/utils/locale'
import { LoggerProps } from '@/ui/logger/types.ts'
import { formatMultipleLines } from '@/utils/logger.ts'
import { calcSize } from '@/utils/common.ts'
import { ShadcnSelect, ShadcnSelectOption } from '@/ui/select'
import { ShadcnHighlight } from '@/ui/highlight'
import { ShadcnInput } from "@/ui/input";

const props = withDefaults(defineProps<LoggerProps>(), {
  items: () => [],
  highlightConfig: () => ({
    WARN: 'rgb(234 179 8)',
    ERROR: 'rgb(239 68 68)',
    DEBUG: 'rgb(107 114 128)',
    TRACE: 'rgb(156 163 175)'
  }),
  height: 200,
  toolbar: false,
  caseSensitive: false,
  customPatterns: undefined,
  dark: false
})

const filterLevel = ref('')
const searchText = ref('')

const formattedItems = computed(() => formatMultipleLines(props.items, undefined, props.customPatterns ? props.customPatterns : undefined))

const filteredItems = computed(() => {
  return formattedItems.value.filter(item => {
    const matchLevel = !filterLevel.value || item.level === filterLevel.value
    const matchSearch = !searchText.value ||
        (
            !props.caseSensitive ? Object.values(item).some(val => String(val).includes(searchText.value))
                : Object.values(item).some(val => String(val).toLowerCase().includes(searchText.value.toLowerCase()))
        )
    return matchLevel && matchSearch
  })
})
</script>
