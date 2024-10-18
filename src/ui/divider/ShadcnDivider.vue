<template>
  <div class="overflow-hidden">
    <Separator :orientation="type as any"/>
    <slot name="content"/>
  </div>
</template>

<script setup lang="ts">
import { Separator } from '@/components/ui/separator'

withDefaults(defineProps<{
  type?: 'horizontal' | 'vertical'
}>(), {
  type: 'horizontal'
})
</script>
