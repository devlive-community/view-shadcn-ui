<template>
  <div :class="cn('relative w-full rounded-lg',
                  size && Size[size],
                  glass && 'backdrop-blur-xl backdrop-saturate-150',
                  glass && 'shadow-lg shadow-black/5',
                  glass && (dark ? 'bg-white/10 border border-white/20' : 'bg-white/30 border border-gray-400/40'),
                  !glass && (dark ? 'bg-gray-700' : 'bg-gray-200'))">
    <div :class="cn('h-full rounded-lg transition-all',
                    glass && status && GlassStatus[status],
                    !glass && status && Status[status])"
         :style="{ width: localValue + '%' }">
    </div>
    <div v-if="showLabel" :class="cn('absolute inset-0 flex items-center justify-center text-xs font-normal',
                                      glass ? (dark ? 'text-gray-200' : 'text-gray-800') : 'text-white')">
      {{ localValue }}%
    </div>
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

enum GlassStatus
{
  success = 'bg-green-500/50',
  error = 'bg-red-500/50',
  warning = 'bg-yellow-500/50',
  info = 'bg-blue-500/50'
}

enum Size
{
  default = 'h-2.5',
  large = 'h-5'
}

const props = withDefaults(defineProps<{
  modelValue: number
  status?: keyof typeof Status
  size?: keyof typeof Size
  showLabel?: boolean
  dark?: boolean
  glass?: boolean
}>(), {
  status: 'info',
  size: 'default',
  dark: false,
  glass: false
})

const applyValue = (value: number) => {
  return Math.min(Math.max(value, 0), 100)
}

const localValue = ref(applyValue(props.modelValue))

watch(() => props.modelValue, (value) => {
  localValue.value = applyValue(value)
})
</script>
