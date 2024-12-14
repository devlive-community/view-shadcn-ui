<template>
  <div class="p-32 space-x-4">
    <ShadcnButton @click="LoadingBar.start">Start</ShadcnButton>
    <ShadcnButton @click="LoadingBar.done">Done</ShadcnButton>
    <ShadcnButton type="success" @click="LoadingBar.success()">Success</ShadcnButton>
    <ShadcnButton type="error" @click="LoadingBar.error()">Error</ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { LoadingBar } from '@/ui/loading-bar/service.ts'
</script>
