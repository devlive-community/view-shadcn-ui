<template>
  <div class="flex flex-col items-center justify-center text-center">
    <div class="space-y-3 flex flex-col items-center">
      <slot name="image">
        <div>
          <svg class="w-24 h-24 text-gray-400"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
          </svg>
        </div>
      </slot>

      <slot name="title">
        <h3 class="text-lg font-semibold text-gray-900">
          {{ t('empty.text.noData') }}
        </h3>
      </slot>

      <slot name="description">
        <p class="text-sm text-gray-500">
          {{ t('empty.text.noDataDescription') }}
        </p>
      </slot>

      <slot name="actions">
        <ShadcnButton @click="emit('on-retry')">
          {{ t('empty.text.retry') }}
        </ShadcnButton>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { t } from '@/utils/locale'
import type { EmptyEmits } from './types'

const emit = defineEmits<EmptyEmits>()
</script>
