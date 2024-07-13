<template>
  <div v-for="item in items">
    <div class="ps-2 my-2 first:mt-0">
      <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">{{ item.title }}</h3>
    </div>
    <div v-for="child in item.children" class="flex gap-x-3">
      <div
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div class="relative z-10 size-7 flex justify-center items-center">
          <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
        </div>
      </div>
      <slot v-if="$slots.item" name="item" :item="child"/>
      <div v-else class="grow pt-0.5 pb-8">
        <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">{{ child.title }}</h3>
        <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">{{ child.description }}</p>
        <button type="button"
                class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
          {{ child.time }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Timeline } from '@/views/components/timeline/Timeline.ts'

export default defineComponent({
  name: 'DefaultTimeline',
  props: {
    items: {
      type: Array<Timeline>,
      required: true
    }
  }
})
</script>
