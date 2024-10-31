<template>
  <div class="flex flex-col items-center justify-center min-h-[400px] px-4">
    <div class="mb-6">
      <!-- 401 Icon -->
      <svg v-if="type === '401'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" class="stroke-gray-200" stroke-width="1.5"/>
        <path d="M8 11v-1a4 4 0 0 1 8 0v1M10 14a2 2 0 1 0 4 0" class="stroke-gray-400" stroke-width="1.5" stroke-linecap="round"/>
      </svg>

      <!-- 404 Icon -->
      <svg v-else-if="type === '404'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" class="stroke-gray-200" stroke-width="1.5"/>
        <path d="M9 10h.01M15 10h.01" class="stroke-gray-400" stroke-width="2" stroke-linecap="round"/>
        <path d="M9 15c.5-1.5 1.79-2 3-2s2.5.5 3 2" class="stroke-gray-400" stroke-width="1.5" stroke-linecap="round"/>
      </svg>

      <!-- 403 Icon -->
      <svg v-else-if="type === '403'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" class="stroke-gray-200" stroke-width="1.5"/>
        <path d="M12 10v5M10 12h4" class="stroke-gray-400" stroke-width="1.5" stroke-linecap="round"/>
      </svg>

      <!-- 500 Icon -->
      <svg v-else-if="type === '500'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" class="stroke-gray-200" stroke-width="1.5"/>
        <path d="M12 9v4M12 17h.01" class="stroke-gray-400" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>

    <h1 class="text-2xl font-bold text-gray-900 mb-2">
      {{ title || defaultTitle }}
    </h1>

    <p class="text-base text-gray-500 mb-6 text-center max-w-md">
      {{ description || defaultDescription }}
    </p>

    <div class="flex gap-4">
      <ShadcnButton type="primary">Back Home</ShadcnButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ShadcnButton from '@/ui/button'

type ExceptionKey = '401' | '403' | '404' | '500'

interface ExceptionInfo
{
  type: string
  title: string
  description: string
}

const exceptionMap: Record<ExceptionKey, ExceptionInfo> = {
  '401': {
    type: 'UNAUTHORIZED',
    title: 'Not logged in',
    description: 'Sorry, you need to login first to access this page.'
  },
  '403': {
    type: 'FORBIDDEN',
    title: 'No permission to access this page',
    description: 'Sorry, you do not have permission to access this page.'
  },
  '404': {
    type: 'NOT_FOUND',
    title: 'The visited page does not exist',
    description: 'The page you are looking for does not exist.'
  },
  '500': {
    type: 'INTERNAL_SERVER_ERROR',
    title: 'There was an error on the server',
    description: 'Sorry, there was an error on the server.'
  }
}

interface Props
{
  type?: ExceptionKey
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: '404'
})

const defaultTitle = computed(() => exceptionMap[props.type].title)
const defaultDescription = computed(() => exceptionMap[props.type].description)
</script>
