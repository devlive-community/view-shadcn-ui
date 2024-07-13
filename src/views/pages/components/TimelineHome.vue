<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-2">
    <ICard body-class="pt-3">
      <template #title>Default</template>
      <DefaultTimeline :items="items"/>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Custom Slot</template>
      <DefaultTimeline :items="items">
        <template #item="{ item }">
          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg class="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              {{ item.title }}
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {{ item.description }}
            </p>
            <button type="button"
                    class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
              <img class="flex-shrink-0 size-4 rounded-full" src="https://avatars.githubusercontent.com/u/135088160?s=200&v=4" alt="Image Description">
              {{ item.time }}
            </button>
          </div>
        </template>
      </DefaultTimeline>
    </ICard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import DefaultTimeline from '@/views/components/timeline/default/DefaultTimeline.vue'
import { Timeline } from '@/views/components/timeline/Timeline.ts'

export default defineComponent({
  name: 'TimelineHome',
  components: { DefaultTimeline, ICard },
  data()
  {
    return {
      items: [
        {
          title: 'Shadcn UI',
          children: [
            {
              title: 'Shadcn UI',
              description: 'Learn Shadcn UI',
              time: '2024-04-17 10:00:00'
            },
            {
              title: 'Shadcn UI',
              description: 'Learn Shadcn UI',
              time: '2024-04-17 10:00:00'
            }
          ]
        },
        {
          title: 'Vue 3',
          children: [
            {
              title: 'Vue 3',
              description: 'Learn Vue 3',
              time: '2024-04-17 10:00:00'
            }
          ]
        }
      ] as Timeline[]
    }
  }
})
</script>
