<template>
  <div class="w-full bg-gray-200 rounded-lg h-5">
    <div :class="cn('h-full rounded-lg transition-all',
                    status && Status[status])"
         :style="{ width: localValue + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils.ts'

enum Status
{
  success = 'bg-green-500',
  error = 'bg-red-500',
  warning = 'bg-yellow-500',
  info = 'bg-blue-500'
}

const props = withDefaults(defineProps<{
  modelValue: number
  status?: keyof typeof Status
}>(), {
  status: 'info'
})

const applyValue = (value: number) => {
  return Math.min(Math.max(value, 0), 100)
}

const localValue = ref(applyValue(props.modelValue))

watch(() => props.modelValue, (value) => {
  localValue.value = applyValue(value)
})
</script>
