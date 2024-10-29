<template>
  <button type="button"
          :class="[
            'inline-flex items-center justify-center whitespace-nowrap transition-colors',
            ButtonSize[size],
            type === 'default' ? defaultStyle : typeStyles,
            {'rounded-full': round || circle},
            {'rounded-md': !round && !circle},
            {'w-9 h-9 p-0': circle},
            {'opacity-70 cursor-not-allowed': loading || disabled},
          ]"
          :disabled="loading || disabled"
          :style="{ backgroundColor: color }">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center">
      <Loader2 class="animate-spin" :class="{'mr-1.5': $slots.loading}"/>
      <slot v-if="$slots.loading" name="loading"/>
    </div>

    <!-- Normal State -->
    <div v-else class="flex items-center justify-center gap-1.5">
      <slot v-if="$slots.icon" name="icon"/>
      <span v-if="text" :class="{'ml-0': !$slots.icon}">{{ text }}</span>
      <slot v-else/>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import { ButtonBackgroundType, ButtonHoverType } from '@/ui/common/type.ts'
import { ButtonSize } from '@/ui/common/size.ts'

const props = withDefaults(defineProps<{
  text?: string
  size?: keyof typeof ButtonSize
  type?: keyof typeof ButtonBackgroundType
  round?: boolean
  circle?: boolean
  loading?: boolean
  color?: string
  disabled?: boolean
}>(), {
  size: 'default',
  type: 'primary'
})

const defaultStyle = computed(() => [
  'border',
  'border-gray-200',
  'text-gray-500',
  'hover:border-gray-300',
  'hover:bg-gray-50',
  'focus:ring-2',
  'focus:ring-gray-200',
  'focus:ring-offset-2'
])

const typeStyles = computed(() => [
  ButtonBackgroundType[props.type],
  ButtonHoverType[props.type],
  props.type === 'text' ? 'text-gray-500' : 'text-white'
])
</script>
