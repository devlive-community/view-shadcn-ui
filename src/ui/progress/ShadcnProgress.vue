<template>
  <div class="w-full bg-gray-200 rounded-lg h-5">
    <div :class="cn('h-full rounded-lg transition-all bg-green-500')"
         :style="{ width: localValue + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils.ts'

const props = withDefaults(defineProps<{
  modelValue: number
}>(), {})

const localValue = ref(Math.min(Math.max(props.modelValue, 0), 100))

watch(() => props.modelValue, (value) => {
  localValue.value = Math.min(Math.max(value, 0), 100)
})
</script>
