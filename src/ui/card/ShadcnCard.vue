<template>
  <div :class="cn('bg-white rounded-sm',
            border && 'border',
            Shadow[shadow])
       ">
    <div v-if="loading" class="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-10">
      <ShadcnIcon icon="Loader2" class="h-5 w-5 animate-spin"/>
    </div>
    <div v-else class="relative">
      <div v-if="$slots.title || title"
           :class="cn('p-2',
                border && 'border-b',
                $slots.extra && 'flex flex-row items-center justify-between'
           )">
        <div class="grid gap-2">
          <h3 class="text-lg font-semibold leading-none tracking-tight">
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"/>
          </h3>
          <div v-if="$slots.description || description">
            <p class="text-sm text-muted-foreground">
              <span v-if="description">{{ description }}</span>
              <slot v-else name="description"/>
            </p>
          </div>
        </div>
        <div v-if="$slots.extra">
          <slot name="extra"/>
        </div>
      </div>
      <div v-if="$slots.content">
        <slot name="content"/>
      </div>
      <div v-else>
        <slot/>
      </div>
      <div v-if="$slots.footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import ShadcnIcon from '@/ui/icon'
import { CardProps, Shadow } from '@/ui/card/types.ts'

withDefaults(defineProps<CardProps>(), {
  shadow: 'never',
  border: true
})
</script>
