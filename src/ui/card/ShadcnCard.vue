<template>
  <div :class="cn('bg-white border rounded-sm', computedShadow,
                  !$slots.content ? 'min-h-32' : '')">
    <div v-if="loading" class="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-10">
      <ShadcnIcon icon="Loader2" class="h-5 w-5 animate-spin"/>
    </div>
    <div v-else class="relative">
      <div v-if="$slots.title || title"
           :class="cn('flex flex-row items-center justify-between border-b p-2')">
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
      <div v-if="$slots.content" class="p-0 min-h-32">
        <slot name="content"/>
      </div>
      <div v-else class="p-0">
        <slot/>
      </div>
      <div v-if="$slots.footer" class="p-0">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { cn } from '@/lib/utils'
import { Shadow } from '@/ui/enum/Shadow.ts'
import ShadcnIcon from '@/ui/icon'

const props = defineProps<{
  title?: string
  description?: string
  shadow?: keyof typeof Shadow
  loading?: boolean
}>()

const computedShadow = ref<string>('never')

watchEffect(() => {
  computedShadow.value = Shadow[props.shadow || 'never']
})
</script>
