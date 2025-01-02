<template>
  <div class="select-group space-y-1 select-none">
    <div class="px-2 py-1.5 text-sm font-medium text-gray-500">
      {{ label }}
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { defineProps, provide } from 'vue'
import { SelectGroupProps } from '@/ui/select/types.ts'

defineProps<SelectGroupProps>()

provide('inGroup', true)
</script>
