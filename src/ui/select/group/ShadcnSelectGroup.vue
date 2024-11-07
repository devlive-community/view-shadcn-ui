<template>
  <div class="select-group space-y-1">
    <div class="px-1.5 py-1.5 text-sm font-normal text-gray-300">
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
