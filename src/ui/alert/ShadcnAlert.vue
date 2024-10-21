<template>
  <Alert>
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

defineProps<{
  title?: string
}>()
</script>
