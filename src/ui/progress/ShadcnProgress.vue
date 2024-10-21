<template>
  <div :class="cn('w-full bg-gray-200 rounded-lg',
                  size && Size[size])">
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

enum Size
{
  default = 'h-2',
  large = 'h-4'
}

const props = withDefaults(defineProps<{
  modelValue: number
  status?: keyof typeof Status
  size?: keyof typeof Size
}>(), {
  status: 'info',
  size: 'default'
})

const applyValue = (value: number) => {
  return Math.min(Math.max(value, 0), 100)
}

const localValue = ref(applyValue(props.modelValue))

watch(() => props.modelValue, (value) => {
  localValue.value = applyValue(value)
})
</script>
