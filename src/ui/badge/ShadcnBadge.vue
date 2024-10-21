<template>
  <Badge class="p-0.5"
         :style="{ backgroundColor: Type[type]}">
    <template v-if="text">{{ text }}</template>
    <slot v-else name="text"/>
    <slot />
  </Badge>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Type } from '@/ui/enum/Type.ts'

withDefaults(defineProps<{
  text?: string
  type?: keyof typeof Type
}>(), {
  type: 'primary'
})
</script>
