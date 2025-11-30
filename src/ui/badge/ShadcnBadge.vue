<template>
  <div class="relative w-fit">
    <slot/>

    <div :class="cn('absolute -top-2 -right-2 text-[10px] rounded-full w-fit text-white',
                    dot ? 'p-1' : 'px-1.5 py-0.5',
                    dark ? ButtonBackgroundTypeDark[type] : ButtonBackgroundType[type]
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

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'primary',
  max: Infinity,
  dark: false
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