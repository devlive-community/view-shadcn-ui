<template>
  <Alert class="flex items-center space-x-2"
         :style="{ backgroundColor: Type[type] }">
    <div v-if="showIcon">
      <ShadcnIcon :icon="Icon[type]"/>
    </div>
    <div v-else-if="$slots.icon">
      <slot name="icon"/>
    </div>
    <div class="flex-1">
      <AlertTitle v-if="title || $slots.title">
        <span v-if="title">{{ title }}</span>
        <slot v-else-if="$slots.title" name="title"/>
      </AlertTitle>
      <AlertDescription>
        <slot/>
      </AlertDescription>
    </div>
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

enum Icon
{
  info = 'Info',
  success = 'CheckCircle',
  warning = 'TriangleAlert',
  error = 'XCircle'
}

withDefaults(defineProps<{
  title?: string
  type?: keyof typeof Type
  showIcon?: boolean
}>(), {
  type: 'info'
})
</script>
