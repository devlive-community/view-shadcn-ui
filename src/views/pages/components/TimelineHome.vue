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
    <ICard body-class="pt-3">
      <template #title>Milestone</template>
      <MilestoneTimeline :items="items[0].children as any[]"/>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Milestone Slot</template>
      <MilestoneTimeline :items="items[0].children as any[]">
        <template #item="{ item }">
          <div
              class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div class="text-xl font-bold text-slate-900">{{ item.title }}</div>
          </div>
        </template>
      </MilestoneTimeline>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Progress</template>
      <ProgressTimeline :items="items[0].children as any[]"/>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Progress Slot</template>
      <ProgressTimeline :items="items[0].children as any[]">
        <template #item="{ item }">
          <div
              class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z"/>
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">{{ item.title }}</div>
              <time class="font-caveat font-medium text-amber-500">{{ item.time }}</time>
            </div>
            <div class="text-slate-500">{{ item.description }}</div>
          </div>
        </template>
      </ProgressTimeline>
    </ICard>
    <ICard body-class="pt-3">
      <template #title>Discussion</template>
      <DiscussionTimeline :items="items[0].children as any[]"/>
    </ICard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import DefaultTimeline from '@/views/components/timeline/default/DefaultTimeline.vue'
import MilestoneTimeline from '@/views/components/timeline/milestone/MilestoneTimeline.vue'
import ProgressTimeline from '@/views/components/timeline/progress/ProgressTimeline.vue'
import DiscussionTimeline from '@/views/components/timeline/discussion/DiscussionTimeline.vue'
import { Timeline } from '@/views/components/timeline/Timeline.ts'

export default defineComponent({
  name: 'TimelineHome',
  components: { DiscussionTimeline, ProgressTimeline, MilestoneTimeline, DefaultTimeline, ICard },
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
              time: '2024-04-17',
              type: 'opened'
            },
            {
              title: 'Shadcn UI 002',
              description: 'Learn Shadcn UI 002',
              tip: 'Tip Shadcn UI 002',
              time: '2024-04-17',
              type: 'commented'
            },
            {
              title: 'Shadcn UI 003',
              description: 'Learn Shadcn UI 003',
              tip: 'Tip Shadcn UI 003',
              time: '2024-04-17',
              type: 'closed'
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
