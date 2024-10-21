<template>
  <div class="relative inline-block">
    <slot/>

    <Badge :class="cn('absolute top-0 right-0 translate-x-2/4 -translate-y-2/4',
                      dot ? 'p-1' : 'px-1 py-0.5')"
           :style="{ backgroundColor: Type[type]}">
      <template v-if="text">{{ text }}</template>
      <slot v-else-if="$slots.text" name="text"/>
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Type } from '@/ui/enum/Type.ts'
import { cn } from '@/lib/utils.ts'

withDefaults(defineProps<{
  text?: string
  type?: keyof typeof Type
  dot?: boolean
}>(), {
  type: 'primary'
})
</script>
