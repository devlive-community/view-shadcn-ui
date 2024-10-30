<template>
  <div class="relative pl-8">
    <!-- Timeline dot wrapper with fixed positioning -->
    <div class="absolute left-0 my-2">
      <!-- Timeline dot slot with inherited positioning -->
      <slot name="dot">
        <div class="w-4 h-4 rounded-full bg-blue-400">
          <div class="absolute w-3 h-3 rounded-full top-0.5 left-0.5 bg-white"/>
        </div>
      </slot>
    </div>

    <!-- Timeline line - adjusted positioning -->
    <div v-if="!isLastItem" class="absolute my-0.5 left-[7px] top-[22px] h-full w-0 bg-blue-400 border-l-2"/>

    <!-- Content -->
    <div class="mb-4">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted } from 'vue'
import type { TimelineContext } from '../timeline.ts'
import { generateRandomId } from '@/utils/common.ts'

const id = Symbol(`timeline-item-${ generateRandomId() }`)

const timelineContext = inject<TimelineContext>('timelineContext',
    {
      items: new Set<symbol>(),
      addItem: () => void 0,
      removeItem: () => void 0
    })

if (!timelineContext) {
  throw new Error('ShadcnTimelineItem must be used within ShadcnTimeline')
}

onMounted(() => {
  timelineContext.addItem(id)
})

onUnmounted(() => {
  timelineContext.removeItem(id)
})

// Get the current index to determine whether it is the last child element
const getCurrentIndex = inject('getCurrentIndex', () => 0)
const currentIndex = getCurrentIndex()
const isLastItem = computed(() => currentIndex === timelineContext.items.size - 1)
</script>
