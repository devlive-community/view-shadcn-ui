<template>
  <div class="relative w-fit">
    <slot/>

    <div :class="cn('absolute -top-2 -right-2 text-[10px] rounded-full w-fit text-white',
                    dot ? 'p-1' : 'px-1.5 py-0.5',
                    glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
                    glass ? 'border border-white/20' : '',
                    glass ? 'shadow-lg shadow-black/5' : '',
                    glass
                      ? (dark ? GlassBackgroundTypeDark[type] : GlassBackgroundType[type])
                      : (dark ? ButtonBackgroundTypeDark[type] : ButtonBackgroundType[type])
          )">
      <slot name="text">
        {{ displayedText }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { computed } from 'vue'
import { isNaN, toNumber } from 'lodash'
import { ButtonBackgroundType, ButtonBackgroundTypeDark } from '@/ui/common/type.ts'
import { BadgeProps } from '@/ui/badge/types.ts'

const GlassBackgroundType = {
  primary: 'bg-blue-500/30',
  success: 'bg-green-500/30',
  warning: 'bg-yellow-500/30',
  danger: 'bg-red-500/30',
  info: 'bg-blue-500/30',
  default: 'bg-gray-500/30',
  text: 'bg-gray-500/30'
}

const GlassBackgroundTypeDark = {
  primary: 'bg-blue-600/30',
  success: 'bg-green-600/30',
  warning: 'bg-yellow-600/30',
  danger: 'bg-red-600/30',
  info: 'bg-blue-600/30',
  default: 'bg-gray-600/30',
  text: 'bg-gray-600/30'
}

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'primary',
  max: Infinity,
  dark: false,
  glass: false
})

const displayedText = computed(() => {
  if (typeof props.text === 'number' || !isNaN(toNumber(props.text))) {
    const textAsNumber = toNumber(props.text)
    const maxAsNumber = toNumber(props.max)
    return textAsNumber > maxAsNumber ? `${maxAsNumber}+` : textAsNumber
  }
  return props.text
})
</script>