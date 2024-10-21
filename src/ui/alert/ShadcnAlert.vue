<template>
  <Alert>
    <AlertDescription>
      <slot/>
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertDescription } from '@/components/ui/alert'
</script>
