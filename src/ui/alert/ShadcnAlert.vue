<template>
  <Alert :style="{ backgroundColor: Type[type] }">
    <AlertTitle v-if="title || $slots.title">
      <span v-if="title">{{ title }}</span>
      <slot v-else-if="$slots.title" name="title"/>
    </AlertTitle>
    <AlertDescription>
      <slot/>
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

enum Type
{
  info = '#f0faff',
  success = '#edfff3',
  warning = '#fff9e6',
  error = '#ffefe6'
}

withDefaults(defineProps<{
  title?: string
  type?: keyof typeof Type
}>(), {
  type: 'info'
})
</script>
