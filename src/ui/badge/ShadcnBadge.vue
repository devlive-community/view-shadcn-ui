<template>
  <Badge :style="{ backgroundColor: Type[type]}">
    <slot/>
  </Badge>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Type } from '@/ui/enum/Type.ts'

withDefaults(defineProps<{
  type?: keyof typeof Type
}>(), {
  type: 'primary'
})
</script>
