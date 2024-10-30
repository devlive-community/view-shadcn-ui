<template>
  <div class="relative space-y-2">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { TimelineContext } from './timeline.ts'

const props = withDefaults(defineProps<{
  split?: boolean
}>(), {
  split: false
})

const timelineItems = ref<Set<symbol>>(new Set())

const addItem = (id: symbol) => {
  timelineItems.value.add(id)
}

const removeItem = (id: symbol) => {
  timelineItems.value.delete(id)
}

const currentIndex = ref(0)
provide('getCurrentIndex', () => {
  currentIndex.value += 1
  return currentIndex.value - 1
})

provide<TimelineContext>('timelineContext', {
  addItem,
  removeItem,
  items: timelineItems.value,
  split: props.split
})
</script>
