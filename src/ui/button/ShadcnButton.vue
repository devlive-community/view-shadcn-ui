<template>
  <button type="button"
          :class="[ButtonSize[size],
                  ButtonBackgroundType[type],
                  ButtonHoverType[type],
                  type === 'text' ? 'text-gray-600' : 'text-white',
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
import { Loader2 } from 'lucide-vue-next'
import { ButtonBackgroundType, ButtonHoverType } from '@/ui/common/type.ts'
import { ButtonSize } from '@/ui/common/size.ts'

withDefaults(defineProps<{
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
</script>
