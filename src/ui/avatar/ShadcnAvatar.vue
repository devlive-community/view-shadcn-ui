<template>
  <Avatar>
    <AvatarImage :src="String(src)" class="border-2 border-background w-8 h-8 cursor-pointer"/>
    <AvatarFallback>{{ alt }}</AvatarFallback>
  </Avatar>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineProps<{
  src?: string
  alt?: string
}>()
</script>
