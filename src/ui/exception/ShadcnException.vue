<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="flex flex-col items-center justify-center px-4 py-2">
      <div class="mb-6">
        <slot name="icon">
          <!-- 401 Icon -->
          <svg v-if="type === '401'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
            <circle :class="dark ? 'stroke-gray-600' : 'stroke-gray-200'" cx="12" cy="12" r="10" stroke-width="1.5"/>
            <path :class="dark ? 'stroke-gray-400' : 'stroke-gray-400'" d="M8 11v-1a4 4 0 0 1 8 0v1M10 14a2 2 0 1 0 4 0" stroke-linecap="round" stroke-width="1.5"/>
          </svg>

          <!-- 404 Icon -->
          <svg v-else-if="type === '404'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
            <circle :class="dark ? 'stroke-gray-600' : 'stroke-gray-200'" cx="12" cy="12" r="10" stroke-width="1.5"/>
            <path :class="dark ? 'stroke-gray-400' : 'stroke-gray-400'" d="M9 10h.01M15 10h.01" stroke-linecap="round" stroke-width="2"/>
            <path :class="dark ? 'stroke-gray-400' : 'stroke-gray-400'" d="M9 15c.5-1.5 1.79-2 3-2s2.5.5 3 2" stroke-linecap="round" stroke-width="1.5"/>
          </svg>

          <!-- 403 Icon -->
          <svg v-else-if="type === '403'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
            <path :class="dark ? 'stroke-gray-600' : 'stroke-gray-200'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-width="1.5"/>
            <path :class="dark ? 'stroke-gray-400' : 'stroke-gray-400'" d="M12 10v5M10 12h4" stroke-linecap="round" stroke-width="1.5"/>
          </svg>

          <!-- 500 Icon -->
          <svg v-else-if="type === '500'" class="w-24 h-24" viewBox="0 0 24 24" fill="none">
            <path :class="dark ? 'stroke-gray-600' : 'stroke-gray-200'" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke-width="1.5"/>
            <path :class="dark ? 'stroke-gray-400' : 'stroke-gray-400'" d="M12 9v4M12 17h.01" stroke-linecap="round" stroke-width="1.5"/>
          </svg>
        </slot>
      </div>

      <h1 :class="['text-2xl font-bold mb-2', dark ? 'text-gray-200' : 'text-gray-900']">
        {{ title || defaultTitle }}
      </h1>

      <p :class="['text-base mb-6 text-center max-w-md', dark ? 'text-gray-400' : 'text-gray-500']">
        {{ description || defaultDescription }}
      </p>

      <div class="flex gap-4">
        <slot name="actions">
          <ShadcnButton :dark="dark" type="primary">{{ t('exception.action.backHome') }}</ShadcnButton>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { t } from '@/utils/locale'
import { ShadcnButton } from '@/ui/button'

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
    title: String(t('exception.text.401.title')),
    description: String(t('exception.text.401.description'))
  },
  '403': {
    type: 'FORBIDDEN',
    title: String(t('exception.text.403.title')),
    description: String(t('exception.text.403.description'))
  },
  '404': {
    type: 'NOT_FOUND',
    title: String(t('exception.text.404.title')),
    description: String(t('exception.text.404.description'))
  },
  '500': {
    type: 'INTERNAL_SERVER_ERROR',
    title: String(t('exception.text.500.title')),
    description: String(t('exception.text.500.description'))
  }
}

interface Props
{
  type?: ExceptionKey
  title?: string
  description?: string
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: '404',
  dark: false
})

const defaultTitle = computed(() => exceptionMap[props.type].title)
const defaultDescription = computed(() => exceptionMap[props.type].description)
</script>
