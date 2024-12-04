<template>
  <div class="w-full font-mono text-sm">
    <div class="overflow-y-auto">
      <div v-for="(content, index) in items" :key="index" class="whitespace-pre py-1 hover:bg-gray-100">
        <span class="mr-1">{{ content.timestamp }}</span>
        <span :style="{ color: highlightConfig[content.level] }">{{ content.level }}</span>
        <span class="text-gray-500 mr-1">[{{ content.thread }}]</span>
        <span class="text-gray-700 mr-1">{{ content.logger }}</span>
        <span class="text-gray-500 mr-1">[{{ content.file }}]</span>
        <span>{{ content.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LoggerProps } from '@/ui/logger/types.ts'
import { formatMultipleLines } from '@/utils/logger.ts'

const props = withDefaults(defineProps<LoggerProps>(), {
  items: () => [],
  highlightConfig: () => ({
    WARN: 'rgb(234 179 8)',
    ERROR: 'rgb(239 68 68)',
    DEBUG: 'rgb(107 114 128)',
    TRACE: 'rgb(156 163 175)'
  })
})

const items = computed(() => formatMultipleLines(props.items))
</script>
