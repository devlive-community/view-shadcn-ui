<template>
  <div :class="['relative flex', itemClass]">
    <!-- Content left -->
    <div v-if="timelineContext.split" class="w-1/2">
      <div v-if="currentIndex % 2 === 0" class="pr-4 text-right">
        <slot/>
      </div>
    </div>

    <div :class="['relative flex flex-col items-center', timelineContext.split ? '' : 'absolute left-0']">
      <!-- Timeline dot wrapper -->
      <div class="flex items-center" :class="dotClass">
        <slot name="dot">
          <div class="w-4 h-4 rounded-full bg-blue-400 relative">
            <div class="absolute w-3 h-3 rounded-full top-0.5 left-0.5 bg-white"/>
          </div>
        </slot>
      </div>
      <!-- Timeline line -->
      <div v-if="!isLastItem" :class="['bg-blue-400 w-0.5', lineClass]"/>
    </div>

    <!-- Content right -->
    <div v-if="timelineContext.split" class="w-1/2">
      <div v-if="currentIndex % 2 !== 0" class="pl-4 text-left">
        <slot/>
      </div>
    </div>

    <!-- Default Content without split -->
    <div v-if="!timelineContext.split" :class="['pl-8', contentClass]">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted } from 'vue'
import type { TimelineContext } from '../timeline.ts'
import { generateRandomId } from '@/utils/common.ts'

const id = Symbol(`timeline-item-${ generateRandomId() }`)
const timelineContext = inject<TimelineContext>('timelineContext', {
  items: new Set<symbol>(),
  addItem: () => void 0,
  removeItem: () => void 0,
  split: false
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

const getCurrentIndex = inject('getCurrentIndex', () => 0)
const currentIndex = getCurrentIndex()
const isLastItem = computed(() => currentIndex === timelineContext.items.size - 1)

const itemClass = computed(() => timelineContext.split ? 'justify-between' : '')
const dotClass = computed(() => 'my-2')
const lineClass = computed(() => timelineContext.split ? 'h-full' : 'min-h-8 h-full')
const contentClass = computed(() => 'mb-4')
</script>
