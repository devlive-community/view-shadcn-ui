<template>
  <div class="w-full font-mono text-sm">
    <div v-if="toolbar" class="flex items-center gap-2 p-2">
      <ShadcnSelect v-model="filterLevel" class="w-32">
        <template #options>
          <ShadcnSelectOption value="" :label="t('logger.text.allLevel')"/>
          <ShadcnSelectOption v-for="level in Object.keys(highlightConfig)" :label="level" :value="level"/>
        </template>
      </ShadcnSelect>

      <ShadcnInput v-model="searchText" class="flex-1" :placeholder="t('logger.placeholder.search')"/>
    </div>

    <div class="overflow-y-auto" :style="{ height: `${calcSize(height)}`, maxHeight: `${calcSize(height)}` }">
      <div class="min-w-full inline-block">
        <div v-for="(content, index) in filteredItems" class="whitespace-pre py-1 hover:bg-gray-100 w-full block" :key="index">
          <div class="inline-block min-w-full px-4">
            <slot name="content" :item="content">
              <span class="mr-1.5">
                <ShadcnHighlight :case-sensitive="caseSensitive" :text="content.timestamp" :highlight="searchText"/>
              </span>
              <span class="mr-1.5" :style="{ color: highlightConfig[content.level] }">
                <ShadcnHighlight :case-sensitive="caseSensitive" :text="content.level" :highlight="searchText"/>
              </span>
              <span class="text-gray-500 mr-1.5">
                [<ShadcnHighlight :case-sensitive="caseSensitive" :text="content.thread" :highlight="searchText"/>]
              </span>
              <span class="text-gray-700 mr-1.5">
                <ShadcnHighlight :case-sensitive="caseSensitive" :text="content.logger" :highlight="searchText"/>
              </span>
              <span class="text-gray-500 mr-1.5">
                [<ShadcnHighlight :case-sensitive="caseSensitive" :text="content.file" :highlight="searchText"/>]
              </span>
              <span>
                <ShadcnHighlight :case-sensitive="caseSensitive" :text="content.message" :highlight="searchText"/>
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
import ShadcnSelect from '@/ui/select'
import ShadcnHighlight from '@/ui/highlight'

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
  caseSensitive: false
})

const filterLevel = ref('')
const searchText = ref('')

const formattedItems = computed(() => formatMultipleLines(props.items))

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
