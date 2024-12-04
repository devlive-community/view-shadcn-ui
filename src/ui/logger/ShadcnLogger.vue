<template>
  <div class="w-full font-mono text-sm">
    <div class="overflow-y-auto" :style="{ height: `${calcSize(height)}`, maxHeight: `${calcSize(height)}` }">
      <div class="min-w-full inline-block">
        <div v-for="(content, index) in items" class="whitespace-pre py-1 hover:bg-gray-100 w-full block" :key="index">
          <div class="inline-block min-w-full px-4">
            <slot name="content" :item="content">
              <span class="mr-1.5">{{ content.timestamp }}</span>
              <span class="mr-1.5" :style="{ color: highlightConfig[content.level] }">{{ content.level }}</span>
              <span class="text-gray-500 mr-1.5">[{{ content.thread }}]</span>
              <span class="text-gray-700 mr-1.5">{{ content.logger }}</span>
              <span class="text-gray-500 mr-1.5">[{{ content.file }}]</span>
              <span>{{ content.message }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LoggerProps } from '@/ui/logger/types.ts'
import { formatMultipleLines } from '@/utils/logger.ts'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<LoggerProps>(), {
  items: () => [],
  highlightConfig: () => ({
    WARN: 'rgb(234 179 8)',
    ERROR: 'rgb(239 68 68)',
    DEBUG: 'rgb(107 114 128)',
    TRACE: 'rgb(156 163 175)'
  }),
  height: 200
})

const items = computed(() => formatMultipleLines(props.items))
</script>
