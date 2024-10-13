<template>
  <Card :class="cn('relative rounded-sm', computedShadow,
                   !$slots.content ? 'min-h-32' : '')">
    <div v-if="loading" class="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-10">
      <Loader2 class="mr-2 animate-spin text-center text-blue-300"/>
    </div>
    <div v-else>
      <CardHeader v-if="$slots.title || title" :class="cn('flex flex-row items-center justify-between border-b p-2')">
        <div class="grid gap-2">
          <CardTitle>
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"/>
          </CardTitle>
          <div v-if="$slots.description || description">
            <CardDescription>
              <span v-if="description">{{ description }}</span>
              <slot v-else name="description"/>
            </CardDescription>
          </div>
        </div>
        <div v-if="$slots.extra">
          <slot name="extra"/>
        </div>
      </CardHeader>
      <CardContent v-if="$slots.content" class="p-0 min-h-32">
        <slot name="content"/>
      </CardContent>
      <CardContent v-else class="p-0">
        <slot/>
      </CardContent>
      <CardFooter v-if="$slots.footer" class="border-t flex items-center justify-between pb-0 p-2">
        <slot name="footer"/>
      </CardFooter>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-vue-next'
import { Shadow } from '@/ui/enum/Shadow.ts'

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
