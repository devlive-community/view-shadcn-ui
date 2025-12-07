<template>
  <div class="flex flex-col items-center justify-center text-center">
    <div class="space-y-3 flex flex-col items-center mb-3">
      <slot name="image">
        <svg :class="['w-32 h-32', dark ? 'text-gray-400' : 'text-gray-300']"
             viewBox="0 0 200 200"
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="boxGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop :style="`stop-color: ${dark ? '#6b7280' : '#9ca3af'}; stop-opacity: 0.3`" offset="0%"/>
              <stop :style="`stop-color: ${dark ? '#4b5563' : '#6b7280'}; stop-opacity: 0.1`" offset="100%"/>
            </linearGradient>
          </defs>

          <circle cx="100" cy="100" fill="url(#boxGradient)" opacity="0.2" r="80"/>

          <g transform="translate(100, 100)">
            <path d="M -40 0 L -40 30 Q -40 40 -30 40 L 30 40 Q 40 40 40 30 L 40 0"
                  fill="currentColor" opacity="0.3"/>

            <rect fill="none" height="50" opacity="0.6" rx="8" stroke="currentColor"
                  stroke-width="2.5" width="80" x="-40" y="-20"/>

            <path d="M -45 -20 L -20 -35 L 25 -35 L 45 -20"
                  fill="none" opacity="0.6" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>

            <g transform="translate(0, 5)">
              <circle cx="-15" cy="0" fill="currentColor" opacity="0.4" r="3"/>
              <circle cx="0" cy="0" fill="currentColor" opacity="0.4" r="3"/>
              <circle cx="15" cy="0" fill="currentColor" opacity="0.4" r="3"/>
            </g>
          </g>

          <circle cx="100" cy="100" fill="none" opacity="0.2"
                  r="60" stroke="currentColor"
                  stroke-dasharray="5,5" stroke-width="1"/>
        </svg>
      </slot>

      <slot name="title">
        <h3 :class="['text-lg font-semibold', dark ? 'text-gray-200' : 'text-gray-900']">
          {{ t('empty.text.noData') }}
        </h3>
      </slot>

      <slot name="description">
        <p :class="['text-sm', dark ? 'text-gray-400' : 'text-gray-500']">
          {{ t('empty.text.noDataDescription') }}
        </p>
      </slot>

      <slot name="actions">
        <ShadcnButton :dark="dark" @click="emit('on-retry')">
          {{ t('empty.text.retry') }}
        </ShadcnButton>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { t } from '@/utils/locale'
import type { EmptyEmits, EmptyProps } from './types'
import { ShadcnButton } from "@/ui/button";

const emit = defineEmits<EmptyEmits>()
withDefaults(defineProps<EmptyProps>(), {
  dark: false
})
</script>
